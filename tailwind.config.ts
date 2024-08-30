import type { Config } from "tailwindcss";
import { colorsDefault } from "./config/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        min0: "300px",
        min1: "400px",
        min2: "470px",
        min3: "540px",
        min4: "641px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: colorsDefault,
      boxShadow: {
        full: "0 4px 8px rgba(0, 0, 0, 0.25), 0 -4px 8px rgba(0, 0, 0, 0.2), 4px 0 8px rgba(0, 0, 0, 0.2), -4px 0 8px rgba(0, 0, 0, 0.2)",
        light:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05), 1px 0 3px rgba(0, 0, 0, 0.05), -1px 0 3px rgba(0, 0, 0, 0.05)",
      },
      margin: {
        "top-layout": "110px",
      },
      width: {
        container: "calc(100% - 200px)",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
export default config;
