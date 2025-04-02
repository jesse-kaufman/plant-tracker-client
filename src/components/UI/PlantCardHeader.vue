<template>
  <div class="flex items-center mb-7">
    <div
      class="inline-flex justify-center items-center p-4 mr-3 w-16 h-16 text-gray-300 rounded-full shrink-0 bg-green-800/80"
    >
      <vegIcon v-if="stage === `veg`" />
    </div>
    <div>
      <h2 class="font-bold text-5xl/10 text-white/40 font-stretch-condensed">
        {{ name }}
      </h2>
      <div class="mt-1 text-lg italic font-semibold text-white/70">
        {{ stageDuration }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  getStageDuration,
  getStageStartDate,
} from "../../services/plantServices"
import vegIcon from "@/assets/icons/veg.svg"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  stage: {
    type: String,
    required: true,
  },
  dates: {
    type: Object,
    required: true,
  },
})

const startedOn = getStageStartDate(props.stage, props.dates)
const stageDuration = getStageDuration(props.stage, startedOn)
</script>
