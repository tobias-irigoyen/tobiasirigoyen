<template>
  <div class="scroll-indicator">
    <a
      v-for="(section, index) in sections"
      :key="section.id"
      class="square"
      :class="{ active: index === activeSection }"
      :href="'#' + section.id"
    >
      <span class="section-label">{{ section.title }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()

const sections = computed(() => [
  { id: t('anchors.home-section'), title: t('home') },
  { id: t('anchors.work'), title: t('my-work') },
  { id: t('anchors.contact'), title: t('contact') },
])

const activeSection = ref(0)
let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.value.findIndex((s) => s.id === entry.target.id)
          if (index !== -1) activeSection.value = index
        }
      })
    },
    { threshold: 0.5 },
  )

  sections.value.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.scroll-indicator {
  position: fixed;
  top: 50%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.square {
  position: relative;
  width: 1rem;
  height: 1rem;
  border: 1px solid #fff;
  margin-bottom: 0.5rem;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.square.active,
.square:hover {
  background-color: #fff;
  transform: scale(1.1);
}

.section-label {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 0.5rem;
  white-space: nowrap;
  color: #fff;
  font-size: 0.875rem;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease,
    transform 0.3s ease;
  transform: translateY(-50%) translateX(10px);
}

.square:hover .section-label {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(-10px);
}

@media all and (max-width: 1230px) {
  .scroll-indicator {
    display: none;
  }
}
@media all and (min-width: 1230px) {
  .scroll-indicator {
    display: flex;
  }
}
</style>
