<template>
  <div class="mt-7">
    <dl class="max-w-md text-white divide-y divide-gray-700">
      <PlantDetailDateItem
        v-if="dates.startedOn"
        title="Started on"
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
})
</script>
