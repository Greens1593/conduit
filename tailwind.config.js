/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["Titillium Web", "sans-serif"],
      },
      colors: {
        conduit: {
          green: "#5CB85C",
          darkGreen: "#3d8b3d",
          black: "#373a3c",
          darkGrey: "#999",
          lightGrey: "#ddd",
        },
      },
      spacing: {
        navItem: "0.425rem",
      },
      boxShadow: {
        baner:
          "inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)",
      },
      dropShadow: {
        logo: "0px 1px 3px rgb(0 0 0 / 30%)",
      },
      fontSize: {
        logo: "3.5rem",
      },
      screens: {
        mob: "544px",
        tab: "768px",
        desc: "992px",
        max: "1200px",
      },
    },
  },
  plugins: [],
};
