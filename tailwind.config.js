const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    mode: "all",
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: "media",
  future: "all",
  theme: {
    colors: {
      ...colors,
      white: "white",
      black: "black",
      transparent: "transparent",
    },
    extend: {
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
      screens: { print: { raw: "print" } }, // use utilities like print:text-black
      container: { center: true },
    },
  },
  variants: { extend: {} },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
