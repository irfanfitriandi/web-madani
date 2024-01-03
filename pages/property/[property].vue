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
          <div
            class="bg-primary px-2 py-1 text-2xl font-bold tracking-widest text-white md:text-3xl"
          >
            {{ data.display }}
          </div>
          <div
            class="absolute -right-1 top-1 -z-10 h-full w-full bg-white opacity-80"
          ></div>
        </div>
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

    <div>
      <p>
        Waktunya miliki rumah impian anda! Segera hubungi kami untuk rincian
        lebih lanjut dan jadwalkan kunjungan langsung tentang tipe rumah ini.
      </p>
      <a
        :href="`https://api.whatsapp.com/send/?phone=628877092525&text=Hai Angga, saya ingin bertanya mengenai Perumahan ${data.display}`"
        target="_blank"
        class="w-full"
      >
        <button
          class="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-lightPrimary to-primary py-2 text-lg text-white shadow-lightPrimary/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <span class="i-mdi-whatsapp text-2xl"></span>
          <div>Angga</div>
        </button>
      </a>
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
