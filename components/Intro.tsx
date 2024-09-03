"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Pfp from "@/public/pfp.png";
import TT1 from "@/public/tt1.png";
import TT2 from "@/public/tt2.png";
import TT3 from "@/public/tt3.png";
import Food from "@/public/food.png";
import Concert from "@/public/concert.png";

const ttImages: StaticImageData[] = [TT1, TT2, TT3];

const getRandomImage = (exclude: StaticImageData | null): StaticImageData => {
  const filteredImages = ttImages.filter((image) => image !== exclude);
  const randomIndex = Math.floor(Math.random() * filteredImages.length);
  return filteredImages[randomIndex];
};

export default function Intro() {
  const [hoveredImage, setHoveredImage] = useState<StaticImageData | null>(
    null
  );
  const [previousImage, setPreviousImage] = useState<StaticImageData | null>(
    null
  );

  const handleMouseEnterTT = () => {
    const newImage = getRandomImage(previousImage);
    setPreviousImage(newImage);
    setHoveredImage(newImage);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div
      className="md:grid md:grid-cols-3 md:mt-28 mt-16 gap-6 px-6"
      id="about"
    >
      <div className="col-span-2 md:ml-24 flex flex-col gap-4">
        <p className="font-poppins uppercase md:text-6xl text-3xl font-medium">
          An Introduction
        </p>
        <p className="font-redhat md:text-xl text-lg font-light">
          I’m currently a student at Vanderbilt University majoring in Computer
          Science + Economics and minoring in Engineering Management. My
          previous experience in software engineering has led me to the world of
          user experience and product design, where I have becoming increasingly
          motivated to solve problems by designing practical and human-centered
          solutions. I enjoy the challenge of understanding users and helping
          them improve their lives with intentional design and problem-solving.
        </p>
        <p className="font-redhat md:text-xl text-lg font-light">
          In my free time, I enjoy playing{" "}
          <span
            onMouseEnter={handleMouseEnterTT}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer underline"
          >
            table tennis
          </span>
          ,{" "}
          <span
            onMouseEnter={() => setHoveredImage(Concert)}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer underline"
          >
            going to concerts
          </span>
          , and{" "}
          <span
            onMouseEnter={() => setHoveredImage(Food)}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer underline"
          >
            eating tasty food
          </span>
          .
        </p>
      </div>
      <div className="md:relative md:mt-0 mt-8">
        <Image
          src={hoveredImage || Pfp}
          alt=""
          className="md:absolute md:top-[-60%]"
        />
      </div>
    </div>
  );
}
