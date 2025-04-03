<template>
  <div class="flex items-center mb-7">
    <div class="plant-stage-icon">
      <BaseIcon :icon="stage" />
    </div>
    <div>
      <h2
        class="font-bold text-4xl/8 sm:text-5xl/9 text-white/40 font-stretch-condensed"
      >
        {{ name }}
      </h2>
      <div
        class="mt-1 italic font-semibold leading-tight sm:mt-2 text-md sm:text-lg text-white/70"
      >
        {{ stageDuration }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import BaseIcon from "./BaseIcon.vue"
import { getStageDuration } from "@/services/plantServices"

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
