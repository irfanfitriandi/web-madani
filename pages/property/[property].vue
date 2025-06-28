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
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
        url('/img/backdrop.jpg');
      background-repeat: repeat;
    "
    class="relative flex flex-col items-center justify-center"
  >
    <div class="h-42 relative w-full overflow-clip md:h-52">
      <div
        style="
          background-image:
            linear-gradient(rgba(95, 151, 86, 0.2), rgba(0, 0, 0, 0.3)),
            url('/img/drone.jpg');
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
        <div class="relative">
          <h1
            class="bg-primary px-2 py-1 text-2xl font-bold tracking-widest text-white md:text-3xl"
          >
            {{ data.display }}
          </h1>
          <div
            class="absolute -right-1 top-1 -z-10 h-full w-full bg-mdnGold opacity-80"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="flex max-w-[600px] flex-col items-center justify-center gap-4 p-5"
    >
      <div v-if="data.img.cover[0].length > 2">
        <TitleProp title="Overview" />
        <ImgProp :data="data.img.cover" />
      </div>

      <div v-if="data.img.spek[0].length > 2">
        <TitleProp title="Spesifikasi" />
        <ImgProp :data="data.img.spek" />
      </div>

      <div v-if="data.img.denah[0].length > 2">
        <TitleProp title="Denah" />
        <ImgProp :data="data.img.denah" />
      </div>

      <div v-if="data.img.detail[0].length > 2">
        <TitleProp title="Detail" />
        <ImgProp :data="data.img.detail" />
      </div>

      <div v-if="data.img.site[0].length > 2">
        <TitleProp title="Siteplan" />
        <ImgProp :data="data.img.site" />
      </div>
    </div>

    <div class="mt-4 px-1 py-4">
      <div class="mb-5">
        <h2
          class="fp text-center text-lg font-semibold text-primary md:text-xl"
        >
          Waktunya miliki rumah impian anda!
        </h2>
        <p class="text-center text-xs md:text-sm">
          Segera hubungi kami untuk rincian lebih lanjut dan jadwalkan kunjungan
          langsung tipe rumah ini.
        </p>
      </div>
      <a
        :href="`https://api.whatsapp.com/send/?phone=628877092525&text=Hai Angga, saya ingin bertanya mengenai Perumahan ${data.display}`"
        target="_blank"
        class="w-full"
      >
        <button
          class="mx-auto flex w-1/2 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-lightPrimary to-primary py-1 text-lg text-white shadow-lightPrimary/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <span class="i-mdi-whatsapp text-2xl"></span>
          <div>Angga</div>
        </button>
      </a>
    </div>

    <div v-if="data.maps" class="mt-10 w-full">
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
