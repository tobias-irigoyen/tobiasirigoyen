<template>
  <nav class="flex justify-between items-center pt-8 pb-8 container">
    <img src="../../assets/logo.svg" class="h-8 logo" />
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
        <a class="text-2xl ml-16" :href="'#' + t('anchors.work')" @click="closeMobileNav">
          {{ t('my-work') }}
        </a>
      </li>
      <li>
        <a class="text-2xl ml-16" :href="'#' + t('anchors.contact')" @click="closeMobileNav">
          {{ t('contact') }}
        </a>
      </li>
      <li>
        <button
          @click="downloadResume"
          class="border border-white py-2 px-3 ml-16 bg-transparent !text-white text-2xl hover:bg-white hover:!text-black hover:cursor-pointer w-[165px]"
        >
          {{ t('my-resume') }}
        </button>
      </li>
      <li class="ml-16"><language-selector></language-selector></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import languageSelector from './languageSelector.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Tobías Irigoyen - Resume.pdf'
  link.download = 'Tobías Irigoyen - Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  closeMobileNav()
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
</style>
