<template>
  <section class="flex justify-center container" :id="t('anchors.home-section')">
    <div class="mb-16 w-1/2 hero-blocks">
      <h2 class="text-5xl mb-8 leading-16">{{ t('intro') }}</h2>
      <p class="lead">{{ t('lead') }}</p>
      <div class="flex flex-start mt-8 btns-container">
        <a
          :href="'#' + t('anchors.work')"
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
  <!--a class="down-arrow" href="my-work">
    <img src="../../assets/down-arrow.svg" alt="down arrow" height="20" />
  </a-->
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
/*.down-arrow {
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
}*/
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
    padding-top: 100px;
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
