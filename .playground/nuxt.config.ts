import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  extends: ["..", "../baseLayer"],
  modules: ["@nuxt/eslint"],
  runtimeConfig: {
    myLayer: {
      privateOption: "456",
    },
  },
  eslint: {
    config: {
      // Use the generated ESLint config for lint root project as well
      rootDir: fileURLToPath(new URL("..", import.meta.url)),
    },
  },
});
