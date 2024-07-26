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
    <div className="grid grid-cols-3 mx-6 gap-6 mt-52" id="resume">
      <div className="relative">
        <div className="sticky top-20">
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
          />
          <p className="px-4 py-3 uppercase text-white bg-black text-center font-poppins font-light text-2xl mt-4 hover:bg-gray-700 transition duration-300 cursor-pointer">
            <a href="/Resume.pdf" download={true}>
              Download My Resume
            </a>
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <p className="font-poppins uppercase text-6xl font-medium text-right mt-2 mb-4">
          My Experience
        </p>
        <div className="mr-20 pb-40 flex flex-col">
          {resumeSections.map((section, index) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredSection(index)}
                className={`duration-300 ${
                  hoveredSection === index ? "opacity-100" : "opacity-50"
                }`}
              >
                <p className="font-poppins uppercase text-3xl font-light mb-4 mt-6">
                  {section.title} - {section.company}
                </p>
                <ul className="font-redhat font-light list-disc text-xl">
                  {section.bullets.map((bullet, index) => {
                    return (
                      <li key={index} className="ml-6">
                        {bullet}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
