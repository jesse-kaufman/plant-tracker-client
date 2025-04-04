<template>
  <div class="py-6 mb-10 sm:px-6 lg:px-8">
    <div class="flex flex-col p-4 lg:flex-row">
      <PlantDetailCard :plant="plant" />
      <PlantTimeline :items="plant.timelineItems" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { useRoute } from "vue-router"
import PlantDetailCard from "@/components/PlantDetail/PlantDetailCard.vue"
import PlantTimeline from "@/components/PlantDetail/PlantTimeline.vue"
import { fetchPlant } from "@/services/plantService"

const route = useRoute()

// Get plant matching id in /plant/:id route.
const plant = reactive(fetchPlant(route.params.id))
</script>
