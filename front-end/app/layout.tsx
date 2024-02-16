"use client";

import NavBar from "@/components/nav-bar";
import classNames from "classnames";
import { useState } from "react";
import { Questrial } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import Footer from "@/components/footer";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body
          className={classNames(
            questrial.className,
            "max-w-screen-2xl min-h-screen px-5 sm:px-10 mx-auto flex flex-col py-3",
          )}
        >
          <NavBar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </body>
      </QueryClientProvider>
    </html>
  );
}
