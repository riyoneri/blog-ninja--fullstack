import { apiUrl } from "./api-url";

export async function allBlogs() {
  try {
    const response = await fetch(`${apiUrl}/blogs`);

    if (response.status === 404) return "Url not found";

    const data = await response.json();

    if (!response.ok) {
      throw data.message;
    }

    return data;
  } catch (error) {
    throw error;
  }
}
