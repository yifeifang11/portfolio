import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  images: StaticImageData[];
  texts: string[];
  setOverlayVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setOverlayImage: React.Dispatch<React.SetStateAction<StaticImageData | null>>;
  setOverlayText: React.Dispatch<React.SetStateAction<string>>;
}

interface ImageWithText {
  image: StaticImageData;
  text: string;
}

export default function Gallery({
  images,
  texts,
  setOverlayImage,
  setOverlayText,
  setOverlayVisible,
}: Props) {
  const imageTextPairs: ImageWithText[] = images.map((image, index) => ({
    image,
    text: texts[index],
  }));

  const columns: ImageWithText[][] = [[], [], []];
  imageTextPairs.forEach((pair, index) => {
    columns[index % 3].push(pair);
  });

  return (
    <div className="mt-10 px-6 mb-10">
      {/* Use responsive classes to change layout on smaller screens */}
      <div className="flex flex-col md:flex-row gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {column.map((pair, index) => (
              <div key={index} className="overflow-hidden">
                <Image
                  src={pair.image}
                  alt=""
                  className="hover:scale-[1.01] duration-300 transition w-full cursor-pointer"
                  onClick={() => {
                    setOverlayVisible(true);
                    setOverlayImage(pair.image);
                    setOverlayText(pair.text);
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
