/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#07090c",
          900: "#0c0f14",
          850: "#11151c",
          800: "#171c25",
          700: "#232a36",
          600: "#343d4c",
        },
        accent: {
          DEFAULT: "#5eead4",
          soft: "#99f6e4",
          deep: "#14b8a6",
        },
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
