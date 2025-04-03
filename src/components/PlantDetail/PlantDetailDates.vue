<template>
  <div class="mt-7">
    <dl class="text-white divide-y divide-gray-700">
      <PlantDetailDateItem
        stage="seedling"
        :plant-stage="currentStage"
        :date="dates.startedOn"
      />
      <PlantDetailDateItem
        v-if="dates.vegStartedOn"
        :date="dates.vegStartedOn"
        stage="veg"
        :plant-stage="currentStage"
      />
      <PlantDetailDateItem
        v-if="dates.flowerStartedOn"
        :date="dates.flowerStartedOn"
        stage="flower"
        :plant-stage="currentStage"
      />
      <PlantDetailDateItem
        v-if="dates.harvestedOn"
        :date="dates.harvestedOn"
        stage="harvested"
        :plant-stage="currentStage"
      />
      <PlantDetailDateItem
        v-if="dates.cureStartedOn"
        :date="dates.cureStartedOn"
        stage="cure"
        :plant-stage="currentStage"
      />
    </dl>
  </div>
</template>

<script setup>
import PlantDetailDateItem from "./PlantDetailDateItem.vue"

defineProps({
  dates: {
    type: Object,
    required: true,
  },
  currentStage: {
    type: String,
    required: true,
  },
})
</script>
