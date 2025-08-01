import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        anton: ["var(--font-anton)", "sans-serif"],
      },
    },
  },

  plugins: [],
};

export default config;
