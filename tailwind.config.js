/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 2s steps(30, end), blink .75s step-end infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        typing: { "0%": { width: "0" }, "100%": { width: "100%" } },
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "#00796b" },
          "100%": { borderColor: "transparent" },
        },
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
      },
    },
  },
  plugins: [],
});
