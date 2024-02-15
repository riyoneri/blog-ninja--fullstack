import Link from "next/link";
import { Inter } from "next/font/google";
import classNames from "classnames";

const interTight = Inter({ subsets: ["latin"], weight: ["700"] });

export default function NavBar() {
  return (
    <div className="flex items-center justify-between border-b border-b-neutral-900/10 py-2 mb-2">
      <Link href="/" className={classNames(interTight.className, "text-2xl")}>
        Blog Ninja
      </Link>
      <div>
        <nav className="flex gap-5">
          <Link href="/">Blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/new-blog">New Blog</Link>
        </nav>
      </div>
    </div>
  );
}
