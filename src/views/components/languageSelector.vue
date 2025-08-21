<template>
  <div class="flex items-center gap-2 language-selector">
    <span
      :class="['text-xl', 'hover:cursor-pointer', locale === 'es' ? 'border-b-1' : '']"
      @click="changeLanguage"
      >ES</span
    >
    <button
      @click="changeLanguage"
      :class="[
        'w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 border border-white hover:cursor-pointer',
      ]"
    >
      <div
        :class="[
          'w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 circle-selector',
          locale === 'en' ? 'translate-x-6' : 'translate-x-0',
        ]"
      ></div>
    </button>
    <span
      :class="['text-xl', 'hover:cursor-pointer', locale === 'en' ? 'border-b-1' : '']"
      @click="changeLanguage"
      >EN</span
    >
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

function changeLanguage() {
  const newLocale = locale.value === 'en' ? 'es' : 'en'
  locale.value = newLocale
  router.replace({
    path: `/${newLocale}${route.path.replace(/^\/[a-z]{2}/, '')}`,
  })
}
</script>

<style lang="scss" scoped>
.circle-selector {
  background-color: #fff;
}
@media all and (min-width: 577px) and (max-width: 1100px) {
  .language-selector {
    position: fixed;
    right: 0;
    bottom: 1rem;
    background: #fff;
    padding: 0.5rem 0.75rem;
    z-index: 99;
    .circle-selector {
      background-color: #000;
    }
    * {
      color: #000;
      border-color: #000;
    }
  }
}
</style>
