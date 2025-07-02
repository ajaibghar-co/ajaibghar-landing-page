// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: "https://ajaibghar-co.github.io",
  base: "ajaibghar-landing-page",
  integrations: [
    markdoc({
      allowHTML: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
