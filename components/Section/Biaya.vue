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
    class="relative mt-14 flex h-auto flex-col bg-mdnLightGold/20 px-4 md:mt-24"
  >
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <p class="text-darkPrimary">
        Yuk Beli Rumah di <br />
        <b>Madani Property</b> <br />
        Sudah <b>Bebas Biaya</b>
      </p>
    </div>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="(b, idx) in BIAYA"
        :key="idx"
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div class="relative h-52 w-52 -skew-x-12 overflow-clip bg-primary">
          <img
            :src="b.src"
            alt=""
            class="absolute -left-6 -top-6 w-[255px] max-w-fit skew-x-12 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
