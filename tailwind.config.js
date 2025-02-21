import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "back-drop": "var(--bg-back-drop)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        title: "var(--text-title)",
        subtitle: "var(--text-subtitle)",
        "saturated-green": "var(--saturated-green)",
      },
      keyframes: {
        "wide-orbit": {
          "0%": {
            transform:
              "rotate(0deg) translateX(var(--orbit-p-major-axis)) translateY(0px) rotate(0deg)",
          },
          "25%": {
            transform:
              "rotate(90deg) translateX(0px) translateY(var(--orbit-p-minor-axis)) rotate(-90deg)",
          },
          "50%": {
            transform:
              "rotate(180deg) translateX(var(--orbit-n-major-axis)) translateY(0px) rotate(-180deg)",
          },
          "75%": {
            transform:
              "rotate(270deg) translateX(0px) translateY(var(--orbit-n-minor-axis)) rotate(-270deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateX(var(--orbit-p-major-axis)) translateY(0px) rotate(-360deg)",
          },
        },
        "narrow-orbit": {
          "0%": {
            transform:
              "rotate(0deg) translateY(var(--orbit-p-major-axis)) translateX(0px) rotate(0deg)",
          },
          "25%": {
            transform:
              "rotate(90deg) translateY(0px) translateX(var(--orbit-p-minor-axis)) rotate(-90deg)",
          },
          "50%": {
            transform:
              "rotate(180deg) translateY(var(--orbit-n-major-axis)) translateX(0px) rotate(-180deg)",
          },
          "75%": {
            transform:
              "rotate(270deg) translateY(0px) translateX(var(--orbit-n-minor-axis)) rotate(-270deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(var(--orbit-p-major-axis)) translateX(0px) rotate(-360deg)",
          },
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "wide-orbit": "wide-orbit var(--orbit-duration) linear infinite",
        "narrow-orbit": "narrow-orbit var(--orbit-duration) linear infinite",
        slide: "slide 60s linear infinite",
      },
    },
  },
  plugins: [],
};
