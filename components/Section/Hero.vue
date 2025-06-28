<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<template>
  <section
    class="relative flex h-[80vh] justify-end bg-transparent bg-[length:200%] bg-center md:h-[90vh] md:bg-[length:90%]"
  >
    <div
      style="
        background-image: linear-gradient(
            rgba(255, 255, 255, 0.33),
            rgba(0, 0, 0, 0.3)
          ),
          url('/img/hero2.jpg');
        background-repeat: repeat;
      "
      class="absolute h-[80vh] w-full bg-[length:200%] bg-center md:h-[90vh] md:bg-[length:90%]"
    ></div>
    <h1
      class="w-fit pr-4 pt-10 text-end text-2xl font-light text-darkPrimary md:pr-14 md:pt-24 md:text-5xl"
      data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      Wujudkan <b>Rumah</b> <br />
      <b>Impian</b> Kamu Bersama <br />
      <div class="w-fit font-normal backdrop-blur-3xl md:bg-white/30">
        Madani Property Lampung
      </div>
    </h1>
    <div
      v-if="!loading"
      class="absolute flex h-full w-full items-center justify-center"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <a href="#brosur">
        <button
          class="fp transform-gpu rounded-2xl bg-gradient-to-b from-lightPrimary to-primary px-5 py-3 font-medium uppercase tracking-wide text-white shadow-md shadow-gray-500 transition-transform hover:-translate-y-1 active:scale-105 md:text-xl"
        >
          Lihat Brosur
        </button>
      </a>
    </div>
  </section>
</template>
