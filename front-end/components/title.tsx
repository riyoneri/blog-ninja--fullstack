import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

export default function Title({ title }: { title: string }) {
  return (
    <h2 className={classNames("text-xl mb-10", inter.className)}>{title}</h2>
  );
}
