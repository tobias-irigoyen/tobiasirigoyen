<template>
  <section class="container">
    <h2 class="section-title text-center">{{ t(work?.title) }}</h2>
    <h3 class="text-3xl mb-8">{{ t('description') }}</h3>
    <p class="text-[20px] mb-8 whitespace-pre-line">{{ t(work?.description ?? '') }}</p>
    <h3 class="text-3xl mb-8">{{ t('technologies') }}</h3>
    <ul class="skills">
      <li class="text-[20px]" v-for="skill in work?.skills" :key="skill">{{ t(skill) }}</li>
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
.skills {
  margin-left: 1rem;
  li {
    list-style: disc;
  }
}
</style>
