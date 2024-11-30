/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        "Ry-20": "rotateY(20deg)", // Custom Y-axis rotation
        "Ry-180": "rotateY(180deg)", // Custom Y-axis rotation
      },
    },
  },
  plugins: [],
};
