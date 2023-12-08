<script setup lang="ts">
useSeoMeta({
  title: 'Madani Property Lampung - Kontak Kami',
  ogTitle: 'Madani Property Lampung - Kontak Kami',
})

const SOSMED = [
  {
    name: 'Whatsapp',
    icon: 'i-mdi-whatsapp',
    link: 'https://api.whatsapp.com/send/?phone=628877092525&text&type=phone_number&app_absent=0',
  },
  {
    name: 'Instagram',
    icon: 'i-mdi-instagram',
    link: 'https://www.instagram.com/madaniofficial__/',
  },
  {
    name: 'TikTok',
    icon: 'i-mdi-music-note-outline',
    link: 'https://www.tiktok.com/@madanipropertylampung',
  },
  {
    name: 'Facebook',
    icon: 'i-mdi-facebook',
    link: 'https://www.facebook.com/madani.property.75',
  },
  {
    name: 'X/Twitter',
    icon: 'i-mdi-twitter',
    link: 'https://twitter.com/madaniofficial_',
  },
]
</script>

<template>
  <section class="relative">
    <div>
      <iframe
        title="map villa madani"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.1462136813852!2d105.3037129!3d-5.394679700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db59e3515d3b%3A0xff85e940426f5b6!2sVILLA%20MADANI!5e0!3m2!1sen!2sid!4v1701834717771!5m2!1sen!2sid"
        class="h-[25vh] w-full border-b shadow-lg shadow-lightPrimary/20"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div
      style="
        background-image: linear-gradient(
            rgb(255, 255, 255),
            rgba(255, 255, 255, 0.75)
          ),
          url('/img/backdrop.jpg');
        background-repeat: repeat;
      "
      class="mx-auto mt-10 flex max-w-[1000px] flex-col items-center gap-10 px-6 pb-36"
    >
      <div class="flex flex-col items-center gap-2">
        <img src="/img/icon.png" alt="icon" class="w-12 md:w-16" />
        <h1 class="fp text-[22px] font-medium text-primary md:text-3xl">
          Madani Property Lampung
        </h1>
        <p class="text-center text-xs md:text-sm">
          Jl. Pulau Singkep No.3, Sukabumi, Kec. Sukarame, Kota Bandar Lampung,
          Lampung 35122
        </p>
      </div>

      <div class="flex w-full flex-col gap-4">
        <a
          v-for="(list, idx) in SOSMED"
          :key="idx"
          :href="list.link"
          target="_blank"
          class="w-full"
        >
          <button
            class="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-lightPrimary to-primary py-2 text-lg text-white shadow-lightPrimary/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <span class="text-2xl" :class="list.icon"></span>
            <div>{{ list.name }}</div>
          </button>
        </a>
      </div>
    </div>

    <div class="absolute -bottom-6 h-24 w-full bg-white blur-xl"></div>
  </section>
</template>
