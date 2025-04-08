<template>
  <div class="py-6 mb-10 sm:px-6 lg:px-8">
    <div class="flex flex-col p-4 lg:flex-row">
      <PlantDetailCard :loading="isLoading" :plant="plant" />
      <PlantTimeline :loading="isLoading" :items="plant.timelineItems" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import PlantDetailCard from "@/components/PlantDetail/PlantDetailCard.vue"
import PlantTimeline from "@/components/PlantDetail/PlantTimeline.vue"
import { fetchPlant } from "@/services/plantService"
import { convertStageDates } from "@/utils/plantUtils"

const route = useRoute()
const plant = ref({})
const error = ref(null)
const isLoading = ref(true)
const timelineItems = ref([])

onMounted(async () => {
  // Get plant matching id in /plant/:id route.
  try {
    const plantObj = await fetchPlant(route.params.id) // Fetch plant data using the provided ID
    setTimeout(() => {
      isLoading.value = false
    }, 0) // Wait for 2 seconds (2000ms)
    plant.value = convertStageDates(plantObj)
    timelineItems.value = plant.value.timelineItems
    console.log("plant", plant.value)
  } catch (err) {
    console.error(err)
    error.value = `Failed to fetch plant data: ${err.message}` // Handle error
    console.error(error)
  }
})
</script>
