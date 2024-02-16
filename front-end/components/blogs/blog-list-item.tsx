import classNames from "classnames";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

interface BlogListItemProperties {
  _id: string;
  title: string;
  snippet: string;
  body: string;
}

export default function BlogListItem({
  _id,
  title,
  snippet,
}: BlogListItemProperties) {
  return (
    <Link
      href={`/blogs/${_id}`}
      className="border-l-4 pl-5 border-l-red-700 group space-y-2"
    >
      <h3
        className={classNames(
          inter.className,
          "font-semibold group-hover:text-red-700",
        )}
      >
        {title}
      </h3>
      <p className="text-sm">{snippet}</p>
    </Link>
  );
}
