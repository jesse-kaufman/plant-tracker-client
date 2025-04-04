<template>
  <header v-if="$slots.default" class="plant-list-section-header">
    <h1 class="text-2xl">{{ title }}</h1>
  </header>

  <div class="py-6 mb-10 sm:px-6 lg:px-8">
    <div class="plant-list">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
