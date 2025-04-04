<template>
  <div :id="`tooltip-${id}`" role="tooltip" class="tooltip">
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
