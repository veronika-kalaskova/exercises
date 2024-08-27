<template>
    <a
      :href="href"
      target="_blank"
      class="px-3 py-3 rounded border-2 bg-red-600 border-red-600 hover:border-red-600 text-white hover:text-black hover:bg-white transition-colors"
    >
      <slot>YouTube</slot>
    </a>
  </template>
  
  <script setup>
  const props = defineProps({
    href: String
  })
  </script>