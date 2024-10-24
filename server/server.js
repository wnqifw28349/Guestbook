// server.js
// import our node modules
import express, { json } from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// setup the server
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// connect to our database
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", (req, res) => {
  res.json("You are at the root route.");
});

app.get("/messages", async function (req, res) {
  // select all of the messages
  const result = await db.query("SELECT * FROM guestbook");
  const messages = result.rows;
  // send the messages to the client
  res.json(messages);
});

app.post("/messages", function (req, res) {
  // get the request body
  const { message, name } = request.body; //destructuring data, obtaining multiple items from a database

  //write the script with placeholder values. Sanitising inputs for SQL injection
  const result = db.query(
    "INSERT INTO guestbook (name, message) VALUES ($1, $2)",
    [name, message]
  );

  //send back json response if row value !=1

  json.response(result);
});

app.listen(3000, function () {
  console.log(`Server is running on port 3000`);
});
