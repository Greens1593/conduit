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
          gray: {
            100: "#f3f3f3",
            200: "#eceeef",
            300: "#ddd",
            400: "#ccc",
            500: "#bbb",
            600: "#aaa",
            650: "#a1a1a1",
            700: "#999",
            800: "#818a91",
            900: "#687077",
            1000: "#373a3c",
          },

          green: "#5CB85C",
          darkGreen: "#3d8b3d",
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
