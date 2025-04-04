<template>
  <li :class="`plant-progress-bar-item plant-progress-bar-item-${state}`">
    <div
      :data-tooltip-target="`tooltip-${id}`"
      data-tooltip-placement="bottom"
      class="relative plant-progress-bar-item-icon group"
    >
      <BaseIcon :icon="id" />
      <BaseTooltip :id="id">{{ tooltip }}</BaseTooltip>
    </div>
  </li>
</template>

<script setup>
import { computed } from "vue"
import BaseIcon from "@/components/UI/BaseIcon.vue"
import BaseTooltip from "@/components/UI/BaseTooltip.vue"
import { getStageCompleteness } from "@/utils/plantUtils.js"

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

const state = computed(() => getStageCompleteness(props.id, props.currentStage))
</script>
