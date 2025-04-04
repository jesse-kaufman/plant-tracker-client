<template>
  <ol class="flex items-center mb-4 w-full lg:mt-4 sm:ml-2 sm:pr-2 sm:mb-5">
    <PlantProgressBarItem
      id="source-seed"
      :current-stage="currentStage"
      tooltip="Sourced from seed"
    />

    <PlantProgressBarItem
      id="seedling"
      :current-stage="currentStage"
      tooltip="Seedling stage"
    />

    <PlantProgressBarItem
      id="veg"
      :current-stage="currentStage"
      tooltip="Vegetative stage"
    />

    <PlantProgressBarItem
      id="flower"
      :current-stage="currentStage"
      tooltip="Flower stage"
    />

    <PlantProgressBarItem
      id="harvested"
      :current-stage="currentStage"
      tooltip="Harvested"
    />

    <PlantProgressBarItem
      id="cure"
      :current-stage="currentStage"
      tooltip="In storage"
      class="last"
    />
  </ol>
</template>

<script setup>
import PlantProgressBarItem from "./PlantProgressBarItem.vue"

defineProps({
  currentStage: {
    type: String,
    required: true,
  },
})
</script>
