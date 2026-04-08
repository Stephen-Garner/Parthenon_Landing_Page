import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        charcoal: "#1E1E1E",
        sandstone: "#C4A882",
        walnut: "#5C3D2E",
        gold: "#B8975A",
        marble: "#FAF7F2",
        sage: "#6B7F5E",
        "cream-dark": "#EDE5D4",
        "sandstone-light": "#D4BEA2",
        "gold-light": "#CDB07A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      animation: {
        "ken-burns": "kenBurns 22s ease-in-out infinite alternate",
      },
      keyframes: {
        kenBurns: {
          "0%": { transform: "scale(1.0) translate(0px, 0px)" },
          "100%": { transform: "scale(1.08) translate(-12px, -8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
