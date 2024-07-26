import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  texts: string[];
  image: StaticImageData;
}

export default function SectionStudy2({ title, texts, image }: Props) {
  return (
    <div className="px-6 mt-60 grid grid-cols-3 gap-6">
      <div className="col-span-2 ml-20">
        <p className="font-poppins uppercase text-4xl font-medium">{title}</p>
        {texts.map((text, index) => {
          return (
            <p key={index} className="text-xl font-light mt-4 font-redhat">
              {text}
            </p>
          );
        })}
      </div>
      <div className="relative">
        <div className="absolute top-[-5rem] overflow-hidden">
          <Image src={image} alt="" className="transition-all duration-300 " />
        </div>
      </div>
    </div>
  );
}
