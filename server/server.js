// server.js
// import our node modules
import express from "express";
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
  res.send("You are at the root route.");
});

app.listen(3000, function () {
  console.log(`Server is running on port 3000`);
});
