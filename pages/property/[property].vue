<script setup lang="ts">
const DB = [
  {
    name: 'madani',
    display: 'Villa Madani',
    desc: '',
    address: '',
    img: {
      cover: ['/img/vm/cover_vm.jpg'],
      spek: ['/img/vm/spek_vm180.jpg'],
      site: ['/img/nz/siteplan_nz.jpg'],
      drone: ['/img/nz/siteplan_nz.jpg'],
      detail: ['/img/nz/detail_nz.jpg'],
    },
  },
  {
    name: 'permata',
    display: 'Villa Permata',
    desc: '',
    address: '',
    img: {
      cover: ['/img/vm/cover_vm.jpg'],
      spek: ['/img/vm/spek_vm180.jpg'],
      site: ['/img/nz/siteplan_nz.jpg'],
      drone: ['/img/nz/siteplan_nz.jpg'],
      detail: ['/img/nz/detail_nz.jpg'],
    },
  },
  {
    name: 'zhafira',
    display: 'New Zhafira',
    desc: '',
    address: '',
    img: {
      cover: ['/img/vm/cover_vm.jpg'],
      spek: ['/img/vm/spek_vm180.jpg'],
      site: ['/img/nz/siteplan_nz.jpg'],
      drone: ['/img/nz/siteplan_nz.jpg'],
      detail: ['/img/nz/detail_nz.jpg'],
    },
  },
  {
    name: 'damaido',
    display: 'Damaido',
    desc: '',
    address: '',
    img: {
      cover: ['/img/vm/cover_vm.jpg'],
      spek: ['/img/vm/spek_vm180.jpg'],
      site: ['/img/nz/siteplan_nz.jpg'],
      drone: ['/img/nz/siteplan_nz.jpg'],
      detail: ['/img/nz/detail_nz.jpg'],
    },
  },
  {
    name: 'green-res',
    display: 'Green Residence',
    desc: '',
    address: '',
    img: {
      cover: ['/img/vm/cover_vm.jpg'],
      spek: ['/img/vm/spek_vm180.jpg'],
      site: ['/img/nz/siteplan_nz.jpg'],
      drone: ['/img/nz/siteplan_nz.jpg'],
      detail: ['/img/nz/detail_nz.jpg'],
    },
  },
]

const data = ref({
  name: '',
  display: '',
  desc: '',
  address: '',
  img: {
    cover: [''],
    spek: [''],
    site: [''],
    drone: [''],
    detail: [''],
  },
})

onMounted(() => {
  const route = useRoute()
  data.value = DB.filter((d) => d.name === route.params.property)[0]
  console.log(data.value.img.cover[0])
})
</script>

<template>
  <section class="relative flex flex-col items-center justify-center">
    <div class="h-42 relative w-full overflow-clip md:h-52">
      <div
        style="
          background-image: linear-gradient(
              rgba(95, 151, 86, 0.2),
              rgba(0, 0, 0, 0.3)
            ),
            url('/img/aerial.jpg');
          background-repeat: repeat;
        "
        class="flex h-44 w-full animate-[zoom_15s_linear_infinite] items-center justify-center bg-cover bg-center opacity-90 md:h-52"
      ></div>

      <div
        class="absolute top-0 flex h-full w-full items-center justify-center"
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <h3
          class="bg-primary px-2 py-1 text-2xl font-bold text-white md:text-3xl"
        >
          {{ data.display }}
        </h3>
      </div>
    </div>

    <div
      class="mt-4 flex flex-col gap-1 md:mt-6"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <h3 class="fp text-xl font-medium text-primary md:text-2xl">Overview</h3>
      <div class="mx-auto h-1 w-5/6 bg-mdnLightGold"></div>
    </div>

    <div>
      <img :src="data.img.spek[0]" alt="img" class="h-96 w-96 object-cover" />
    </div>
  </section>
</template>
