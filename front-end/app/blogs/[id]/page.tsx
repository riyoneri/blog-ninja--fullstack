"use client";

import ResponseCard from "@/components/response-card";
import Title from "@/components/title";
import { BlogDto } from "@/util/api";
import { singleBlog } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useQuery<BlogDto, string>({
    queryKey: ["blog", id],
    queryFn: () => singleBlog(id),
  });

  if (error && error.includes("404")) return notFound();

  return (
    <>
      {isLoading && <ResponseCard loading={isLoading} />}
      {error && <ResponseCard error={error} />}

      {data && (
        <>
          <div className="flex justify-between items-start cursor-pointer p-1">
            <Title title={data.title} />
            <span className="rounded-full hover:shadow-md">delete</span>
          </div>
          <div className="py-5">{data.snippet}</div>
          <div>{data.body}</div>
        </>
      )}
    </>
  );
}
