"use client";

import BlogList from "@/components/blogs/blog-list";
import ResponseCard from "@/components/response-card";
import Title from "@/components/title";
import { BlogDto } from "@/util/api";
import { allBlogs } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";

export default function Home() {
  const { data, error, isLoading } = useQuery<BlogDto[], string>({
    queryKey: ["blogs"],
    queryFn: allBlogs,
  });
  return (
    <>
      <Head>Lion</Head>
      <Title title="All Blogs" />
      {isLoading && <ResponseCard loading={isLoading} />}
      {error && <ResponseCard error={error} />}

      {data && <BlogList blogs={data} />}
    </>
  );
}
