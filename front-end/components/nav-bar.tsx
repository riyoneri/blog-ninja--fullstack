import Link from "next/link";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const interTight = Inter({ subsets: ["latin"], weight: ["700"] });

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between border-b border-b-neutral-900/10 py-2 mb-2">
      <Link href="/" className={classNames(interTight.className, "text-2xl")}>
        Blog Ninja
      </Link>
      <div>
        <nav className="flex gap-5">
          <Link
            href="/"
            className={classNames({
              "text-red-800 underline underline-offset-4": pathname === "/",
            })}
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className={classNames({
              "text-red-800 underline underline-offset-4":
                pathname === "/blogs",
            })}
          >
            Blogs
          </Link>
          <Link
            href="/new-blog"
            className={classNames({
              "text-red-800 underline underline-offset-4":
                pathname === "/new-blog",
            })}
          >
            New Blog
          </Link>
          <Link
            href="/about"
            className={classNames({
              "text-red-800 underline underline-offset-4":
                pathname === "/about",
            })}
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}
