import React, { useState } from "react";
import CardComponent from "./CArd";
import { Button } from "antd";

const HeroSection = () => {
  const [position, setPosition] = useState({ x: 49, y: 49 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div>
      <div className="h-screen w-full bg-gray-50 relative">
        <div className="pt-[200px] text-center">
          <div className="flex justify-center">
            <CardComponent />
          </div>
          <div className=" font-thin text-xl  text-teal-800 ">
            'Upload images or PDFs and let Textura extract all the text you
            need. Easy, fast, and accurate!'
          </div>
          <div className="mt-10">
            <Button
              type="dashed"
              className="hover:text-teal-600 text-teal-500 bg-teal-50"
            >
              <svg
                className="w-6 h-6 text-teal-500 dark:teal-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                  clip-rule="evenodd"
                />
              </svg>
              Start Extracting
            </Button>
          </div>
        </div>
        {/* <div className="flex justify-center items-center min-h-screen bg-gray-200">
          <div
            className="w-48 h-48 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg skew-x--12 skew-y-6 "
            onMouseMove={handleMouseMove}
            style={{
              transform: `perspective(1000px) rotateX(${
                (position.y - 50) / 2
              }deg) rotateY(${(position.x - 50) / 2}deg)  `,
            }}
          >
            Skewed Div
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
