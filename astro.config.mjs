// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      langs: [],
      wrap: true,
    },
  },
});
