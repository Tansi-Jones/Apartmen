module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        skyBlue: "#12C8E5",
        yellow: "#FDAC39",
        darkBlue: "#11162D",
        lightBlue: "#05B1F1",
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
