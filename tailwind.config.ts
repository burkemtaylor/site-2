import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      mobile: "300px",

      desktop: "1024px",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business"],
  },
} satisfies Config;
