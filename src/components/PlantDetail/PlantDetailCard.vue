<template>
  <div :class="['plant-card', 'plant-detail-card', stage]">
    <PlantCardHeader
      :stage="plant.stage"
      :name="plant.name"
      :stage-started-on="stageStartedOn"
    />

    <PlantProgressBar :current-stage="plant.stage" />

    <PlantDetailDates :current-stage="plant.stage" :dates="dates" />

    <div class="mt-7">
      <h3 class="mb-1 text-xl font-bold">Notes:</h3>
      <div>{{ plant.notes }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, toRefs } from "vue"
import PlantDetailDates from "./PlantDetailDates.vue"
import PlantCardHeader from "@/components/Plant/PlantCardHeader.vue"
import PlantProgressBar from "@/components/Plant/PlantProgressBar.vue"
import { getStageStartDate, getStageDates } from "@/utils/plantUtils.js"

const props = defineProps({
  plant: {
    type: Object,
    required: true,
  },
})

const stage = computed(() =>
  props.plant.status === "archived" ? "archived" : props.plant.stage
)
// Extract stage dates from plant and keep them reactive.
const dates = reactive(getStageDates(toRefs(props.plant)))
// Extract current stage start date as computed property.
const stageStartedOn = computed(() =>
  getStageStartDate(props.plant.stage, dates)
)
</script>
