<script setup lang="ts">
const scrollY = ref(0)

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', function () {
    scrollY.value = this.scrollY
  })
}
</script>

<template>
  <div>
    <Header :y="scrollY" />
    <slot />

    <Footer />
  </div>
</template>
