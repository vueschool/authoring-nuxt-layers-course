// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $meta: {
    name: "my-layer",
  },
  modules: ["@nuxt/eslint"],
});
