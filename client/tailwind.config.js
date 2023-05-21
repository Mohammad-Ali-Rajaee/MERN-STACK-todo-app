/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 10px 2px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: "rgb(47,73,166)",
        secondary: "#D9D8D8",
        grayInput: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
