/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "preset-1": ["64px", { lineHeight: "100%", letterSpacing: "-1px" }],
        "preset-1-mobile": ["40px", { lineHeight: "100%", letterSpacing: "-1px" }],
        "preset-2": ["24px", { lineHeight: "130%", letterSpacing: "-1px" }],
        "preset-3": ["20px", { lineHeight: "140%", letterSpacing: "-0.6px" }],
        "preset-4": ["16px", { lineHeight: "130%", letterSpacing: "-0.6px" }],
      },
      colors: {
        neutral: {
          900: "#17131A",
          800: "#22222C",
          700: "#2B2837",
          600: "#404254",
          200: "#E4E8EF",
          100: "#F2F7F2",
          0: "#FFFFFF",
        },
        blue: {
          400: "#A032FA",
          500: "#C2C7FC",
        },
        yellow: {
          500: "#FFF100",
        },
        orange: {
          500: "#FF5E29",
          800: "#A03A17",
        },
      },
      spacing: {
        0: "0px",
        25: "2px",
        50: "4px",
        75: "6px",
        100: "8px",
        150: "12px",
        200: "16px",
        250: "20px",
        300: "24px",
        400: "32px",
        500: "40px",
        600: "45px",
        800: "64px",
        1000: "90px",
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        full: "999px",
      },
    },
  },
  plugins: [],
};
