import { BlogDto, NewBlogDto } from "./api";
import { apiUrl } from "./api-url";

export async function allBlogs() {
  const response = await fetch(`${apiUrl}/blogs`);

  if (response.status === 404) return "Url not found";

  const data = await response.json();

  if (!response.ok) {
    throw data.message;
  }

  return data;
}

export async function singleBlog(id: string) {
  const response = await fetch(`${apiUrl}/blogs/${id}`);

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 404) {
      throw "404";
    }
    throw data.message;
  }

  return data;
}

export async function createBlog(body: { [key: string]: string }) {
  const response = await fetch(`${apiUrl}/blogs`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 404) {
      throw "404";
    }
    throw data.message;
  }

  return data;
}

export async function deleteBlog(blogId: string) {
  const response = await fetch(`${apiUrl}/blogs/${blogId}`, {
    method: "DELETE",
  });

  if (response.ok) return `Blog with ID: ${blogId} is deleted`;

  const data = await response.json();

  throw data.message;
}
