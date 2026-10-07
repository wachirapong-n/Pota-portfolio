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
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
        "arrow-reveal": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "curve-reveal": {
          "0%": { clipPath: "inset(0 0 0 100%)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 240ms ease-out both",
        float: "float 2.2s ease-in-out infinite",
        "arrow-reveal": "arrow-reveal 2000ms ease-out both",
        "curve-reveal": "curve-reveal 2000ms ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
