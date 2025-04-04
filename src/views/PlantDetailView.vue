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
import { useRoute } from "vue-router"
import PlantDetailCard from "@/components/PlantDetail/PlantDetailCard.vue"
import PlantTimeline from "@/components/PlantDetail/PlantTimeline.vue"
import plants from "@/plants.json"
import { convertStageDates } from "@/utils/plantUtils"

const route = useRoute()

// Get plant matching id in /plant/:id route.
const plantData = plants.find((item) => item.id.toString() === route.params.id)

// Convert date strings to date objects.
const plant = reactive(convertStageDates(plantData))

// XXX: Remove the onMounted below when switching to API backend.

// Expose the reactive data to the global window object after the component is mounted
onMounted(() => {
  window.vueApp = { plant }
})
</script>
