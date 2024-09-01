import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

export default defineConfig({
  outDir: "dist",
  site: "https://burakkumas.com",
  integrations: [tailwind(), sitemap(), partytown()],
});
