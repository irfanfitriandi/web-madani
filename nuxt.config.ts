// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Madani Property Lampung',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Hunian Fungsional di Lampung dengan konsep lalala, ... , Open Space, Rumah Tumbuh dan Prinsip Islami. Lokasi strategis di lalala dekat dengan lalala',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'cache-control', content: 'no-cache' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Madani Property Lampung',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Hunian Fungsional di Lampung dengan konsep lalala, ... , Open Space, Rumah Tumbuh dan Prinsip Islami. Lokasi strategis di lalala dekat dengan lalala',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: '/img/logo.png',
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Madani Visit',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'msapplication-TileColor', href: '#da532c' },
        { rel: 'theme-color', href: '#ffffff' },
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
})
