<script setup lang="ts">
useSeoMeta({
  title: 'Madani Property Lampung',
  ogTitle: 'Madani Property Lampung',
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionAbout />
    <div class="mt-14 flex justify-center px-6">
      <iframe
        src="https://www.youtube.com/embed/4jnzf1yj48M?si=rcFNraQfsfcsHKuY"
        title="property video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="h-[50vh] w-full rounded-2xl"
        loading="lazy"
      ></iframe>
    </div>
    <SectionFormGuest />
  </div>
</template>
