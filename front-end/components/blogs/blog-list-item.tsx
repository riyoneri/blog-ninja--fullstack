import classNames from "classnames";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

interface BlogListItemProperties {
  _id: string;
  title: string;
  description: string;
}

export default function BlogListItem({
  _id,
  title,
  description,
}: BlogListItemProperties) {
  return (
    <Link href={`/blogs/${_id}`}>
      <h3 className={classNames(inter.className, "font-semibold")}>{title}</h3>
      <p className="text-sm">{description}</p>
    </Link>
  );
}
