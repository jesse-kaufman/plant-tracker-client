<template>
  <ol class="flex items-center mb-4 w-full lg:mt-4 sm:ml-2 sm:pr-2 sm:mb-5">
    <PlantProgressBarItem
      id="source-seed"
      :stage="stage"
      tooltip="Sourced from seed"
    />

    <PlantProgressBarItem
      id="seedling"
      :current-stage="stage"
      tooltip="Seedling stage"
    />

    <PlantProgressBarItem id="veg" :stage="stage" tooltip="Vegetative stage" />

    <PlantProgressBarItem id="flower" :stage="stage" tooltip="Flower stage" />

    <PlantProgressBarItem id="harvested" :stage="stage" tooltip="Harvested" />

    <PlantProgressBarItem id="cure" :stage="stage" tooltip="In storage" />
  </ol>
</template>

<script setup>
import PlantProgressBarItem from "./PlantProgressBarItem.vue"

defineProps({
  stage: {
    type: String,
    required: true,
  },
})
</script>
