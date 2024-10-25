import express, { json } from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", (req, res) => {
  res.json("You are at the root route.");
});

app.get("/messages", async function (req, res) {
  const result = await db.query("SELECT * FROM guestbook");
  const messages = result.rows;

  res.json(messages);
});

app.post("/messages", function (req, res) {
  // get the request body
  const { name, message } = req.body; //destructuring data, obtaining multiple items from a database
  //write the script with placeholder values. Sanitising inputs for SQL injection
  const result = db.query(
    "INSERT INTO guestbook (name, message) VALUES $1, $2)",
    [name, message]
  );
  //send back json response if row value !=1#

  res.json(result);
});

app.listen(3500, function () {
  console.log(`Server is running on port 3500`);
});
