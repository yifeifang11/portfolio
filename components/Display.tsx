import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  thumbnail: StaticImageData;
  backgroundColor: string;
  name: string;
  tags: string[];
  link: string;
}

export default function Display({
  thumbnail,
  backgroundColor,
  name,
  tags,
  link,
}: Props) {
  return (
    <Link href={link ? link : ""}>
      <div
        className={`bg-[#F3F4F6DC] grayscale hover:grayscale-0 ${
          backgroundColor === "yellow" ? "hover:bg-yellow-500" : ""
        } ${backgroundColor === "amber" ? "hover:bg-amber-500" : ""} ${
          backgroundColor === "green" ? "hover:bg-lime-500" : ""
        } transition-all duration-300 cursor-pointer overflow-hidden relative group`}
      >
        <Image
          src={thumbnail}
          alt=""
          className="group-hover:scale-105 transition-all duration-300"
        />
        <p className="absolute bottom-2 right-2 text-white uppercase font-poppins text-4xl font-semibold text-right group-hover:opacity-100 opacity-0 transition-all duration-300 z-10">
          {name}
        </p>
        <div className="absolute top-2 left-2 flex gap-2 group-hover:opacity-100 opacity-0 transition-all duration-300 z-10">
          {tags.map((tag, index) => {
            return (
              <p
                className="text-white uppercase font-poppins font-light border border-white rounded-full px-2 py-1"
                key={index}
              >
                {tag}
              </p>
            );
          })}
        </div>
        <div className="bg-gradient-to-t from-black to-transparent h-32 absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="bg-gradient-to-b from-black to-transparent h-32 absolute top-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
    </Link>
  );
}
