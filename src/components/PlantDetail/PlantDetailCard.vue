<template>
  <div :class="`plant-card plant-detail-card ${plant.stage}`">
    <PlantCardHeader
      :stage="plant.stage"
      :name="plant.name"
      :stage-started-on="stageStartedOn"
    />

    <PlantProgressBar :current-stage="plant.stage" />

    <PlantDetailDates :current-stage="plant.stage" :dates="dates" />

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

const props = defineProps({
  plant: {
    type: Object,
    required: true,
  },
})

// Extract stage dates from plant and keep them reactive.
const dates = reactive(getStageDates(toRefs(props.plant)))
// Extract current stage start date as computed property.
const stageStartedOn = computed(() =>
  getStageStartDate(props.plant.stage, dates)
)
</script>
