import React from "react";
import Image from "next/image";
import Temp from "@/public/temp.png";

export default function Intro() {
  return (
    <div className="grid grid-cols-3 mt-28 gap-6 px-6" id="about">
      <div className="col-span-2 ml-24 flex flex-col gap-4">
        <p className="font-poppins uppercase text-6xl font-medium">
          An Introduction
        </p>
        <p className="font-redhat text-xl font-light">
          I’m currently a student at Vanderbilt University majoring in Computer
          Science + Economics and minoring in Engineering Management. My
          previous experience in software engineering has led me to the world of
          user experience and product design, where I have becoming increasingly
          motivated to solve problems by designing practical and human-centered
          solutions. I enjoy the challenge of understanding users and helping
          them improve their lives with intentional design and problem-solving.
        </p>
        <p className="font-redhat text-xl font-light">
          In my free time, I enjoy playing table tennis, going to concerts, and
          eating tasty food.
        </p>
      </div>
      <div className="relative">
        <Image src={Temp} alt="" className="absolute top-[-60%]" />
      </div>
    </div>
  );
}
