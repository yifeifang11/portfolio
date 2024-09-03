import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  images: StaticImageData[];
}

export default function SectionResults({ images }: Props) {
  const columns: StaticImageData[][] = [[], [], []];
  images.forEach((image, index) => {
    columns[index % 3].push(image);
  });

  return (
    <div className="md:mt-60 mt-16 px-6 mb-20" id="results">
      <p className="font-poppins uppercase md:text-6xl text-3xl font-medium text-center mb-6">
        Results
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {column.map((image, index) => (
              <div key={index} className="overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  className="hover:scale-105 duration-300 transition w-full"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="font-light uppercase text-2xl text-center mt-8 hover:text-gray-500 transition duration-300">
        <a href="#intro">Back to Top</a>
      </p>
    </div>
  );
}
