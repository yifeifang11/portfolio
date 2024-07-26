import Link from "next/link";
import React from "react";

interface Props {
  navs: string[];
  navLinks: string[];
}

export default function NavbarStudy({ navs, navLinks }: Props) {
  return (
    <div className="flex justify-between p-6 sticky top-0 z-10 bg-white">
      <Link
        href="/"
        className="font-light uppercase text-lg hover:text-gray-500 transition duration-300"
      >
        Back to Home
      </Link>
      <div className="flex gap-4">
        {navs.map((nav, index) => {
          return (
            <p
              key={index}
              className="font-light uppercase text-lg hover:text-gray-500 transition duration-300"
            >
              <a href={navLinks[index]}>{nav}</a>
            </p>
          );
        })}
      </div>
    </div>
  );
}
