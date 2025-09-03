<template>
  <footer class="footer pt-[60px] pb-[60px]">
    <nav class="flex justify-between items-center container">
      <span>© tobias irigoyen 2025</span>
      <ul class="flex items-center justify-center">
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
      </ul>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()

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
}
</script>

<style lang="scss" scoped>
@media all and (max-width: 576px) {
  footer nav {
    flex-direction: column;
    span {
      margin-bottom: 2rem;
    }
  }
  footer nav ul {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0;
      margin-bottom: 1.5rem;
      a {
        margin: 0;
      }
    }
    button {
      margin: 0;
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
footer {
  border-top: 1px solid #fff;
}
.download-cv-button {
  &:hover {
    .download-icon {
      fill: #000;   
    }
  }
}
</style>
