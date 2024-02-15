import Title from "@/components/title";
import classNames from "classnames";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

export default function About() {
  return (
    <>
      <Title title="About Us" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        beatae ab, consequatur id tempore nemo corrupti ullam sapiente provident
        maxime maiores esse obcaecati consequuntur velit quidem vel dolorum
        totam magnam. Nesciunt quasi nobis dolorum doloremque totam culpa
        architecto ipsa corrupti nostrum veniam eius accusantium veritatis
        tempora reprehenderit molestias aut, ducimus quibusdam excepturi
        consectetur sequi necessitatibus, earum mollitia! Dolore, nemo totam.
        Praesentium eligendi consequuntur, at molestias eaque ut magni possimus,
        obcaecati quia modi deserunt, consectetur soluta doloremque nihil
        ducimus sequi ipsa impedit dolores. Eveniet ab a molestiae minima
        debitis odit velit.
      </div>
    </>
  );
}
