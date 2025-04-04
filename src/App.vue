<template>
  <NavBar />
  <main>
    <router-view :key="$route.fullPath"></router-view>
  </main>
</template>

<script setup>
import NavBar from "@/components/Layout/NavBar.vue"
</script>
