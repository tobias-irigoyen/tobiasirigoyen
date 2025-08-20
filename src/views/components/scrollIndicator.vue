<template>
  <div class="scroll-indicator">
    <a
      v-for="(section, index) in sections"
      :key="section.id"
      class="square"
      :class="{ active: index === activeSection }"
      href="javascript:void(0)"
      @click.prevent="scrollToSection(section.id)"
    ></a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Lista de secciones (asegúrate que cada sección tenga un id único en el HTML)
const sections = ref([{ id: 'hero-section' }, { id: 'my-work' }, { id: 'contact' }])

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
    { threshold: 0.5 }, // 50% visible
  )

  sections.value.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', `#${id}`)
  }
}
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
  width: 1rem;
  height: 1rem;
  border: 1px solid #fff;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.square.active,
.square:hover {
  background-color: #fff;
  transform: scale(1.1);
}
@media all and (max-width: 576px) {
  .scroll-indicator {
    display: none;
  }
}
</style>
