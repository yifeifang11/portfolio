"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Image1 from "@/public/friends-attendance-gray.png";

interface Props {
  title: string;
  text1: string;
  bulletIntro: string;
  bullets: string[];
  text2: string;
  images: StaticImageData[];
}

export default function SectionStudy1({
  title,
  text1,
  bulletIntro,
  bullets,
  text2,
  images,
}: Props) {
  const [hoveredSection, setHoveredSection] = useState<number>(0);
  return (
    <div>
      <div className="mt-60 px-6 grid grid-cols-3 gap-6">
        <div className="overflow-hidden mt-6">
          <Image
            src={images[hoveredSection]}
            alt=""
            className="hover:scale-105 transition-all duration-300"
          />
        </div>
        <div className="col-span-2 mr-20">
          <p className="font-poppins uppercase text-4xl font-medium text-right">
            {title}
          </p>
          <div className="font-redhat text-xl font-light flex flex-col gap-4 mt-4">
            <p>{text1}</p>
            <p>{bulletIntro}</p>
            <ul className="list-disc ml-6">
              {bullets.map((bullet, index) => {
                return (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredSection(index)}
                    className={`duration-300 ${
                      hoveredSection === index ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {bullet}
                  </li>
                );
              })}
            </ul>
            <p>
              The app was built with React Native and a javascript backend with
              Node.js. It is compatible on both iOS and Android.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
