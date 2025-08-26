<script setup lang="ts">
import headerNav from '../src/views/components/headerNav.vue'
import footerNav from '../src/views/components/footerNav.vue'
</script>

<template>
  <headerNav></headerNav>
  <router-view />
  <footerNav></footerNav>
</template>

<style scoped></style>
