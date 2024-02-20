"use client";

import Loader from "@/components/loader";
import Title from "@/components/title";
import { createBlog } from "@/util/fetcher";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function NewBlog() {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({
    title: "",
    snippet: "",
    body: "",
  });

  const [error, setError] = useState<string[]>([]);
  const {
    data: createBlogData,
    error: createBlogError,
    isPending,

    mutate,
  } = useMutation<Promise<any>, any, { [key: string]: string }>({
    mutationFn: (body: { [key: string]: string }) => createBlog(body),
  });

  useEffect(() => {
    if (createBlogError && typeof createBlogError === "object") {
      setError([]);
      for (let key in createBlogError) {
        setError((previousError) => [...previousError, createBlogError[key]]);
      }
    }

    if (createBlogData) {
      redirect("/blogs");
    }
  }, [createBlogData, createBlogError]);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { target } = event;
    setFormValues((previousFormValues) => ({
      ...previousFormValues,
      [target.name]: target.value,
    }));
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    setError([]);
    let errorOccured = false;

    for (let key in formValues) {
      if (!formValues[key]) {
        errorOccured = true;
        setError((previousError) => [
          ...previousError,
          `${key[0].toUpperCase() + key.slice(1)} must not be empty.`,
        ]);
      }
    }

    if (!errorOccured) mutate(formValues);
  }

  return (
    <>
      <title>Create new blog</title>
      <Title title="Add Blog" />
      {error.length > 0
        ? error.map((errorValue, index) => (
            <div
              key={index}
              className="mx-auto max-w-xl w-full md:w-1/2 flex flex-col text-sm gap-5 bg-red-800/20 p-3 rounded-md mb-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-0.5 bg-red-400"></span>
                <span>{errorValue}</span>
              </div>
            </div>
          ))
        : ""}
      <form
        className="mx-auto max-w-xl md:w-1/2 w-full flex flex-col gap-5 *:flex *:flex-col"
        onSubmit={handleFormSubmit}
      >
        <label>
          <p>Blog title:</p>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={formValues.title}
            className="border border-neutral-800 rounded-sm focus:outline-none p-1"
          />
        </label>
        <label>
          <p>Blog snippet:</p>
          <input
            type="text"
            name="snippet"
            onChange={handleInputChange}
            value={formValues.snippet}
            className="border border-neutral-800 rounded-sm focus:outline-none p-1"
          />
        </label>
        <label>
          <p>Blog body:</p>
          <textarea
            name="body"
            onChange={handleInputChange}
            value={formValues.body}
            className="border border-neutral-800 rounded-sm focus:outline-none p-1"
          ></textarea>
        </label>
        <label>
          {isPending ? (
            <Loader />
          ) : (
            <button className="bg-red-800 py-2 text-white sm:self-start px-10 rounded-sm">
              Submit
            </button>
          )}
        </label>
      </form>
    </>
  );
}
