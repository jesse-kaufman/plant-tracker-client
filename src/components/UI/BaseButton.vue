<template>
  <router-link :to="to" class="button">
    <slot />
    <BaseIcon icon="arrow-right" />
  </router-link>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue"
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
