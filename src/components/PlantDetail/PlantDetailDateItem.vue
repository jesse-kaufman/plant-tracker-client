<template>
  <div v-if="show" class="opacity-30 flex flex-col py-3 last:opacity-100">
    <dt class="mb-1 text-gray-400 md:text-lg">{{ title }}</dt>
    <dd class="text-lg font-semibold">
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
import { getStageCompleteness } from "@/services/plantServices"

const props = defineProps({
  title: { type: String, required: true },
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
