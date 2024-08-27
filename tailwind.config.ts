import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-hero": "url('/Banner.png')",
      },
      boxShadow: {
        custom: "3px 0px 7px rgba(32, 32, 32, 0.75)",
      },
      width: {
        width: "calc(100% / 3 - 10px)",
      },
      maxWidth: {
        "8xl": "1500px",
      },
    },
  },
  plugins: [],
};
export default config;
