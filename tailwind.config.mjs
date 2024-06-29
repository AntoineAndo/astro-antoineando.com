/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      space: ["Space", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        bg: 'url("/images/1683086631.jpg")',
      },
      boxShadow: {
        eclipse: "0px -20px 20px 0px rgba(255, 250, 233, 0.9)",
      },
    },
  },
  darkMode: "selector",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#eee",
            background2: "#ccc",
            accent: "rgb(58, 129, 245)",
            text: "#13151a",
          },
        },
        dark: {
          colors: {
            // background: "black",
            background: "#13151a",
            background2: "#1f2937",
            accent: "#FA1515",
            // text: "rgb(226, 232, 240)",
            text: "rgba(255, 255, 255, 0.8)",
            "text-accent": "white",
          },
        },
      },
    }),
  ],
};
