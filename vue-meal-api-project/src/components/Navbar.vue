<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link
      :to="{ name: 'home' }"
      class="px-5 h-full inline-flex items-center"
      >Home</router-link
    >
    <div class="flex h-full">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 h-full inline-flex items-center hover:bg-purple-100 transition-colors"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 h-full inline-flex items-center hover:bg-purple-100 transition-colors"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="px-2 h-full inline-flex items-center hover:bg-purple-100 transition-colors"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>
