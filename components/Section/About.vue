<script setup lang="ts"></script>

<template>
  <section id="about">
    <div
      style="
        background-image: linear-gradient(
            rgb(255, 255, 255),
            rgba(255, 255, 255, 0.75)
          ),
          url('/img/backdrop.jpg');
        background-repeat: repeat;
      "
      class="relative flex h-screen flex-col items-center px-4 py-10 md:py-14"
    >
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <img src="/img/logo.png" alt="logo" class="w-60 md:w-96" />
      </div>
      <div class="absolute -bottom-6 h-24 w-full bg-white blur-xl"></div>
    </div>
    <div
      class="mt-10 flex items-center justify-center gap-6 bg-mdnLightGold/10 p-6"
    >
      <UiCounter class="text-xl font-semibold" :value="150" :speed="100" />
      <UiCounter class="text-xl font-semibold" :value="150" :speed="100" />
      <UiCounter class="text-xl font-semibold" :value="150" :speed="100" />
    </div>
  </section>
</template>
