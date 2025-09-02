<template>
  <div class="scroll-indicator">
    <a
      v-for="(section, index) in sections"
      :key="section.key"
      class="square"
      :class="{ active: index === activeSection }"
      @click.prevent="navigateToSection(section.key)"
    >
      <span class="section-label">{{ section.title }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()
const sections = computed(() => [
  { key: 'home-section', title: t('home') },
  { key: 'work', title: t('my-work') },
  { key: 'contact', title: t('contact') },
])

const activeSection = ref(0)
let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.value.findIndex(
            (s) => s.key === entry.target.id || t(`anchors.${s.key}`) === entry.target.id,
          )
          if (index !== -1) activeSection.value = index
        }
      })
    },
    { threshold: 0.5 },
  )

  sections.value.forEach((section) => {
    const el = document.getElementById(t(`anchors.${section.key}`))
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const getLocalizedPath = (sectionKey: string) => {
  if (sectionKey === 'work') return locale.value === 'en' ? 'work' : 'proyectos'
  if (sectionKey === 'contact') return locale.value === 'en' ? 'contact' : 'contacto'
  return sectionKey
}

const scrollToSection = (anchor: string) => {
  const element = document.getElementById(anchor)
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const navigateToSection = async (sectionKey: string) => {
  if (sectionKey === 'home-section') {
    const anchor = t(`anchors.${sectionKey}`)
    scrollToSection(anchor)
    return
  }

  const localizedPath = getLocalizedPath(sectionKey)
  await router.push(`/${locale.value}/${localizedPath}`)
  setTimeout(() => {
    const anchor = t(`anchors.${sectionKey}`)
    scrollToSection(anchor)
  }, 50)
}
</script>

<style lang="scss" scoped>
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
  &:hover {
    cursor: pointer;
  }
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
