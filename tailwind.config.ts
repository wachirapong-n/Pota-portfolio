import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#11243a", blue: "#2457d6", mist: "#f3f6fa" }, fontFamily: { sans: ["Arial", "sans-serif"] } } },
  plugins: [],
};
export default config;
