<template>
  <div :class="`plant-card plant-detail-card ${plant.stage}`">
    <PlantCardHeader
      :stage="plant.stage"
      :name="plant.name"
      :dates="dates"
      :time-in-stage="plant.timeInStage"
    />

    <PlantProgressBar :stage="plant.stage" />

    <PlantDetailDates :dates="dates" />

    <div class="mt-7">
      <h2 class="mb-1 text-xl font-bold">Notes:</h2>
      <div>{{ plant.notes }}</div>
    </div>
  </div>
</template>

<script setup>
import PlantCardHeader from "../UI/PlantCardHeader.vue"
import PlantProgressBar from "../UI/PlantProgressBar.vue"
import PlantDetailDates from "./PlantDetailDates.vue"

const plant = {
  id: 1,
  name: "Heirloom tomatoes #1",
  stage: "veg",
  startedOn: new Date("2023-01-01T00:00:00"),
  vegStartedOn: new Date("2023-01-01T00:00:00"),
  timeInStage: "4 days in vegetative state",
  notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}

const { startedOn, vegStartedOn } = plant
const dates = { startedOn, vegStartedOn }
</script>
