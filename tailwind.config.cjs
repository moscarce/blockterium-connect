/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#2B3589",
          blue: "#1C2DC7",
          primaryFontColor: "#E2E5FF",
          secondaryColor: "#000",
          secondaryFontColor: "#c1c3d1",
          grey: "rgba(255, 255, 255, o.17)",
          Lightgrey: "rgba(255, 255, 255, 0.8)",
          secondary: "#00f6ff",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          LightBlue: "#4A59E5",
          veryLightBlue: "#C5CAFF",
          dimBlue: "rgba(9, 151, 124, 0.1)",
          darkOrange: "#EB5757",
          darkestGrey: "#1E1E1E",
          darkestBlue: "#17152C",
          mainRed: "#CA6767",
          GreyOne: "#1E1F34",
          GreyTwo: "#41424F",
          greyFour: "#121212",
          greyThree: "#1D1D1D",
          greyFive: "#CFCFCF",
          greySix: "#F6F6F6",
          greySeven: "#EAEAEA",
          greyEight: "#F7F7F7",
          greyNine: "#4E4E4E",
          greyTen: "#606F7B",
          purple: "#9a2cab",
          purpleshade: "#be02db4d",
          darkPurple: "#110014",
          mainWhite: "#FFFFFF",
          mainBlue: "#4A59E5",
          gradedBlue: "rgba(197, 202, 255, 0.2)",
          mainBlack: "#000000",
          mainGreen: "#8CCA66",
          red: "#ff0000",
        },
        fontFamily: {
          assistant: ["Epilogue"],
        },
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        xsm: "950px",
        md: "1060px",
        bg: "1200px",
        lg: "1400px",
        xl: "1900px",
      },
    },
    plugins: [],
  };