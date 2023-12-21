<script setup lang="ts">
const BIAYA = [
  {
    name: 'BPHTB',
    src: '/img/bea_bphtb.jpg',
  },
  {
    name: 'PPH',
    src: '/img/bea_tax.jpg',
  },
  {
    name: 'Adm. Bank',
    src: '/img/bea_bank.jpg',
  },
  {
    name: 'Notaris',
    src: '/img/bea_notaris.jpg',
  },
  {
    name: 'Balik Nama',
    src: '/img/bea_baliknama.jpg',
  },
  {
    name: 'Dan lainnya',
    src: '/img/bea_dll.jpg',
  },
]
</script>

<template>
  <section
    id="biaya"
    class="relative mt-14 flex h-auto flex-col overflow-x-clip bg-mdnLightGold20 px-4 md:mt-24"
  >
    <div class="z-10">
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <p class="text-xl text-darkPrimary md:text-2xl">
          Beli Rumah di <br />
          <b>Madani Property</b> <br />
          Sudah <b>Bebas Biaya</b>
        </p>
      </div>
      <div class="mt-4 flex flex-wrap justify-center gap-4 md:mt-6">
        <div
          v-for="(b, idx) in BIAYA"
          :key="idx"
          data-aos="fade-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div
            class="relative h-36 w-36 -skew-x-12 overflow-clip border-2 border-lightPrimary/90 bg-gradient-to-b from-lightPrimary to-primary md:h-52 md:w-52"
          >
            <img
              :src="b.src"
              :alt="b.name"
              class="absolute -left-6 -top-9 w-[190px] max-w-fit skew-x-12 object-cover opacity-80 md:w-[255px]"
            />
          </div>
          <p class="mt-1 text-lg font-light text-primary italic font-sans">
            {{ b.name }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="absolute -left-6 -top-10 h-24 w-[150vh] bg-mdnLightGold20 blur-xl"
    ></div>
    <div
      class="absolute -bottom-8 -left-6 z-[2] h-24 w-[150vh] bg-mdnLightGold20 blur-xl"
    ></div>
  </section>
</template>
