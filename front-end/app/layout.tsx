import NavBar from "@/components/nav-bar";
import classNames from "classnames";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Blog Ninja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          questrial.className,
          "max-w-screen-2xl min-h-screen px-10 mx-auto flex flex-col py-3",
        )}
      >
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
