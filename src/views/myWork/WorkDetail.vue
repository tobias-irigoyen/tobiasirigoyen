<template>
  <section class="container">
    <h2 class="text-4xl">{{ t(work?.title) }}</h2>
    <p>{{ t(work?.description ?? '') }}</p>
    <ul>
      <li v-for="skill in work?.skills" :key="skill">{{ t(skill) }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import workData from '@/assets/works.json'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const route = useRoute()

const slug = computed(() => {
  const s = route.params.slug
  return Array.isArray(s) ? s[0] : String(s ?? '')
})

const worksArray =
  Array.isArray(workData) && Array.isArray(workData[0]) ? workData.flat() : workData

const work = computed(() => worksArray.find((w: any) => String(w.slug) === slug.value)!)
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 300px);
}
</style>
