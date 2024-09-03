import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  texts: string[];
  image: StaticImageData;
  id: string;
}

export default function SectionStudy2({ title, texts, image, id }: Props) {
  return (
    <div className="px-6 md:mt-60 mt-16 md:grid grid-cols-3 gap-6" id={id}>
      <div className="col-span-2 md:ml-20">
        <p className="font-poppins uppercase md:text-5xl text-3xl font-medium">
          {title}
        </p>
        {texts.map((text, index) => {
          return (
            <p
              key={index}
              className="md:text-xl text-lg font-light mt-4 font-redhat"
            >
              {text}
            </p>
          );
        })}
      </div>
      <div className="md:mt-0 mt-8 md:relative">
        <div className="md:absolute top-[-5rem] overflow-hidden">
          <Image src={image} alt="" className="transition-all duration-300 " />
        </div>
      </div>
    </div>
  );
}
