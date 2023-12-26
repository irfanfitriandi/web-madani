<script setup lang="ts">
useSeoMeta({
  title: 'Madani Property Lampung',
  ogTitle: 'Madani Property Lampung',
})
const loading = ref(true)
onMounted(() => {
  loading.value = false
})
</script>

<template>
  <div>
    <SectionHero v-bind:loading="loading" />
    <SectionAbout />    
    <SectionProject />
    <SectionBiaya />
    <SectionFormGuest />
  </div>
</template>
