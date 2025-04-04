<template>
  <div
    v-if="show"
    class="flex flex-col py-3 text-xs opacity-20 first:text-base first:opacity-100"
  >
    <dt class="text-[0.7em] leading-tight text-gray-400 uppercase">
      {{ getStageStartTitle(props.stage) }}
    </dt>
    <dd class="pl-1 text-[1.1em] font-semibold">
      {{
        date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </dd>
  </div>
</template>

<script setup>
import { computed } from "vue"
import {
  getStageCompleteness,
  getStageStartTitle,
} from "@/services/plantServices"

const props = defineProps({
  date: { type: Date, required: true },
  stage: { type: String, required: true },
  plantStage: { type: String, default: "" },
})

// Set show to true if completeness is "complete" or "current" for stage being rendered.
const show = computed(() =>
  ["complete", "current"].includes(
    getStageCompleteness(props.stage, props.plantStage)
  )
)
</script>
