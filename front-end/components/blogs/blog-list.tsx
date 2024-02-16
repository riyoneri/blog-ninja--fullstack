import { BlogDto } from "@/util/api";
import { ReactElement } from "react";
import BlogListItem from "./blog-list-item";

interface BlogListProperties {
  blogs: BlogDto[];
}

export default function BlogList({ blogs }: BlogListProperties) {
  let displayBlogs: ReactElement | ReactElement[] = <p>No blogs available</p>;

  if (blogs.length > 0) {
    displayBlogs = blogs.map((blog) => (
      <BlogListItem key={blog._id} {...blog} />
    ));
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {displayBlogs}
    </div>
  );
}
