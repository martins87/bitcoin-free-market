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
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
