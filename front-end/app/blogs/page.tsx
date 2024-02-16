import BlogList from "@/components/blogs/blog-list";
import Title from "@/components/title";

export interface Blog {
  _id: string;
  title: string;
  snippet: string;
  body: string;
}

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

export default function Home() {
  return (
    <>
      <Title title="All Blogs" />
      <BlogList blogs={Blogs} />
    </>
  );
}
