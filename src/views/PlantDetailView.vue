<template>
  <div class="py-6 mb-10 sm:px-6 lg:px-8">
    <div class="flex flex-col p-4 lg:flex-row">
      <PlantDetailCard />
      <PlantTimeline />
    </div>
  </div>
</template>

<script setup>
import PlantDetailCard from "@/components/PlantDetail/PlantDetailCard.vue"
import PlantTimeline from "@/components/PlantDetail/PlantTimeline.vue"
</script>
