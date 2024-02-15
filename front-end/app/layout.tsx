import classNames from "classnames";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";

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
      <body className={classNames(questrial.className)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
