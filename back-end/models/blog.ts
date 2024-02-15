import { Document, Schema, model } from "mongoose";

export interface IBlogModel extends Document {
  title: string;
  snippet: string;
  body: string;
  createdAt?: Date;
  updateAt?: Date;
}

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export default model<IBlogModel>("Blog", blogSchema);
