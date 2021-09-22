module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0D0C0F",
      },
      boxShadow: {
        green:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(65,113,21, 0.5)",
      },
      animation: {
        test: "test 1s ease-in-out 5s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
