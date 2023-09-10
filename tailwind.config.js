/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: "#65c3c8",
          secondary: "#ef9fbc",
          accent: "#eeaf3a",
          neutral: "#291334",
          "base-100": "#faf7f5",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      {
        myDarkTheme: {
          primary: "#ffffff",
          secondary: "#152747",
          accent: "#513448",
          neutral: "#331800",
          "base-100": "#09090b",
          info: "#66c7ff",
          success: "#87d039",
          warning: "#e3d664",
          error: "#ff7070",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

//  mytheme: {
//                 "primary": "#641ae6",
//                 "secondary": "#d926a9",
//                 "accent": "#1fb2a6",
//                 "neutral": "#2a323c",
//                 "base-100": "#4b5563",
//                 "info": "#3abff8",
//                 "success": "#36d399",
//                 "warning": "#fbbd23",
//                 "error": "#f87272",
//             },
