import React from "react";
import Image from "next/image";
import Headshot from "@/public/IMG_5400.jpeg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-4 items-center">
        <div
          className="overflow-hidden relative"
          style={{ width: "150px", height: "150px" }}
        >
          <Image
            src={Headshot}
            alt="Headshot"
            objectFit="cover"
            className="rounded-full aspect-square "
            layout="fill"
          />
        </div>
        <p className="font-dmsans text-4xl font-bold">Yifei Fang</p>
        <div className="text-xl flex gap-4">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
        <p className="font-redhat">
          Hi! I am currently a student at Vanderbilt University majoring
          Computer Science + Economics and minoring in Engineering Management.
          My previous experience in software engineering has led me to the world
          of user experience and product design, where I have becoming
          increasingly motivated to solve problems by designing practical and
          human-centered solutions. I enjoy the challenge of understanding users
          and helping them improve their lives with intentional design and
          problem-solving.
        </p>
        <p className="font-redhat">
          In my free time, I enjoy playing table tennis, writing prose, and
          eating a lot of food.
        </p>
      </div>
      <div className="font-dmsans text-xl flex gap-8 mt-24 justify-center">
        <p>Home</p>
        <p>Resume</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
