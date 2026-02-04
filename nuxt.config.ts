import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      bodyAttrs: {
        class: 'bg-[#111110] text-[#b5b3ad] leading-[1.65] font-normal text-[14px]'
      }
    }
  },
  modules: ['@nuxt/eslint'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})