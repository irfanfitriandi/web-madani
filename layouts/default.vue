<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const { y } = useScroll(el)

const Y = computed({
  get() {
    return y.value.toFixed(1)
  },
  set(val) {
    y.value = Number.parseFloat(val)
  },
})
</script>

<template>
  <div ref="el" class="h-screen overflow-scroll">
    <Header :y="Y" />
    <slot />
  </div>
</template>
