<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="mx-auto my-4 flex w-max flex-col items-center gap-1 bg-gradient-to-b from-mdnLightGold to-mdnGold/80 p-1 shadow-md shadow-mdnGold/40 md:my-6"
    data-aos="zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1000"
  >
    <h3
      class="fp bg-white px-4 py-[2px] text-xl font-medium text-primary/80 md:text-2xl"
    >
      {{ title }}
    </h3>
  </div>
</template>
