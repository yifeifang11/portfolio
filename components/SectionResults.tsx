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
    <div className="mt-60 px-6 mb-20">
      <p className="font-poppins uppercase text-5xl font-medium text-center mb-6">
        Results
      </p>
      <div className="flex gap-6">
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
    </div>
  );
}
