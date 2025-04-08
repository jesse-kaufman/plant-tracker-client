<template>
  <div class="ml-10 lg:w-1/3">
    <ol
      v-if="!loading"
      class="relative pt-6 border-gray-700 lg:pt-0 lg:mt-4 border-s"
    >
      <PlantTimelineItem
        v-for="item in items"
        :key="item.id"
        :date="item.date"
        :title="item.title"
      >
        {{ item.details }}
      </PlantTimelineItem>
    </ol>
    <ol
      v-else
      class="animate-pulse relative pt-6 border-gray-700 lg:pt-0 lg:mt-4 border-s"
    >
      <li class="mb-10 ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-700 rounded-full border border-gray-900 -start-1.5"
        ></div>
        <div class="space-y-3 pb-6">
          <div class="h-3 bg-gray-300/5 rounded-sm w-1/4"></div>
          <div class="h-5 bg-gray-300/10 rounded-sm w-1/2"></div>
        </div>
      </li>
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
  loading: Boolean,
})
</script>
