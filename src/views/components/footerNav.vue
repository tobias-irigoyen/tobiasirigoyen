<template>
  <footer class="footer pt-[60px] pb-[60px]">
    <nav class="flex justify-between items-center container">
      <span>© tobias irigoyen 2025</span>
      <ul class="flex items-center justify-center">
        <li>
          <a
            class="text-2xl ml-16 hover:underline"
            :href="'/' + locale + '/#' + t('anchors.work')"
            >{{ t('my-work') }}</a
          >
        </li>
        <li>
          <a
            class="text-2xl ml-16 hover:underline"
            :href="'/' + locale + '/#' + t('anchors.contact')"
            >{{ t('contact') }}</a
          >
        </li>
        <li>
          <button
            @click="downloadResume"
            class="border border-white py-2 px-3 ml-16 bg-transparent !text-white text-2xl hover:bg-white hover:!text-black hover:cursor-pointer w-[165px]"
          >
            {{ t('my-resume') }}
          </button>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { locale } = useI18n()

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
</style>
