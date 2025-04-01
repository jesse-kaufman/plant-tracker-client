<template>
  <div class="flex items-baseline ml-10 space-x-4">
    <a
      href="#"
      class="px-3 py-2 text-sm font-medium text-white rounded-md bg-gray-900/30 hover:bg-gray-900/40"
      aria-current="page"
      >{{ name }}</a
    >
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: "",
    require: true,
  },
  url: {
    type: String,
    default: "",
    require: true,
  },
})
</script>
