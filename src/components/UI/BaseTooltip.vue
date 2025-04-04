<template>
  <div
    :id="`tooltip-${id}`"
    role="tooltip"
    class="inline-block absolute invisible z-10 px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg opacity-0 transition-opacity duration-300 shadow-xs"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>
