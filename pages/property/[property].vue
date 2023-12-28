<script setup lang="ts">
import { DB } from './constants'

const data = ref({
  name: '',
  display: '',
  desc: '',
  address: '',
  img: {
    cover: [''],
    spek: [''],
    site: [''],
    detail: [''],
    denah: [''],
  },
  maps: '',
})

onMounted(() => {
  const route = useRoute()
  data.value = DB.filter((d) => d.name === route.params.property)[0]
})
</script>

<template>
  <section
    style="
      background-image: linear-gradient(
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.8)
        ),
        url('/img/backdrop.jpg');
      background-repeat: repeat;
    "
    class="relative flex flex-col items-center justify-center"
  >
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
      class="flex max-w-[600px] flex-col items-center justify-center gap-4 p-5"
    >
      <div>
        <TitleProp title="Overview" />
        <ImgProp :data="data.img.cover" />
      </div>

      <div>
        <TitleProp title="Spesifikasi" />
        <ImgProp :data="data.img.spek" />
      </div>

      <div>
        <TitleProp title="Denah" />
        <ImgProp :data="data.img.denah" />
      </div>

      <div>
        <TitleProp title="Detail" />
        <ImgProp :data="data.img.detail" />
      </div>

      <div>
        <TitleProp title="Siteplan" />
        <ImgProp :data="data.img.site" />
      </div>
    </div>

    <div class="w-full">
      <iframe
        title="map villa madani"
        :src="data.maps"
        class="h-[50vh] w-full"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>
