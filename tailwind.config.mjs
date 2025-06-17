/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            a: {
              color: "inherit",
              textDecoration: "none",
              fontWeight: "500",
            },
            "a:hover": {
              color: "#3b82f6",
            },
            strong: {
              color: "inherit",
            },
            "ol > li::marker": {
              color: "inherit",
            },
            "ul > li::marker": {
              color: "inherit",
            },
            hr: {
              borderColor: "inherit",
              opacity: 0.2,
            },
            blockquote: {
              color: "inherit",
              borderLeftColor: "#3b82f6",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
            code: {
              color: "inherit",
            },
            "pre code": {
              backgroundColor: "transparent",
            },
            pre: {
              backgroundColor: "rgb(22 27 34)",
              border: "1px solid rgb(48 54 61)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
