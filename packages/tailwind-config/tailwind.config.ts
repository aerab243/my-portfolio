import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Texte
        foreground: "var(--text-primary)",
        "foreground-secondary": "var(--text-secondary)",
        "foreground-muted": "var(--text-muted)",
        // Arrière-plans
        background: "var(--bg-primary)",
        "background-secondary": "var(--bg-secondary)",
        "background-tertiary": "var(--bg-tertiary)",
        // Bordures
        border: "var(--border)",
        "border-light": "var(--border-light)",
        // Accents
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
