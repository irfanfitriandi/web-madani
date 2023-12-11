<script setup lang="ts">
import { vElementVisibility } from '@vueuse/components'

const props = defineProps<{
  value: number
  speed: number // smaller is faster
  reload?: boolean
}>()

const displayNumber = ref(0)
let interval: NodeJS.Timeout | null = null

function onElementVisibility(state: boolean) {
  if (state) {
    clearInterval(interval!)

    interval = setInterval(() => {
      if (Math.floor(displayNumber.value) !== Math.floor(props.value)) {
        let change = (props.value - displayNumber.value) / props.speed
        change = change >= 0 ? Math.ceil(change) : Math.floor(change)
        displayNumber.value = displayNumber.value + change
      } else {
        displayNumber.value = props.value
        clearInterval(interval!)
      }
    }, 20)
  } else if (props.reload) {
    displayNumber.value = 0
  }
}
</script>

<template>
  <div v-element-visibility="onElementVisibility">
    {{ displayNumber }}
  </div>
</template>
