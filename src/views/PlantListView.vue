<template>
  <PlantListSection title="Active plants">
    <PlantListItem
      v-for="plant in activePlants"
      :key="plant.id"
      :plant="plant"
    />
  </PlantListSection>

  <PlantListSection title="Archived plants">
    <PlantListItem
      v-for="plant in archivedPlants"
      :key="plant.id"
      :plant="plant"
      :archived="true"
    />
  </PlantListSection>
</template>

<script setup>
import { computed, reactive } from "vue"
import PlantListSection from "@/components/PlantList/PlantListSection.vue"
import PlantListItem from "@/components/PlantList/PlantListItem.vue"
import plantData from "@/plants.json"

const plants = reactive(plantData)
const activePlants = computed(() =>
  plants.filter((plant) => plant.status === "active")
)
const archivedPlants = computed(() =>
  plants.filter((plant) => plant.status === "archived")
)
</script>
