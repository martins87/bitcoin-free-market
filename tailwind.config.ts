import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main_orange: "#F7931A",
      },
      keyframes: {
        "spin-till-100-million-usd": {
          "0%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-14deg)" },
          "100%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        "spin-till-100-million-usd":
          "spin-till-100-million-usd 1.75s linear infinite",
      },
      screens: {
        mobile: "512px",
        tablet: "960px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
