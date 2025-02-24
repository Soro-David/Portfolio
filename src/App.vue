<template>
  <CompMenu />

  <RouterView />

  <PiedPage />
</template>

<script setup>
import { RouterView } from "vue-router";
import CompMenu from "./components/CompMenu.vue";
import PiedPage from "./components/PiedPage.vue";
</script>

<style></style>
