// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import markdoc from "@astrojs/markdoc";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://ajaibghar-co.github.io",
  base: "ajaibghar-landing-page",
  integrations: [
    markdoc({
      allowHTML: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
