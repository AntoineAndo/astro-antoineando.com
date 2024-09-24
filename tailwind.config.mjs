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
        darkDots: "radial-gradient(lightgrey 0%,transparent 5%)",
        lightDots: "radial-gradient(white 0%,transparent 5%)",
        star: "linear-gradient(90deg, #f0f0f0 0%, #f0f0f0 50%, #f0f0f0 100%)",
      },
      boxShadow: {
        eclipse: "var(--shadow)",
        lightEclipse: "0px -20px 20px 0px rgba(255, 250, 233, 0.9)",
        rocket: "0px 5px 5px 0px red",
      },
      transformOrigin: {
        star: "0px 200px",
      },
      content: {
        hi: "'Hey! What are you looking for? 👀'",
      },
      transform: {
        half: "translate(-50%, 0)",
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
            background2: "rgb(196, 204, 204)",
            accent: "rgb(58, 129, 245)",
            accent2: "rgb(238, 108, 77)",
            text: "#13151a",
          },
        },
        dark: {
          colors: {
            // background: "black",
            background: "#13151a",
            background2: "#1f2937",
            accent: "#FA1515",
            accent2: "#fff",
            // text: "rgb(226, 232, 240)",
            text: "rgba(255, 255, 255, 0.8)",
            "text-accent": "white",
          },
        },
      },
    }),
  ],
};
