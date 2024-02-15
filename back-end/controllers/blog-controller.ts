import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { CustomError, serializeValidation } from "../util";
import Blog from "../models/blog-model";

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

    response.status(200).json(blog);
  } catch {
    const error = new CustomError("Internal server error", 500);
    next(error);
  }
}
