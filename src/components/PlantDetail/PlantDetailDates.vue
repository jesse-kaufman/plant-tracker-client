<template>
  <div class="mt-7">
    <dl class="max-w-md text-white divide-y divide-gray-700">
      <PlantDetailDateItem
        title="Started on"
        stage="seedling"
        :plant-stage="currentStage"
        :date="dates.startedOn"
      />
      <PlantDetailDateItem
        v-if="dates.vegStartedOn"
        title="Veg started on"
        :date="dates.vegStartedOn"
        stage="veg"
        :plant-stage="currentStage"
      />
      <PlantDetailDateItem
        v-if="dates.flowerStartedOn"
        title="Flower started on"
        :date="dates.vegStartedOn"
        stage="flower"
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
