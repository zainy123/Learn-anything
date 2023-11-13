import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "295px",
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#7dd3fc",
        secondary: "#34d399",
        accent: "#0284c7",
        neutral: "#111827",
        "base-100": "#111827",
        info: "#fbbf24",
        success: "#059669",
        warning: "#164e63",
        error: "#b91c1c",
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
  },
  plugins: [daisyui],
};
