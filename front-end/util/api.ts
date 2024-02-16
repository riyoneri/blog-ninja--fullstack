interface BlogDto {
  _id: string;
  title: string;
  snippet: string;
  body: string;
}

interface NewBlogDto {
  title: string;
  snippet: string;
  body: string;
}

export type { BlogDto, NewBlogDto };
