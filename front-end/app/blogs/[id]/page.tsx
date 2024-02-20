"use client";

import Loader from "@/components/loader";
import ResponseCard from "@/components/response-card";
import Title from "@/components/title";
import { BlogDto } from "@/util/api";
import { singleBlog, deleteBlog } from "@/util/fetcher";
import { useMutation, useQuery } from "@tanstack/react-query";
import { notFound, redirect, useParams } from "next/navigation";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa6";

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
      <title>{data?.title + " Details"}</title>
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
                className="rounded-full cursor-pointer"
                onClick={() => mutate(id)}
              >
                <FaTrash className="hover:shadow-md size-4 hover:text-red-600 transition" />
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
