<template>
  <div class="min-h-full">
    <nav class="shadow-xl bg-green-800/80">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <Home />
            <NavBarItem name="Plants" url="/" />
          </div>
          <Notifications />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import NavBarItem from "./NavBarItem.vue"
import Home from "./Home.vue"
import Notifications from "./Notifications.vue"
</script>
