/** @type {import('tailwindcss').Config} */
import typographyPlugin from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg,css}",
    "./public/**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Manrope", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [typographyPlugin],
};
