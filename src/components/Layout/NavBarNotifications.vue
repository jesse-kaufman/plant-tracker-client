<template>
  <div class="flex items-center ml-4 md:ml-6">
    <button
      type="button"
      class="relative p-1 w-8 h-8 text-gray-400 bg-gray-800 rounded-full opacity-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span class="absolute -inset-1.5"></span>
      <span class="sr-only">View notifications</span>
      <bellIcon />
    </button>
  </div>
</template>

<script setup>
import bellIcon from "@/assets/icons/bell.svg"
</script>
