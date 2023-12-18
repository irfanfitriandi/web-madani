<script setup lang="ts">
defineProps<{
  y: number
}>()

defineEmits(['update:y'])
const dropdown = ref<boolean>(false)

const NAV_MENU = [
  {
    name: 'Proyek',
    to: '/#project',
  },
  {
    name: 'Tentang Kami',
    to: '/#about',
  },
  {
    name: 'Kontak',
    to: '/contact',
  },
]

const closeDropdown = () => {
  setTimeout(() => {
    dropdown.value = false
  }, 100)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between bg-gradient-to-b from-lightPrimary to-primary transition-all duration-300"
    :class="y > 50 ? 'h-20' : 'h-24'"
  >
    <NuxtLink to="/">
      <img
        src="/img/logo-white.png"
        alt="logo"
        class="transition-all duration-300"
        :class="y > 50 ? 'w-44' : 'w-52'"
      />
    </NuxtLink>

    <nav>
      <div class="hidden md:block">
        <ul class="fp flex h-14 gap-4 px-4 text-white">
          <li v-for="(nav, idx) in NAV_MENU" :key="idx" class="flex items-end">
            <NuxtLink
              :to="nav.to"
              class="group flex h-8 flex-col justify-between font-semibold uppercase tracking-wider"
            >
              <span
                class="px-4 duration-300 ease-in-out group-hover:tracking-widest"
              >
                {{ nav.name }}
              </span>
              <div
                class="h-1 w-0 bg-white duration-300 ease-in-out group-hover:w-full"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div
        class="relative inline-block md:hidden"
        @focusout="closeDropdown()"
        @click="dropdown = !dropdown"
      >
        <button name="menu" role="button" class="mr-6 list-none">
          <span class="i-mdi-menu text-4xl text-white"></span>
        </button>
        <ul
          class="fixed right-0 z-10 whitespace-nowrap bg-white p-2 px-4 shadow duration-700 ease-in-out"
          :class="`${
            dropdown
              ? 'visible h-full w-full opacity-100'
              : 'invisible h-0 w-0 opacity-0'
          } ${y > 50 ? 'mt-4' : 'mt-7'}`"
        >
          <li
            v-for="(nav, idx) in NAV_MENU"
            :key="idx"
            class="fp w-full py-1 pr-4 text-lg font-medium uppercase text-darkPrimary"
          >
            <NuxtLink
              :to="nav.to"
              class="group relative flex w-full items-center duration-300 ease-in-out"
            >
              <span
                class="px-4 duration-300 ease-in-out group-hover:tracking-widest"
              >
                {{ nav.name }}
              </span>
              <div
                class="h-0.5 w-0 bg-primary opacity-70 duration-300 ease-in-out group-hover:w-full"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
