<template>
  <a
    :href="href"
    class="inline-flex items-center px-6 py-1 mt-1 ml-auto text-white bg-green-700 rounded-full shadow-lg hover:bg-green-800"
  >
    <slot />
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="ml-2 w-4 h-4"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
})
</script>
