<template>
  <div class="mt-4 border-zinc-600/50 border-b-1">
    <dl class="text-white divide-y divide-zinc-600/50">
      <PlantDetailDateItem
        v-if="dates.cureStartedOn"
        :date="dates.cureStartedOn"
        stage="cure"
        :plant-stage="currentStage"
      />
      <PlantDetailDateItem
        v-if="dates.harvestedOn"
        :date="dates.harvestedOn"
        stage="harvested"
        :plant-stage="currentStage"
      />
      <PlantDetailDateItem
        v-if="dates.flowerStartedOn"
        :date="dates.flowerStartedOn"
        stage="flower"
        :plant-stage="currentStage"
      />
      <PlantDetailDateItem
        v-if="dates.vegStartedOn"
        :date="dates.vegStartedOn"
        stage="veg"
        :plant-stage="currentStage"
      />
      <PlantDetailDateItem
        stage="seedling"
        :plant-stage="currentStage"
        :date="dates.startedOn"
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
