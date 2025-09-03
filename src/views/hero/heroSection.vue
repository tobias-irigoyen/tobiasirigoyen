<template>
  <section class="flex justify-center container" :id="t('anchors.home-section')">
    <div class="mb-16 w-1/2 hero-blocks">
      <h2 class="text-5xl mb-8 leading-16 intro-title">{{ t('intro') }}</h2>
      <p class="lead">{{ t('lead') }}</p>
      <div class="flex flex-start mt-8 btns-container">
        <a
          @click="navigateToSection('work')"
          class="border border-white py-2 px-3 bg-white !text-black text-[18px] hover:bg-black hover:!text-white hover:cursor-pointer w-[140px] text-center my-work-btn"
          >{{ t('my-work') }}</a
        >
        <button
          @click="downloadResume"
          class="border border-white py-2 px-3 ml-8 flex justify-center download-cv-button items-center bg-transparent !text-white text-[18px] hover:bg-white hover:!text-black hover:cursor-pointer w-[140px] text-center"
        >
          {{ t('my-resume') }} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-download ml-2 download-icon" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg>
        </button>
      </div>
    </div>
    <div class="w-1/2 flex justify-end hero-blocks hero-image-container">
      <img src="../../assets/hero-image.svg" alt="hero image" class="w-130 hero-image" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
const { locale, t } = useI18n()
const router = useRouter()
const route = useRoute()

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Tobías Irigoyen - Resume.pdf'
  link.download = 'Tobías Irigoyen - Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
const getLocalizedPath = (sectionKey: string): string => {
  if (sectionKey === 'work') {
    return locale.value === 'en' ? 'work' : 'proyectos'
  }
  if (sectionKey === 'contact') {
    return locale.value === 'en' ? 'contact' : 'contacto'
  }
  return sectionKey
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
const navigateToSection = async (sectionKey: string) => {
  const localizedPath = getLocalizedPath(sectionKey)

  await router.push(`/${locale.value}/${localizedPath}`)

  setTimeout(() => {
    const anchor = t(`anchors.${sectionKey}`)
    scrollToSection(anchor)
  }, 50)
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh);
  padding-top: 334px;
  margin-top: -214px;
}
.hero-image-container {
  margin-bottom: auto;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
@media all and (max-width: 992px) {
  h2 {
    text-align: center;
  }
  .container {
    flex-direction: column;
    .lead {
      text-align: center;
    }
    .btns-container {
      justify-content: center;
    }
  }
  .hero-blocks {
    width: 100% !important;
  }
  .hero-image-container {
    justify-content: center;
    .hero-image {
      width: 18.75rem; // 300px;
    }
  }
  .hero-image {
    display: none;
  }
}
@media all and (max-width: 360px) {
  h2 {
    font-size: 2rem; //32px;
    text-align: center;
  }
  .btns-container {
    flex-direction: column;
    a {
      margin-bottom: 1.5rem;
      text-align: center;
    }
    button {
      text-align: center;
      width: 100%;
      margin-left: 0;
    }
  }
}
@media all and (max-width: 576px) {
  .container {
    margin-top: 40px !important;
    padding-top: 0px;
  }
  .intro-title {
    font-size: 2.75rem;
  }
}
@media all and (max-width: 360px) {
  .my-work-btn {
    width: 100%;
  }
  h2 {
    line-height: 1.5;
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
