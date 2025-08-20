<template>
  <section class="flex justify-center !mt-[120px] container">
    <div class="mb-16 w-1/2 hero-blocks">
      <h2 class="text-5xl mb-8 leading-16">{{ t('intro') }}</h2>
      <p class="lead">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <div class="flex flex-start mt-8 btns-container">
        <router-link
          :to="'#my-work'"
          class="border border-white py-2 px-3 bg-white !text-black text-[18px] hover:bg-black hover:!text-white hover:cursor-pointer w-[140px] text-center"
          >{{ t('my-work') }}</router-link
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
  <!--router-link class="down-arrow" :to="'/#my-work'">
    <img src="../../assets/down-arrow.svg" alt="down arrow" height="20" />
  </router-link-->
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
  min-height: calc(100vh - 180px);
}
.hero-image-container {
  margin-bottom: auto;
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
</style>
