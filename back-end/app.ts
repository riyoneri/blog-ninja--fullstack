import { config } from "dotenv";
import express from "express";
import { connect } from "mongoose";
import morgan from "morgan";
import { exit } from "node:process";

config();

const MONGODB_URL = process.env.MONGODB_URL;

const app = express();

app.use(morgan("dev"));

if (MONGODB_URL) {
  connect(MONGODB_URL)
    .then(() => app.listen(5000, () => console.log("[Server]: 5000")))
    // eslint-disable-next-line unicorn/prefer-top-level-await
    .catch(() => exit(1));
}
