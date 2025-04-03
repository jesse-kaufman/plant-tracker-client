<template>
  <li :class="`plant-progress-bar-item plant-progress-bar-item-${state}`">
    <div
      :data-tooltip-target="`tooltip-${id}`"
      data-tooltip-placement="bottom"
      class="plant-progress-bar-item-icon"
    >
      <BaseIcon :icon="id" />
    </div>
    <BaseTooltip :id="id">{{ tooltip }}</BaseTooltip>
  </li>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue"
import BaseTooltip from "./BaseTooltip.vue"
import { getStageCompleteness } from "@/services/plantServices.js"

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  tooltip: {
    type: String,
    required: true,
  },
  currentStage: {
    type: String,
    default: "current",
  },
})

const state = getStageCompleteness(props.currentStage, props.id)
</script>
