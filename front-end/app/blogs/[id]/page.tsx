"use client";

import Loader from "@/components/loader";
import ResponseCard from "@/components/response-card";
import Title from "@/components/title";
import { BlogDto } from "@/util/api";
import { singleBlog, deleteBlog } from "@/util/fetcher";
import { useMutation, useQuery } from "@tanstack/react-query";
import { notFound, redirect, useParams } from "next/navigation";
import { useEffect } from "react";

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useQuery<BlogDto, string>({
    queryKey: ["blog", id],
    queryFn: () => singleBlog(id),
  });

  const {
    data: deleteBlogData,
    error: deleteBlogError,
    isPending: deleteBlogPending,
    mutate,
  } = useMutation({
    mutationFn: (id: string) => deleteBlog(id),
  });

  useEffect(() => {
    if (deleteBlogData) redirect("/blogs");
  }, [deleteBlogData]);

  if (error && error.includes("404")) return notFound();

  return (
    <>
      {isLoading && <ResponseCard loading={isLoading} />}
      {error && <ResponseCard error={error} />}

      {data && (
        <>
          <div className="flex justify-between items-start p-1">
            <Title title={data.title} />
            {deleteBlogPending ? (
              <Loader />
            ) : (
              <span
                className="rounded-full hover:shadow-md cursor-pointer"
                onClick={() => mutate(id)}
              >
                delete
              </span>
            )}
          </div>
          <div className="py-5">{data.snippet}</div>
          <div>{data.body}</div>
          {deleteBlogError && <div>{deleteBlogError.message}</div>}
        </>
      )}
    </>
  );
}
