<script setup lang="ts">
const DB = [
  {
    name: 'madani',
    display: 'Villa Madani',
    desc: '',
    address: '',
    img: {
      cover: [],
      spek: [],
      site: [],
      drone: [],
      detail: [],
    },
  },
  {
    name: 'permata',
    display: 'Villa Permata',
    desc: '',
    address: '',
    img: {
      cover: [],
      spek: [],
      site: [],
      drone: [],
      detail: [],
    },
  },
  {
    name: 'zhafira',
    display: 'New Zhafira',
    desc: '',
    address: '',
    img: {
      cover: [],
      spek: [],
      site: [],
      drone: [],
      detail: [],
    },
  },
  {
    name: 'damaido',
    display: 'Damaido',
    desc: '',
    address: '',
    img: {
      cover: [],
      spek: [],
      site: [],
      drone: [],
      detail: [],
    },
  },
  {
    name: 'green-res',
    display: 'Green Residence',
    desc: '',
    address: '',
    img: {
      cover: [],
      spek: [],
      site: [],
      drone: [],
      detail: [],
    },
  },
]
const data = ref({
  name: '',
  display: '',
  desc: '',
  address: '',
  img: {
    cover: [],
    spek: [],
    site: [],
    drone: [],
    detail: [],
  },
})

onMounted(() => {
  const route = useRoute()
  data.value = DB.filter((d) => d.name === route.params.property)[0]
})
</script>

<template>
  <section class="relative flex flex-col">
    <div
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.5)
          ),
          url('/img/aerial.jpg');
        background-repeat: repeat;
      "
      class="absolute flex h-24 w-full items-center justify-center bg-cover"
    >
      <h3 class="text-3xl font-bold text-white">{{ data.display }}</h3>
    </div>
    <div></div>
  </section>
</template>
