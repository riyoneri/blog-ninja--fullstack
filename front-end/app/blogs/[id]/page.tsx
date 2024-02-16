"use client";

import { notFound, useParams } from "next/navigation";

import { Blog } from "../page";
import Title from "@/components/title";

const Blogs: Blog[] = [
  {
    _id: "1",
    title: "Blog 1",
    snippet: "Blog 1 snippet",
    body: "Blog 1 body",
  },
  {
    _id: "2",
    title: "Blog 2",
    snippet: "Blog 2 snippet",
    body: "Blog 2 body",
  },
];

export default function BlogDetails() {
  const parameters = useParams();

  const blog = Blogs.find((blog) => blog._id === parameters.id);

  if (!blog) return notFound();

  return (
    <>
      <div className="flex justify-between items-start cursor-pointer p-1">
        <Title title={blog.title} />
        <span className="rounded-full hover:shadow-md">delete</span>
      </div>
      <div className="py-5">{blog.snippet}</div>
      <div>{blog.body}</div>
    </>
  );
}
