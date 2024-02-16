import { Router } from "express";
import { body, param } from "express-validator";
import * as blogController from "../controllers/blog-controller";

const router = Router();

router
  .post(
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
  )
  .get("/", blogController.getAllBlogs)
  .get("/:blogId", param("blogId").isMongoId(), blogController.getSingleBlog)
  .patch(
    "/:blogId",
    [
      param("blogId").isMongoId(),
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
    blogController.updateBlog,
  )
  .delete("/:blogId", param("blogId").isMongoId(), blogController.deleteBlog);

export default router;
