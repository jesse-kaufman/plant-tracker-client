<template>
  <li class="mb-10 ms-4">
    <div
      class="absolute w-3 h-3 bg-gray-700 rounded-full border border-gray-900 -start-1.5"
    ></div>
    <time
      class="block mb-1 text-sm leading-none text-gray-400 dark:text-gray-500"
    >
      {{ date }}
    </time>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
      {{ title }}
    </h3>
    <div v-if="$slots.default"><slot /></div>
  </li>
</template>

<script setup>
defineProps({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
