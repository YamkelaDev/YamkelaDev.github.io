/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary accent — modern violet (was gold)
        accent: {
          DEFAULT: "#915EFF",
          light: "#B99CFF",
        },
        // secondary accent — electric cyan (was green)
        accent2: {
          DEFAULT: "#00D3F2",
          light: "#64E8FF",
        },
        dark: {
          DEFAULT: "#050816",
          2: "#0B0F1E",
          3: "#151030",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(145,94,255,0.22) 0%, rgba(5,8,22,0) 70%)",
      },
    },
  },
  plugins: [],
};
