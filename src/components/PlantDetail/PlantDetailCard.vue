<template>
  <div :class="`plant-card plant-detail-card ${plant.stage}`">
    <PlantCardHeader
      :stage="plant.stage"
      :name="plant.name"
      :stage-started-on="stageStartedOn"
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
import { computed, onMounted, reactive, toRefs } from "vue"
import PlantDetailDates from "./PlantDetailDates.vue"
import PlantCardHeader from "@/components/UI/PlantCardHeader.vue"
import PlantProgressBar from "@/components/UI/PlantProgressBar.vue"
import { getStageStartDate, getStageDates } from "@/services/plantServices.js"

const plant = reactive({
  id: 1,
  name: "Heirloom tomatoes #1",
  stage: "veg",
  startedOn: new Date("2023-01-01T00:00:00"),
  vegStartedOn: new Date("2023-01-05T00:00:00"),
  flowerStartedOn: new Date("2023-01-28T00:00:00"),
  harvestedOn: new Date("2023-03-31T00:00:00"),
  notes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
})

const dates = reactive(getStageDates(toRefs(plant)))
const stageStartedOn = computed(() => getStageStartDate(plant.stage, dates))

// Expose the reactive data to the global window object after the component is mounted
onMounted(() => {
  window.vueApp = { plant }
})
</script>
