import { Router } from "express";
import { body } from "express-validator";
import * as blogController from "../controllers/blog-controller";

const router = Router();

router.post(
  "/",
  [
    body("title", "Blog title is required")
      .notEmpty({
        ignore_whitespace: true,
      })
      .isString(),
    body("snippet", "Blog snippet is required")
      .notEmpty({
        ignore_whitespace: true,
      })
      .isString(),
    body("body", "Blog body is required")
      .notEmpty({
        ignore_whitespace: true,
      })
      .isString(),
  ],
  blogController.createBlog,
);

export default router;
