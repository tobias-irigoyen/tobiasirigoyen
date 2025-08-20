<template>
  <section
    class="flex flex-col items-center justify-start !mt-[40px] !mb-[40px] pt-[80px] pb-[80px] container"
    id="contact"
  >
    <h2 class="section-title mb-[60px]">{{ t('contact') }}</h2>
    <div>
      <ul class="flex flex-row contact-links">
        <li class="me-8">
          <a
            class="text-2xl hover:underline w-[101px] h-[35px]"
            target="_blank"
            href=":mailto=tobias.irigoyen@gmail.com"
            >Email
            <svg
              class="ms-auto right-arrow hidden"
              width="48"
              height="46"
              viewBox="0 0 48 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li class="me-8">
          <a
            class="text-2xl hover:underline w-[116px] h-[35px]"
            target="_blank"
            href="github.com/tobias-irigoyen"
            >Github
            <svg
              class="ms-auto right-arrow hidden"
              width="48"
              height="46"
              viewBox="0 0 48 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            class="text-2xl hover:underline w-[132px] h-[35px]"
            target="_blank"
            href="linkedin.com/in/tobiasirigoyen"
            >Linkedin
            <svg
              class="ms-auto right-arrow hidden"
              width="48"
              height="46"
              viewBox="0 0 48 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.contact-links {
  li {
    a {
      display: flex;
      svg {
        width: 36px;
        height: 34.5px;
      }
    }
    a:hover {
      svg {
        display: block;
      }
    }
  }
}

@media all and (max-width: 576px) {
  .container {
    padding-top: 60px;
  }
  .section-title {
    margin-bottom: 30px !important;
  }
  .contact-links {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      margin: 0;
      margin-bottom: 1.5rem;
      a {
        width: initial;
      }
    }
  }
}
</style>
