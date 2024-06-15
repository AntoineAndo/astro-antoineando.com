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
    extend: {},
  },
  darkMode: "selector",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "white",
            accent: "blue",
          },
        },
        dark: {
          colors: {
            background: "#13151a",
            accent: "#FA1515",
          },
        },
      },
    }),
  ],
};
