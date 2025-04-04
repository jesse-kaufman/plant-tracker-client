<template>
  <bellIcon v-if="icon === 'bell'" />
  <flowerIcon v-if="icon === 'flower'" />
  <harvestedIcon v-if="icon === 'harvested'" />
  <homeIcon v-if="icon === 'home'" />
  <seedlingIcon v-if="icon === 'seedling'" />
  <sourceSeedIcon v-if="icon === 'source-seed'" />
  <storageIcon v-if="icon === 'cure' || icon === 'storage'" />
  <vegIcon v-if="icon === 'veg'" />
  <archivedIcon v-if="icon === 'archived'" />
</template>

<script setup>
import bellIcon from "@/assets/icons/bell.svg"
import flowerIcon from "@/assets/icons/flower.svg"
import harvestedIcon from "@/assets/icons/harvested.svg"
import homeIcon from "@/assets/icons/home.svg"
import seedlingIcon from "@/assets/icons/seedling.svg"
import sourceSeedIcon from "@/assets/icons/source-seed.svg"
import storageIcon from "@/assets/icons/storage.svg"
import vegIcon from "@/assets/icons/veg.svg"
import archivedIcon from "@/assets/icons/archived.svg"

defineProps({
  icon: {
    type: String,
    required: true,
  },
})
</script>
