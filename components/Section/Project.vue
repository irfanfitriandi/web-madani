<script setup lang="ts">
const PROPERTY = [
  {
    name: 'madani',
    path: '/madani',
    src: '/img/cover_madani.jpg',
  },
  {
    name: 'permata',
    path: '/permata',
    src: '/img/cover_permata.png',
  },
  {
    name: 'zhafira',
    path: '/zhafira',
    src: '/img/cover_zhafira.jpg',
  },
  {
    name: 'damaido',
    path: '/damaido',
    src: '/img/cover_damaido.jpg',
  },
  {
    name: 'green residence',
    path: '/green-res',
    src: '/img/cover_greenres.jpg',
  },
  {
    name: 'property lainnya',
    path: '/more',
    src: '/img/cover_more.jpg',
  },
]
</script>

<template>
  <section
    id="project"
    style="
      background-image: linear-gradient(
          rgb(255, 255, 255),
          rgba(255, 255, 255, 0.75)
        ),
        url('/img/backdrop.jpg');
      background-repeat: repeat;
    "
    class="relative flex min-h-screen scroll-mt-20 flex-col items-center gap-6 px-4 pt-14 md:space-y-14 md:pt-24"
  >
    <div
      class="flex flex-col gap-3"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <h3 class="fp text-2xl font-medium text-primary md:text-4xl">
        Property Kami
      </h3>
      <div class="mx-auto h-2 w-5/6 bg-mdnLightGold"></div>
    </div>

    <div
      class="flex max-w-[1000px] flex-wrap items-center justify-center gap-6"
    >
      <NuxtLink
        :to="prop.path"
        class="group relative z-10 block h-[15rem] w-[18rem] overflow-clip rounded-xl shadow-lg shadow-gray-600/30"
        v-for="(prop, idx) in PROPERTY"
        :key="idx"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        :data-aos-delay="`${idx}00`"
      >
        <img
          :src="prop.src"
          :alt="prop.name"
          class="absolute inset-0 object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-80"
        />
        <div
          class="flex h-full w-full translate-y-8 transform items-end justify-center pb-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <span
            class="fp w-full bg-white/90 p-2 text-center text-2xl font-semibold uppercase text-primary"
          >
            {{ prop.name }}
          </span>
        </div>
      </NuxtLink>
    </div>
    <div class="absolute -bottom-6 h-24 w-full bg-white blur-xl"></div>
  </section>
</template>
