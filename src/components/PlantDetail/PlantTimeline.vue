<template>
  <div class="ml-10 w-full lg:w-1/3">
    <ol class="relative pt-6 border-gray-700 lg:pt-0 lg:mt-4 border-s">
      <PlantTimelineItem
        v-for="item in items"
        :key="item.id"
        :date="item.date"
        :title="item.title"
      >
        {{ item.details }}
      </PlantTimelineItem>
    </ol>
  </div>
</template>

<script setup>
import PlantTimelineItem from "./PlantTimelineItem.vue"

defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>
