"use client";

import Title from "@/components/title";
import { FormEvent } from "react";

export default function NewBlog() {
  return (
    <>
      <Title title="Add Blog" />
      <form
        className="mx-auto max-w-xl md:w-1/2 flex flex-col gap-5 *:flex *:flex-col"
        onSubmit={(event: FormEvent) => event.preventDefault()}
      >
        <label>
          <p>Blog title:</p>
          <input
            type="text"
            name="title"
            className="border border-neutral-800 rounded-sm focus:outline-none p-1"
          />
        </label>
        <label>
          <p>Blog snippet:</p>
          <input
            type="text"
            name="snippet"
            className="border border-neutral-800 rounded-sm focus:outline-none p-1"
          />
        </label>
        <label>
          <p>Blog body:</p>
          <textarea
            name=""
            className="border border-neutral-800 rounded-sm focus:outline-none p-1"
          ></textarea>
        </label>
        <label>
          <button className="bg-red-800 py-2 text-white sm:self-start px-10 rounded-sm">
            Submit
          </button>
        </label>
      </form>
    </>
  );
}
