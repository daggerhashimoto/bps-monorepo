/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0000ff",
        white: "#fff",
        gray: "rgba(255, 255, 255, 0)",
        mediumblue: "#0000ca",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "press-start-2p": "'Press Start 2P'",
      },
    },
    fontSize: {
      "7xl": "26px",
      base: "16px",
      "5xs": "8px",
      sm: "14px",
      lgi: "19px",
      "4xl": "23px",
      "23xl": "42px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
