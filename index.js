import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.status(200).json("Welcome to the Progrss Tracking API API");
});

const startServer = async () => {
  try {
    console.log("Starting server...");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT} http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("Error on server startup");
    console.log(err);
  }
};

startServer();
