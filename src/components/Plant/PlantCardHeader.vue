<template>
  <div class="plant-card-header">
    <div v-if="!loading" class="plant-stage-icon">
      <BaseIcon :icon="stage" />
    </div>
    <div v-else class="plant-stage-icon animate-pulse"></div>
    <div class="grow">
      <div v-if="!loading">
        <h2>{{ name }}</h2>

        <div class="stage-duration">
          {{ stageDuration }}
        </div>
      </div>
      <div v-else class="animate-pulse space-y-3">
        <div class="w-3/4 h-9 bg-gray-300/15 rounded-md"></div>
        <div class="w-1/2 h-5 bg-gray-300/20 rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import BaseIcon from "@/components/UI/BaseIcon.vue"
import { getStageDuration } from "@/utils/plantUtils"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  stage: {
    type: String,
    required: true,
  },
  stageStartedOn: {
    type: Date,
    required: true,
  },
  loading: Boolean,
})

const stageDuration = computed(() =>
  getStageDuration(props.stage, props.stageStartedOn)
)
</script>
