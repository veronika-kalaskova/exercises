<script setup>
import { ref } from "vue";
import ListItem from "../src/components/ListItem.vue"

const activeId = ref(0)

const items = ref([
  {id: 0, name: "item 0"},
  {id: 1, name: "item 1"},
  {id: 2, name: "item 2"},
  {id: 3, name: "item 3"},
  {id: 4, name: "item 4"},
])

</script>

<template>
  <h1>Passing the current id</h1>
  <button @click="activeId = (activeId + 1) % items.length">Next</button>
  <ul>
    <ListItem v-for="i in items" :key="i.id" :message="i.name" :id="i.id" :isActive="i.id === activeId"/>
  </ul>
</template>

<style scoped>

</style>
