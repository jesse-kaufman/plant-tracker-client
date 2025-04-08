<template>
  <div :class="['plant-card', 'plant-detail-card', stage]">
    <PlantCardHeader
      :stage="plant.stage"
      :name="plant.name"
      :stage-started-on="stageStartedOn"
      :loading="loading"
    />

    <PlantProgressBar v-if="!loading" :current-stage="plant.stage" />
    <div v-else class="animate-pulse">
      <div
        class="h-1.25 bg-gray-300/5 rounded-full w-auto mt-9 mb-12 mx-6"
      ></div>
    </div>

    <PlantDetailDates
      v-if="!loading"
      :current-stage="plant.stage"
      :dates="dates"
    />
    <div v-else class="animate-pulse mt-6 space-y-3">
      <div class="h-2.5 bg-gray-300/10 rounded-full w-20 mb-2"></div>
      <div class="w-50 h-4 bg-gray-300/20 rounded-md mb-8 ml-0.5"></div>
      <div class="h-1.5 bg-gray-300/5 rounded-full w-15 mb-1.5"></div>
      <div class="w-40 h-3 bg-gray-300/10 rounded mb-7 ml-0.5"></div>
      <div class="h-1.5 bg-gray-300/5 rounded-full w-15 mb-1.5"></div>
      <div class="w-40 h-3 bg-gray-300/10 rounded ml-0.5"></div>
    </div>

    <div v-if="!loading" class="mt-7">
      <h3 class="mb-1 text-xl font-bold">Notes:</h3>
      <div>{{ plant.notes }}</div>
    </div>
    <div v-else class="animate-pulse space-y-3 mt-10">
      <div class="w-20 h-6 bg-gray-300/15 rounded-md"></div>
      <div class="w-full">
        <div class="h-2 bg-gray-300/15 rounded-full max-w-3/4 mb-2.5"></div>
        <div class="h-2 bg-gray-300/15 rounded-full mb-2.5 max-w-4/5"></div>
        <div class="h-2 bg-gray-300/15 rounded-full max-w-4/5 mb-2.5"></div>
        <div class="h-2 bg-gray-300/15 rounded-full max-w-7/12 mb-2.5"></div>
        <div class="h-2 bg-gray-300/15 rounded-full max-w-[360px]"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, toRefs, watch } from "vue"
import PlantDetailDates from "./PlantDetailDates.vue"
import PlantCardHeader from "@/components/Plant/PlantCardHeader.vue"
import PlantProgressBar from "@/components/Plant/PlantProgressBar.vue"
import { getStageStartDate, getStageDates } from "@/utils/plantUtils.js"

const props = defineProps({
  plant: {
    type: Object,
    default: {},
  },
  loading: Boolean,
})

const stage = computed(() =>
  props.plant.status === "archived" ? "archived" : props.plant.stage
)

// Extract stage dates from plant and keep them reactive.
const dates = reactive(props.plant ? getStageDates(toRefs(props.plant)) : {})

// Extract current stage start date as computed property.
const stageStartedOn = computed(() => {
  console.log("the plant", props.plant)

  console.log("dates", dates)
  return props.plant.stage ? getStageStartDate(props.plant.stage, dates) : null
})

watch(
  () => props.plant,
  (newPlant) => {
    if (newPlant) {
      // Update dates when plant changes
      Object.assign(dates, getStageDates(toRefs(newPlant)))
    } else {
      // Reset dates if plant is null or undefined
      Object.assign(dates, {})
    }
  },
  { immediate: true }
)
</script>
