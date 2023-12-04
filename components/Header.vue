<script setup lang="ts">
const NAV_MENU = [
  {
    name: 'Project',
    to: '/project',
  },
  {
    name: 'About Us',
    to: '/about-us',
  },
  {
    name: 'Contact Us',
    to: '/contact-us',
  },
]
</script>

<template>
  <header class="flex items-center justify-between bg-primary">
    <NuxtLink to="/">
      <img src="/img/logo.jpg" alt="logo" />
    </NuxtLink>

    <nav>
      <ul class="fp flex gap-2 px-4 text-white">
        <li v-for="(nav, idx) in NAV_MENU" :key="idx">
          <NuxtLink :to="nav.to">{{ nav.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
