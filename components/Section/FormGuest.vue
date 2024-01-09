<script setup lang="ts">
const loadingGuest = ref(false)
const loadingKritik = ref(false)

const submitBrosur = () => {
  loadingGuest.value = true

  const formEle = document.getElementById('guest') as HTMLFormElement
  const formData = new FormData(formEle)

  fetch(
    'https://script.google.com/macros/s/AKfycbxc2u4DhqeUYbD2kIppwF54nYpauhQ8jqpuk7hFq3cjnTTEcKjPCTZ7GtPJYcDivyBL/exec',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
      window.open(
        'https://drive.google.com/file/d/1U1jrfWmBsqBLAVVI0HHJKs5kUQi5qL-g/view?usp=sharing',
      )
      loadingGuest.value = false
      formEle.reset()
    })
}

const submitKritik = () => {
  loadingKritik.value = true

  const formEle = document.getElementById('kritiksaran') as HTMLFormElement
  const formData = new FormData(formEle)

  fetch(
    'https://script.google.com/macros/s/AKfycbzjr2heeqicPzEGg-SFy-SkFGNcEs0rODzYXeueZ9NQrQwTUEneCVp7xuAPGx0XXRqwzQ/exec',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
      window.alert('Kritik dan Saran sudah terkirim. Terima kasih')
      loadingKritik.value = false
      formEle.reset()
    })
}
</script>

<template>
  <section
    id="brosur"
    style="
      background-image: linear-gradient(
          rgb(255, 255, 255),
          rgba(255, 255, 255, 0.75)
        ),
        url('/img/backdrop.jpg');
      background-repeat: repeat;
    "
    class="relative flex min-h-screen scroll-mt-20 flex-col items-center gap-6 px-4 pb-28 pt-14 md:space-y-14 md:pt-24"
  >
    <div
      class="flex flex-col gap-3"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <h3 class="fp text-2xl font-medium text-primary md:text-4xl">
        Lihat Brosur
      </h3>
      <div class="mx-auto h-2 w-5/6 bg-mdnLightGold"></div>
    </div>

    <div
      class="z-10 flex w-full flex-col overflow-clip rounded-2xl border-2 border-primary/60 md:h-1/2 md:flex-row"
    >
      <iframe
        title="map villa madani"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.1462136813852!2d105.3037129!3d-5.394679700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db59e3515d3b%3A0xff85e940426f5b6!2sVILLA%20MADANI!5e0!3m2!1sen!2sid!4v1701834717771!5m2!1sen!2sid"
        class="md:w-1/2"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div
        class="space-y-6 border-t-2 border-primary/60 bg-white p-4 md:w-1/2 md:border-l-2 md:border-t-0 md:px-10 md:py-8"
      >
        <span
          class="text-center font-medium tracking-wide text-primary/90 md:text-start"
        >
          Silahkan Isi Formulir
        </span>
        <form
          id="guest"
          @submit.prevent="submitBrosur()"
          class="form flex flex-col gap-3"
        >
          <div class="flex w-full flex-col gap-2 md:flex-row md:items-center">
            <label for="Name" class="leading-1 w-1/3 whitespace-nowrap text-sm"
              >Nama</label
            >
            <input
              name="Name"
              type="text"
              class="appearance-none rounded-lg border bg-white px-3 py-1 focus-within:ring-1 focus-within:ring-primary focus-visible:outline-0 md:w-2/3"
              required
            />
          </div>
          <div class="flex w-full flex-col gap-2 md:flex-row md:items-center">
            <label for="Email" class="leading-1 w-1/3 whitespace-nowrap text-sm"
              >Email</label
            >
            <input
              name="Email"
              type="email"
              class="appearance-none rounded-lg border bg-white px-3 py-1 focus-within:ring-1 focus-within:ring-primary focus-visible:outline-0 md:w-2/3"
              required
            />
          </div>
          <div class="flex w-full flex-col gap-2 md:flex-row md:items-center">
            <label for="Phone" class="leading-1 w-1/3 whitespace-nowrap text-sm"
              >Nomor Hp/Whatsapp</label
            >
            <input
              name="Phone"
              type="number"
              class="appearance-none rounded-lg border bg-white px-3 py-1 focus-within:ring-1 focus-within:ring-primary focus-visible:outline-0 md:w-2/3"
              required
            />
          </div>
          <div class="flex w-full flex-col gap-2 md:flex-row md:items-center">
            <label
              for="Domicile"
              class="leading-1 w-1/3 whitespace-nowrap text-sm"
              >Asal Kota/Domisili</label
            >
            <input
              name="Domicile"
              type="text"
              class="appearance-none rounded-lg border bg-white px-3 py-1 focus-within:ring-1 focus-within:ring-primary focus-visible:outline-0 md:w-2/3"
              required
            />
          </div>

          <div class="flex w-full justify-end">
            <button
              type="submit"
              class="fp mt-4 w-full transform-gpu rounded-2xl bg-gradient-to-b from-lightPrimary to-primary px-5 py-2 text-xs font-medium uppercase leading-none tracking-wide text-white duration-300 active:scale-105 md:w-1/2"
            >
              <div :class="loadingGuest ? 'animate-pulse font-extrabold' : ''">
                {{ loadingGuest ? 'o o o' : 'Lihat' }}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div
      id="kritik"
      class="mt-10 flex scroll-mt-20 flex-col gap-3"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <h3 class="fp text-2xl font-medium text-primary md:text-4xl">
        Kritik dan Saran
      </h3>
      <div class="mx-auto h-2 w-5/6 bg-mdnLightGold"></div>
    </div>

    <div
      class="flex w-full flex-col items-center justify-center bg-primary py-8"
    >
      <form
        id="kritiksaran"
        @submit.prevent="submitKritik()"
        class="flex w-full flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-14"
      >
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-14">
          <div class="flex items-center gap-4">
            <label
              for="Kritik"
              class="leading-1 w-1/5 whitespace-nowrap text-sm text-white"
            >
              Kritik
            </label>
            <input
              name="Kritik"
              type="text"
              class="appearance-none rounded-lg border bg-white px-3 py-1 focus-within:ring-1 focus-within:ring-primary focus-visible:outline-0 md:w-4/5"
              required
            />
          </div>
          <div class="flex items-center gap-4">
            <label
              for="Saran"
              class="leading-1 w-1/5 whitespace-nowrap text-sm text-white"
            >
              Saran
            </label>
            <input
              name="Saran"
              type="text"
              class="appearance-none rounded-lg border bg-white px-3 py-1 focus-within:ring-1 focus-within:ring-primary focus-visible:outline-0 md:w-4/5"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          class="fp w-full max-w-xl transform-gpu rounded-2xl bg-white px-14 py-2 text-xs font-medium uppercase leading-none tracking-wide text-primary duration-300 active:scale-105 md:w-fit"
        >
          <div :class="loadingKritik ? 'animate-pulse font-extrabold' : ''">
            {{ loadingKritik ? 'o o o' : 'Kirim' }}
          </div>
        </button>
      </form>
    </div>

    <div class="absolute -bottom-6 h-24 w-full bg-white blur-xl"></div>
  </section>
</template>
