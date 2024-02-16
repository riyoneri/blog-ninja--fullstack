"use client";

import Title from "@/components/title";
import { ChangeEvent, FormEvent, useState } from "react";

export default function NewBlog() {
  const [formValues, setFormValues] = useState({
    title: "",
    snippet: "",
    body: "",
  });

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

    console.log(formValues);
  }

  return (
    <>
      <Title title="Add Blog" />
      <div className="mx-auto max-w-xl w-full md:w-1/2 flex flex-col text-sm gap-5 bg-red-800/20 p-3 rounded-md mb-10">
        <div className="flex items-center gap-3">
          <span className="w-3 h-0.5 bg-red-400"></span>
          <span>This is validation error</span>
        </div>
      </div>
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
          <button className="bg-red-800 py-2 text-white sm:self-start px-10 rounded-sm">
            Submit
          </button>
        </label>
      </form>
    </>
  );
}
