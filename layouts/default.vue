<script setup lang="ts">
const route = useRoute()
const router = useRouter()
console.log(route)
console.log(router)
useSeoMeta({
  title: 'Madani Property Lampung',
  ogTitle: 'Madani Property Lampung',
  keywords: 'madani',
  description:
    'Hunian Fungsional Pertama di Lampung dengan konsep lalala, ... , Open Space, Rumah Tumbuh dan Prinsip Islami. Lokasi strategis di lalala dekat dengan lalala',
  ogDescription:
    'Hunian Fungsional Pertama di Lampung dengan konsep lalala, ... , Open Space, Rumah Tumbuh dan Prinsip Islami. Lokasi strategis di lalala dekat dengan lalala',
  ogImage: '/img/logo.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <Header />
  <slot />
</template>
