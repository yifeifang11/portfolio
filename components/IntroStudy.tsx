import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  tagColor: string;
}

export default function IntroStudy({
  image1,
  image2,
  image3,
  title,
  description,
  tags,
  tagColor,
}: Props) {
  return (
    <div>
      <div className="p-6">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <p className="font-poppins uppercase text-6xl font-medium">
              {title}
            </p>
            <p className="font-redhat text-xl font-light mt-4">{description}</p>
            <div className="flex gap-2 mt-4">
              {tags.map((tag, index) => {
                return (
                  <p
                    key={index}
                    className={`text-amber-500 uppercase font-poppins font-light border border-amber-500 rounded-full px-2 py-1 ${
                      tagColor === "amber"
                        ? "border-amber-500 text-amber-500"
                        : ""
                    } `}
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 px-6 gap-6">
        <div className="relative">
          <div className="absolute top-8 overflow-hidden">
            <Image
              src={image1}
              alt=""
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <Image
            src={image2}
            alt=""
            className="hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="relative">
          <div className="absolute top-[-5rem] overflow-hidden">
            <Image
              src={image3}
              alt=""
              className="hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
