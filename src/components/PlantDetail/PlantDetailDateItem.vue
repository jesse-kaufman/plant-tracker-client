<template>
  <div class="flex flex-col py-3">
    <dt class="mb-1 text-gray-400 md:text-lg">{{ title }}</dt>
    <dd class="text-lg font-semibold">
      {{
        date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </dd>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  date: { type: Date, required: true },
})
</script>
