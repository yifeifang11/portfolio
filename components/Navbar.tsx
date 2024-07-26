import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="font-poppins flex items-center p-6 sticky top-0 z-10 bg-white">
      <div className="flex gap-2 text-lg">
        <a
          className="hover:text-gray-500 transition duration-300"
          href="https://linkedin.com/in/yifeifang11"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:text-gray-500 transition duration-300"
          href="https://github.com/yifeifang11"
        >
          <FaGithub />
        </a>
        <a
          className="hover:text-gray-500 transition duration-300"
          href="https://instagram.com/yifeifang/"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <p className="font-semibold text-5xl uppercase hover:text-gray-600 transition duration-300">
          Yifei Fang
        </p>
      </div>
      <div className="flex gap-4 ml-auto font-light uppercase text-lg">
        <p className="hover:text-gray-500 transition duration-300">
          <a href="#about">About</a>
        </p>
        <p className="hover:text-gray-500 transition duration-300">
          <a href="#resume">Resume</a>
        </p>
        <p className="hover:text-gray-500 transition duration-300">
          <a href="#contact">Contact</a>
        </p>
      </div>
    </div>
  );
}
