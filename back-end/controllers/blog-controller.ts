import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { isMatch } from "lodash";
import { isValidObjectId } from "mongoose";
import Blog from "../models/blog-model";
import { CustomError, serializeValidation } from "../util";

export async function createBlog(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      const error = new CustomError(
        "Validation failed",
        400,
        serializeValidation(errors),
      );

      return next(error);
    }

    const blogData = new Blog(request.body);

    const savedBlog = await blogData.save();

    const blog = savedBlog.toJSON({
      transform(document, returnValue) {
        delete returnValue._id;
        return {
          _id: document._id,
          ...returnValue,
        };
      },
    });

    response.status(201).json(blog);
  } catch {
    const error = new CustomError("Internal server error", 500);
    next(error);
  }
}

export async function getAllBlogs(
  _: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const blogs = await Blog.find().sort({ _id: -1 });

    response.status(200).json(blogs);
  } catch {
    const error = new CustomError("Internal server error", 500);
    next(error);
  }
}

export async function getSingleBlog(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      const error = new CustomError("Invalid blog id", 400);

      return next(error);
    }

    if (!isValidObjectId(request.params.blogId)) {
      const error = new CustomError("Blog not found", 404);

      return next(error);
    }

    const blog = await Blog.findById(request.params.blogId);

    if (!blog) {
      const error = new CustomError("Blog not found", 404);

      return next(error);
    }

    response.status(200).json(blog);
  } catch {
    const error = new CustomError("Internal server error", 500);
    next(error);
  }
}

export async function updateBlog(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      const error = new CustomError(
        "Validation failed",
        400,
        serializeValidation(errors),
      );

      return next(error);
    }

    if (!isValidObjectId(request.params.blogId)) {
      const error = new CustomError("Blog not found", 404);

      return next(error);
    }

    const blog = await Blog.findById(request.params.blogId);

    if (!blog) {
      const error = new CustomError("Blog not found", 404);

      return next(error);
    }

    if (isMatch(blog.toObject(), request.body))
      return response.status(200).json(blog);

    blog.title = request.body.title;
    blog.snippet = request.body.snippet;
    blog.body = request.body.body;

    const savedBlog = await blog.save();

    const transformedBlog = savedBlog.toObject({
      transform(document_, returnValue) {
        delete returnValue._id;
        return {
          _id: document_._id,
          ...returnValue,
        };
      },
    });

    response.status(200).json(transformedBlog);
  } catch {
    const error = new CustomError("Internal server error", 500);
    next(error);
  }
}

export async function deleteBlog(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      const error = new CustomError("Invalid blog id", 400);

      return next(error);
    }

    if (!isValidObjectId(request.params.blogId)) {
      const error = new CustomError("Blog not found", 404);

      return next(error);
    }

    const blog = await Blog.findById(request.params.blogId);

    if (!blog) {
      const error = new CustomError("Blog not found", 404);

      return next(error);
    }

    await Blog.findByIdAndDelete(request.params.blogId);

    response.status(204).json();
  } catch {
    const error = new CustomError("Internal server error", 500);
    next(error);
  }
}
