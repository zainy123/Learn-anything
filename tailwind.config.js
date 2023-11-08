/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      navyblue: "#164863",
      lightskin: "#DDF2FD",
      white: "#ffffff",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      sourcecode: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [],
};
