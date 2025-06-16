<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 300)
})
</script>

<template>

  <transition enter-active-class="transition duration-700 ease-out" enter-from-class="opacity-0 -translate-y-10"
    enter-to-class="opacity-100 translate-y-0">

    <body v-if="show" class="bg-white flex items-center justify-center h-screen flex-col gap-10">
      <h1 class="text-4xl font-mono text-indigo-500">Welcome to Podomoro Apps</h1>
      <RouterView />
    </body>

  </transition>


</template>
