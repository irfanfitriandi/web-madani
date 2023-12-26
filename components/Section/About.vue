<script setup lang="ts">
const ABOUT = [
  {
    icon: 'i-mdi-map-marker-path',
    desc: 'Lokasi strategis di perkotaan dengan akses yang mudah.',
  },
  {
    icon: 'i-mdi-home-modern',
    desc: 'Desain trendy ala Mediterania yang modern',
  },
  {
    icon: 'i-mdi-home-assistant',
    desc: 'Fasilitas lengkap: masjid, minimarket, sekolah dll.',
  },
]

const COUNTER = [
  {
    count: 100,
    plus: true,
    desc: 'Unit Property Terjual',
  },
  {
    count: 80,
    plus: true,
    desc: 'Unit Property Terbangun',
  },
  {
    count: 6,
    plus: false,
    desc: 'Perumahan',
  },
]
</script>

<template>
  <section id="about" class="scroll-mt-20">
    <div
      style="
        background-image: linear-gradient(
            rgb(255, 255, 255),
            rgba(255, 255, 255, 0.75)
          ),
          url('/img/backdrop.jpg');
        background-repeat: repeat;
      "
      class="relative flex h-auto flex-col items-center px-4 pt-14 md:pt-24"
    >
      <div
        class="z-10 flex flex-col items-center justify-center gap-10 md:gap-24"
      >
        <div class="flex flex-col items-center justify-center gap-4 md:gap-6">
          <img
            src="/img/logo.png"
            alt="logo"
            class="w-60 md:w-96"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          />
          <p
            class="w-80 text-center text-sm leading-relaxed tracking-tight md:w-[450px] md:text-base md:leading-relaxed md:tracking-[-0.02em]"
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1350"
          >
            Membangun Mimpi, Menghadirkan Rumah Impian Sejak 2014 di Beragam
            Lokasi di Lampung.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div
            class="flex flex-col items-center gap-2"
            v-for="(p, idx) in ABOUT"
            :key="idx"
          >
            <span
              class="md: bg-gradient-to-b from-lightPrimary to-primary text-6xl md:text-7xl"
              :class="p.icon"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            ></span>
            <p
              class="w-80 text-center text-sm leading-relaxed tracking-tight md:w-[450px] md:text-base md:leading-relaxed md:tracking-[-0.02em]"
              data-aos="fade-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1350"
            >
              {{ p.desc }}
            </p>
          </div>
        </div>
      </div>

      <div class="absolute -bottom-6 h-24 w-full bg-white blur-xl"></div>
    </div>

    <div
      class="mb-28 mt-14 flex items-start justify-center gap-5 overflow-clip bg-lightPrimary20 p-6 md:gap-24"
    >
      <div
        class="flex flex-col items-center justify-center gap-2"
        v-for="(c, idx) in COUNTER"
        :key="idx"
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <UiCounter
          class="fp text-3xl font-medium text-primary md:text-4xl"
          :value="c.count"
          :speed="1000"
          :plus="c.plus"
        />
        <p class="text-center text-xs md:text-sm">{{ c.desc }}</p>
      </div>
    </div>

    <div
      class="mt-14 flex justify-center px-6"
      data-aos="zoom-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <iframe
        src="https://www.youtube.com/embed/Rahm6EROnco?si=fgXFKmrhvYjDEGp_"
        title="property video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="h-[50vh] w-full rounded-2xl"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>
