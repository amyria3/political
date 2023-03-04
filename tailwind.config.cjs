/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: "rgba(250, 250, 250, 1)",
        card: "rgba(255, 255, 255, 1)",
      },
      interactive: {
        default: "rgba(0, 85, 212, 0.5)",
        hover: "rgba(0, 85, 212, 1)",
      },
      line: "rgba(37, 37, 37, 0.5)",
      typo: {
        DEFAULT: "rgba(37, 37, 37, 1)",
      },
    },
    fontFamily: {
      DEFAULT: ["Inter"],
      serif: ["Italiana"],
    },
    dropShadow: {
      default: "2px 2px 0px #0055D5",
    },
  },
};

//TO-DO:
//// own padding-options - spacing?
//ISSUES:
////fonts don't work
