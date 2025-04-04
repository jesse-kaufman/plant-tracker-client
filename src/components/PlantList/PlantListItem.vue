<template>
  <div class="p-4 w-1/1 md:w-1/2 lg:w-1/3">
    <div :class="['plant-card', stage]">
      <PlantCardHeader
        :stage="stage"
        :name="currentPlant.name"
        :stage-started-on="stageStartedOn"
      />

      <div class="flex flex-row mt-3 ml-2">
        <p class="text-sm leading-tight">
          <strong v-if="plant.status !== 'archived'">Stage started on:</strong>
          <strong v-if="plant.status === 'archived'">Archived on:</strong>
          <br />
          {{
            stageStartedOn.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </p>

        <BaseButton :to="`/plants/${plant.id}`">View</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import PlantCardHeader from "@/components/UI/PlantCardHeader.vue"
import BaseButton from "@/components/UI/BaseButton.vue"
import {
  getStageStartDate,
  getStageDates,
  convertStageDates,
} from "@/services/plantServices.js"

const props = defineProps({
  plant: {
    type: Object,
    required: true,
  },
  archived: {
    type: Boolean,
    default: false,
  },
})

// Set stage to 'archived' if archived, otherwise use plant.stage.
const stage = props.plant.status === "archived" ? "archived" : props.plant.stage
// Convert date strings to date objects.
const currentPlant = convertStageDates(props.plant)
// Extract stage dates from plant.
const dates = getStageDates(currentPlant)
// Extract current stage start date.
const stageStartedOn = getStageStartDate(props.plant.stage, dates)
</script>
