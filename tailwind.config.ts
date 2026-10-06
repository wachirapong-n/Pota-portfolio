import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#01153e",
        primary: "#2f4996",
        muted: "#64748b",
        line: "#e2e8f0",
        mist: "#f3f6fa",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-thai)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
