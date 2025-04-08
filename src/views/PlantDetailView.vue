<template>
  <div class="py-6 mb-10 sm:px-6 lg:px-8">
    <div class="flex flex-col p-4 lg:flex-row">
      <div v-if="plant">
        <PlantDetailCard :plant="plant" />
        <PlantTimeline :items="plant.timelineItems" />
      </div>
      <div v-else>
        <p>Loading plant data...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import PlantDetailCard from "@/components/PlantDetail/PlantDetailCard.vue"
import PlantTimeline from "@/components/PlantDetail/PlantTimeline.vue"
import { fetchPlant } from "@/services/plantService"

const route = useRoute()
const plant = ref(null)
const error = ref(null)

onMounted(async () => {
  // Get plant matching id in /plant/:id route.
  try {
    console.log("trying")
    plant.value = await fetchPlant(route.params.id) // Fetch plant data using the provided ID
    console.log("plant", plant.value)
  } catch (err) {
    console.error(err)
    error.value = `Failed to fetch plant data: ${err.message}` // Handle error
    console.error(error)
  }
})
</script>
