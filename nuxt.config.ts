// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  alias: {
    assets: "/<rootDir>/assets"
  },
  css: [
    '~/assets/styles/tailwind.css',
    '~/assets/styles/main.scss'
  ],
  modules: ['@nuxtjs/tailwindcss'],
  pages: true,
  components: true,
  plugins: [
    
  ]
})
