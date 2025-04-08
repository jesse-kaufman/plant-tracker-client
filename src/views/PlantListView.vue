<template>
  <PlantListSection v-if="activePlants" title="Active plants">
    <PlantListItem
      v-for="plant in activePlants"
      :key="plant.id"
      :plant="plant"
    />
  </PlantListSection>

  <PlantListSection v-if="archivedPlants" title="Archived plants">
    <PlantListItem
      v-for="plant in archivedPlants"
      :key="plant.id"
      :plant="plant"
      :archived="true"
    />
  </PlantListSection>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import PlantListSection from "@/components/PlantList/PlantListSection.vue"
import PlantListItem from "@/components/PlantList/PlantListItem.vue"
import { fetchPlants } from "@/services/plantService"

const plants = ref(null)
const error = ref(null)

const activePlants = computed(
  () =>
    plants.value && plants.value.filter((plant) => plant.status === "active")
)
const archivedPlants = computed(
  () =>
    plants.value && plants.value.filter((plant) => plant.status === "archived")
)

onMounted(async () => {
  // Get plant matching id in /plant/:id route.
  try {
    console.log("trying")
    plants.value = await fetchPlants() // Fetch plant data using the provided ID

    console.log("plant", plants.value)
  } catch (err) {
    console.error(err)
    error.value = `Failed to fetch plant data: ${err.message}` // Handle error
    console.error(error)
  }
})
</script>
