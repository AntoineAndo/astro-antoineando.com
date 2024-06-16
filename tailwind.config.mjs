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
            text: "white",
          },
        },
      },
    }),
  ],
};
