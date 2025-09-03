// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $meta: {
    name: "my-layer",
  },
  runtimeConfig: {
    myLayer: {
      privateOption: "123",
    },
  },
  modules: ["@nuxt/eslint"],
});

declare module "@nuxt/schema" {
  interface RuntimeConfig {
    myLayer?: {
      privateOption: string;
    };
  }
}
