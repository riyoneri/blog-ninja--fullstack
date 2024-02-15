import BlogList from "@/components/blogs/blog-list";
import Title from "@/components/title";

export interface Blog {
  _id: string;
  title: string;
  description: string;
}

const Blogs: Blog[] = [
  {
    _id: "1",
    title: "Blog 1",
    description: "Blog 1 description",
  },
  {
    _id: "2",
    title: "Blog 2",
    description: "Blog 2 description",
  },
];

export default function Home() {
  return (
    <>
      <Title title="All Blogs" />
      <BlogList blogs={Blogs} />
    </>
  );
}
