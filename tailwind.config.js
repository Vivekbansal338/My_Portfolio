const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-light": "#ffffff",
        "foreground-light": "#11181c",
        "background-dark": "#000000",
        "foreground-dark": "#ecedee",
        text1: "#61dafb",
        text2: "#9353d3",
        text3: "#f5a524",
        text4: "#ff0000",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
