<script setup lang="ts">
import headerNav from '../src/views/components/headerNav.vue'
import footerNav from '../src/views/components/footerNav.vue'
import scrollIndicator from '../src/views/components/scrollIndicator.vue'
import heroSection from '../src/views/hero/heroSection.vue'
import myWorkSection from '../src/views/myWork/myWorkSection.vue'
import contactSection from '../src/views/contact/contactSection.vue'
</script>

<template>
  <headerNav></headerNav>
  <scrollIndicator></scrollIndicator>
  <heroSection></heroSection>
  <myWorkSection></myWorkSection>
  <contactSection></contactSection>
  <footerNav></footerNav>
</template>

<style scoped></style>
