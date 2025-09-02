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
          class="border border-white py-2 px-3 ml-8 bg-transparent !text-white text-[18px] hover:bg-white hover:!text-black hover:cursor-pointer w-[140px] text-center"
        >
          {{ t('my-resume') }}
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
</style>
