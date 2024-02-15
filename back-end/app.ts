import { config } from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { connect } from "mongoose";
import morgan from "morgan";
import { exit } from "node:process";
import cors from "cors";
import blogRoutes from "./routes/blog-routes";
import { CustomError } from "./util";

config();

const MONGODB_URL = process.env.MONGODB_URL;

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use("/blogs", blogRoutes);

app.use(
  (
    error: CustomError,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) => {
    const { message, errors, status } = error;

    return response.status(status || 500).json({ message: errors || message });
  },
);

if (MONGODB_URL) {
  connect(MONGODB_URL)
    .then(() => app.listen(5000, () => console.log("[Server]: 5000")))
    // eslint-disable-next-line unicorn/prefer-top-level-await
    .catch(() => exit(1));
}
