import Title from "@/components/title";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog ninja | Home",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog ninja</title>
      </Head>
      <Title title="Welcome" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        beatae ab, consequatur id tempore nemo corrupti ullam sapiente provident
        maxime maiores esse obcaecati consequuntur velit quidem vel dolorum
        totam magnam. Nesciunt quasi nobis dolorum doloremque totam culpa
      </div>
    </>
  );
}
