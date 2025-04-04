<template>
  <div class="plant-card-header">
    <div class="plant-stage-icon">
      <BaseIcon :icon="stage" />
    </div>
    <div>
      <h2>{{ name }}</h2>
      <div class="stage-duration">
        {{ stageDuration }}
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
})

const stageDuration = computed(() =>
  getStageDuration(props.stage, props.stageStartedOn)
)
</script>
