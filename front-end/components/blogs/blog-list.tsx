import { Blog } from "@/app/blogs/page";
import BlogListItem from "./blog-list-item";
import { ReactElement } from "react";

interface BlogListProperties {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProperties) {
  let displayBlogs: ReactElement | ReactElement[] = <p>No blogs available</p>;

  if (blogs.length > 0) {
    displayBlogs = blogs.map((blog) => (
      <BlogListItem key={blog._id} {...blog} />
    ));
  }

  return <div className="flex flex-col gap-7 items-start">{displayBlogs}</div>;
}
