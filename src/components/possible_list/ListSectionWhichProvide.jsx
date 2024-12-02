import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { NavLink } from "react-router-dom";

const ListSectionWhichProvide = () => {
  return (
    <div>
      <div className="flex flex-grow-1 flex-wrap gap-8 mt-[120px]">
        <NavLink
          to="/jpg_to_text"
          className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative"
        >
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              JPG to Text
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Converting JPG to text allows you to extract editable content from
              image files, enabling efficient data processing and analysis.
            </p>
          </div>
        </NavLink>

        <div className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative">
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink1"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              JPG to Text
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Converting JPG to text allows you to extract editable content from
              image files, enabling efficient data processing and analysis.
            </p>
          </div>
        </div>
        <div className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out relative">
          {/* Top-left Label */}
          <div className="absolute top-0 left-0 p-2 text-sm bg-teal-500 rounded-br-lg font-semibold text-gray-50">
            Latest
          </div>

          {/* Top-right Blinking Element */}
          <div className="absolute top-0 right-0 p-2 m-1 rounded-full  bg-yellow-400 text-white rounded-bl-lg animate-blink"></div>

          {/* Card Content: SVG Icon and Text */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* SVG Icon */}
            <svg
              className="w-15 h-15 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            {/* Title Text */}
            <span className="text-2xl font-semibold text-gray-800">
              JPG to Text
            </span>

            {/* Description Text */}
            <p className="text-sm text-gray-500">
              Converting JPG to text allows you to extract editable content from
              image files, enabling efficient data processing and analysis.
            </p>
          </div>
        </div>
      </div>
      {/* https://lottie.host/embed/efe00406-7e21-4f1d-8281-8f391f051dd8/CZlzo90eYv.lottie */}
    </div>
  );
};

export default ListSectionWhichProvide;
