/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c9972b",
          light: "#e8b84b",
        },
        green: {
          DEFAULT: "#2d6a1f",
          light: "#4a9e30",
        },
        dark: {
          DEFAULT: "#080c10",
          2: "#0e1318",
          3: "#141b20",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(201,151,43,0.18) 0%, rgba(8,12,16,0) 70%)",
      },
    },
  },
  plugins: [],
};
