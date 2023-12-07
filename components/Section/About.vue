<script setup lang="ts"></script>

<template>
  <section
    id="about"
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
    <img src="/img/logo.png" alt="logo" class="w-60 md:w-96" />
    <div class="absolute -bottom-10 h-24 w-full bg-white blur-xl"></div>
  </section>
</template>
