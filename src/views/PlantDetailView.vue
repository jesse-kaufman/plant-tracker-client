<template>
  <div class="py-6 mb-10 sm:px-6 lg:px-8">
    <div class="flex flex-col p-4 lg:flex-row">
      <PlantDetailCard :plant="plant" />
      <PlantTimeline :items="plant.timelineItems" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue"
import PlantDetailCard from "@/components/PlantDetail/PlantDetailCard.vue"
import PlantTimeline from "@/components/PlantDetail/PlantTimeline.vue"
import plantData from "@/plant.json"

const plant = reactive({
  ...plantData,
  startedOn: plantData.startedOn && new Date(plantData.startedOn),
  vegStartedOn: plantData.vegStartedOn && new Date(plantData.vegStartedOn),
  flowerStartedOn:
    plantData.flowerStartedOn && new Date(plantData.flowerStartedOn),
  harvestedOn: plantData.harvestedOn && new Date(plantData.harvestedOn),
  cureStartedOn: plantData.cureStartedOn && new Date(plantData.cureStartedOn),
})

// Expose the reactive data to the global window object after the component is mounted
onMounted(() => {
  window.vueApp = { plant }
})
</script>
