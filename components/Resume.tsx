"use client";

import Image from "next/image";
import React, { useState } from "react";
import Temp from "@/public/temp.png";
import { resumeSections } from "@/utils/resume";
import UrbanGateImage from "@/public/urbangate.png";
import RubinovImage from "@/public/rubinov.png";
import WondryImage from "@/public/wondry.png";
import FriendsImage from "@/public/friendslife.png";

export default function Resume() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(0);
  return (
    <div
      className="md:grid md:grid-cols-3 flex flex-col-reverse mx-6 md:gap-6 md:mt-52 mt-16"
      id="resume"
    >
      <div className="relative">
        <div className="sticky md:top-20">
          <Image
            src={
              hoveredSection === 0
                ? UrbanGateImage
                : hoveredSection === 1
                ? RubinovImage
                : hoveredSection === 2
                ? WondryImage
                : hoveredSection === 3
                ? FriendsImage
                : Temp
            }
            alt=""
            className="md:block hidden"
          />
          <p className="px-4 py-3 uppercase text-white bg-black text-center font-poppins font-light text-2xl md:mt-4 hover:bg-gray-700 transition duration-300 cursor-pointer">
            <a href="/Resume.pdf" download={true}>
              Download My Resume
            </a>
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <p className="font-poppins uppercase md:text-6xl font-medium md:text-right text-4xl mt-2 mb-4">
          My Experience
        </p>
        <div className="md:mr-20 md:pb-40 flex flex-col">
          {resumeSections.map((section, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredSection(index)}
                className={`duration-300 md:${
                  hoveredSection === index ? "opacity-100" : "opacity-50"
                }`}
              >
                <p className="font-poppins uppercase md:text-3xl text-xl font-light mb-2 md:mt-6">
                  {section.title} - {section.company}
                </p>
                <p className="font-redhat font-light md:text-xl md:pb-0 pb-6">
                  {section.bullets}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
