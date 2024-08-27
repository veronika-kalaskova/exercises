<!-- 
THE WRONG WAY IS:
:isActive="activeId"
<span v-if="id === isActive">-></span> 
isActive: Number 
*vysvetleni* : kdyz kliknu na next, tak se zmeni hodnota VSECH komponent (activeId bude o jedno vetsi)

THE RIGHT WAY IS:
:isActive="i.id === activeId"
<span v-if="isActive">-></span>
isActive: Boolean 
*vysvetleni* : kdyz kliknu na next, tak se zmeni hodnota pouze DVOU komponent (z false na true, z true na false)
-->

<template>
    <li>
        <span v-if="isActive">-></span>
        {{ message }}
    </li>
</template>

<script setup lang="ts">
import { onUpdated } from "vue";


const props = defineProps({
    message: String,
    id: Number,
    isActive: Boolean 
})


onUpdated(() => {
    console.log("updated with id " + props.id)
})
</script>

<style scoped>

</style>