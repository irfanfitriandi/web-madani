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
    <section class="mt-14 flex justify-center px-6">
      <iframe
        src="https://www.youtube.com/embed/Rahm6EROnco?si=fgXFKmrhvYjDEGp_"
        title="property video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="h-[50vh] w-full rounded-2xl"
        loading="lazy"
      ></iframe>
    </section>
    <SectionProject />
    <SectionFormGuest />
  </div>
</template>
