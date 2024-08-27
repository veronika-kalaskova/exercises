<template>
  <div
    class="bg-white shadow rounded-xl"
  >
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl h-48 w-full object-cover"
    />
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          perferendis rerum cupiditate voluptates maiores recusandae asperiores
          dolores cumque molestias. Magni sapiente rem minus iste. Sunt libero
          placeat iste illum alias?
        </p>
        <div class="flex items-center justify-between">
          <YoutubeButton :href="meal.strYoutube"></YoutubeButton>>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  }
})

</script>
