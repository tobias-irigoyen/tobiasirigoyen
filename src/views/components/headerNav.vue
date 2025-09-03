<template>
  <nav class="flex justify-between items-center pt-8 pb-8 container">
    <button class="hover:cursor-pointer button-logo" @click="scrollToTop">
      <h1 class="invisible sr-only">Tobías Irigoyen</h1>
      <img src="../../assets/logo.svg" class="h-8 logo" />
    </button>
    <button
      @click="toggleMobileNav"
      class="mobile-toggle"
      :class="{ active: isMobileNavOpen }"
      aria-label="Toggle navigation"
    >
      <span :class="{ active: isMobileNavOpen }"></span>
      <span :class="{ active: isMobileNavOpen }"></span>
      <span :class="{ active: isMobileNavOpen }"></span>
    </button>

    <ul class="nav-menu" :class="{ active: isMobileNavOpen }">
      <li>
        <a
          class="text-2xl ml-16 hover:underline hover:cursor-pointer"
          @click="navigateToSection('work')"
        >
          {{ t('my-work') }}
        </a>
      </li>
      <li>
        <a
          class="text-2xl ml-16 hover:underline hover:cursor-pointer"
          @click="navigateToSection('contact')"
        >
          {{ t('contact') }}
        </a>
      </li>
      <li>
        <button
          @click="downloadResume"
          class="border border-white py-2 px-3 ml-16 bg-transparent flex justify-center items-center download-cv-button !text-white text-2xl hover:bg-white hover:!text-black hover:cursor-pointer w-[165px]"
        >
          {{ t('my-resume') }} <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-download ml-2 download-icon" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg>
        </button>
      </li>
      <li class="ml-16 language-selector-list-item"><language-selector></language-selector></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import languageSelector from './languageSelector.vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const router = useRouter()
const route = useRoute()
const isMobileNavOpen = ref(false)

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
}

watch(isMobileNavOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const handleResize = () => {
  if (window.innerWidth > 576) {
    isMobileNavOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  // Hacer scroll automático si la ruta tiene metadata de sección
  if (route.meta?.section) {
    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      const anchor = t(`anchors.${route.meta.section}`)
      scrollToSection(anchor)
    }, 100)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})

const getLocalizedPath = (sectionKey: string): string => {
  if (sectionKey === 'work') {
    return locale.value === 'en' ? 'work' : 'proyectos'
  }
  if (sectionKey === 'contact') {
    return locale.value === 'en' ? 'contact' : 'contacto'
  }
  return sectionKey
}

const navigateToSection = async (sectionKey: string) => {
  closeMobileNav()

  const localizedPath = getLocalizedPath(sectionKey)

  await router.push(`/${locale.value}/${localizedPath}`)

  setTimeout(() => {
    const anchor = t(`anchors.${sectionKey}`)
    scrollToSection(anchor)
  }, 50)
}

const scrollToSection = (anchor: string) => {
  const element = document.getElementById(anchor)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Tobías Irigoyen - Resume.pdf'
  link.download = 'Tobías Irigoyen - Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  closeMobileNav()
}

const scrollToTop = () => {
  if (route.name !== 'Home') {
    router.push(`/${locale.value}/`)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: sticky;
  top: 0;
  background: #000;
  z-index: 20;
}
.mobile-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  width: 30px;
  height: 24px;
  z-index: 1001;
  transition: all 0.3s ease;

  &.active {
    position: fixed;
    top: 32px;
    right: 16px;
  }

  span {
    width: 100%;
    height: 3px;
    background-color: white;
    margin: 3px 0;
    transition: 0.3s;
    transform-origin: center;

    &.active:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    &.active:nth-child(2) {
      opacity: 0;
    }

    &.active:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  }
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media all and (max-width: 576px) {
  nav {
    flex-direction: row;
    align-items: center;
    position: relative;

    img {
      margin-bottom: 0;
    }
  }

  .mobile-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.3s ease;
    z-index: 1000;

    &.active {
      left: 0;
    }

    li {
      margin: 0;
      margin-bottom: 2rem;

      a {
        margin: 0;
        font-size: 2rem;
      }

      button {
        margin: 0;
        font-size: 1.5rem;
      }
    }
  }
}

@media all and (max-width: 992px) {
  nav li a,
  nav button {
    font-size: 18px;
    margin-left: 24px;
  }
  nav .button-logo {
    margin-left: 0px !important;
  }
}

@media all and (min-width: 577px) and (max-width: 768px) {
  nav img {
    height: 20px;
  }

  .mobile-toggle {
    display: none;
  }
}

@media all and (min-width: 577px) {
  .mobile-toggle {
    display: none;
  }
}
@media all and (max-width: 360px) {
  .logo {
    height: 20px;
  }
}
@media all and (min-width: 577px) and (max-width: 1100px) {
  .nav-menu {
    justify-content: flex-end;
  }
  .language-selector-list-item {
    margin-left: 0;
  }
}
.download-cv-button {
  &:hover {
    .download-icon {
      fill: #000;   
    }
  }
}
</style>
