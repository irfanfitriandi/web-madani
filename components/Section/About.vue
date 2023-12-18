<script setup lang="ts">
const ABOUT = [
  {
    icon: 'i-mdi-home-assistant',
    desc: 'Menjadi yang terdepan dalam inovasi baru yang selalu berkembang dan menjadikan hunian rumah yang aman, nyaman, dan asri bagi penghuninya.',
  },
  {
    icon: 'i-mdi-shield-star',
    desc: 'Mewujudkan konsep perumahan yang berkualitas seiring dengan komitmen kami yang berkembang karena kepercayaan dari Anda',
  },
  {
    icon: 'i-mdi-account-hard-hat',
    desc: ' Memberi layanan kepada konsumen dari mulai lokasi rumah yang strategis, desain yang inovatif dan kreatif serta konsumen di berikan kemudahan dalam membayar dengan uang muka dan angsuran yang mudah',
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
            data-aos-duration="1000"
          >
            PT. Multi Karya Madani merupakan developer yang berdiri sejak tahun
            2014 dengan berbagai jenis properti di beberapa lokasi di Lampung.
          </p>
        </div>

        <div class="flex flex-col gap-6 md:gap-10 2xl:flex-row">
          <div
            class="w-1/ flex flex-col items-center gap-2"
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
              data-aos-duration="1000"
            >
              {{ p.desc }}
            </p>
          </div>
        </div>
      </div>

      <div class="absolute -bottom-6 h-24 w-full bg-white blur-xl"></div>
    </div>

    <div
      class="mb-28 mt-14 flex items-start justify-center gap-5 bg-mdnLightGold/10 p-6 md:gap-24"
    >
      <div
        class="flex flex-col items-center justify-center gap-2"
        v-for="(c, idx) in COUNTER"
        :key="idx"
      >
        <UiCounter
          class="fp text-3xl font-medium text-primary md:text-4xl"
          :value="c.count"
          :speed="100"
          :plus="c.plus"
        />
        <p class="text-center text-xs md:text-sm">{{ c.desc }}</p>
      </div>
    </div>
  </section>
</template>
