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
        "pale-secondary": "var(--pale-secondary)",
      },
      keyframes: {
        growWidth: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
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
