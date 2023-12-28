<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <div>
    <img
      v-for="(i, idx) in data"
      :key="idx"
      :src="i"
      :alt="`img${idx}`"
      class="w-full"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    />
  </div>
</template>
