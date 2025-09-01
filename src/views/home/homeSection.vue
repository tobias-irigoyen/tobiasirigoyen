<template>
  <div>
    <heroSection></heroSection>
    <scrollIndicator></scrollIndicator>
    <myWorkSection></myWorkSection>
    <contactSection></contactSection>
  </div>
</template>

<script setup lang="ts">
import heroSection from '../hero/heroSection.vue'
import myWorkSection from '../myWork/myWorkSection.vue'
import contactSection from '../contact/contactSection.vue'
import scrollIndicator from '../components/scrollIndicator.vue'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const scrollToSection = (anchor: string) => {
  const element = document.getElementById(anchor)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const handleSectionScroll = () => {
  if (route.meta?.section) {
    setTimeout(() => {
      const anchor = t(`anchors.${route.meta.section}`)
      scrollToSection(anchor)
    }, 150)
  }
}

onMounted(() => {
  handleSectionScroll()
})

watch(
  () => route.meta?.section,
  () => {
    handleSectionScroll()
  },
)
</script>
