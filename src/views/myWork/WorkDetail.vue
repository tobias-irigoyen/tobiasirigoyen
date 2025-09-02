<template>
  <section class="container pb-[100px]">
    <h2 class="section-title text-center mt-8">{{ work ? t(work.title) : '' }}</h2>

    <div class="slider-container mb-6" v-if="work?.images && work.images.length > 0">
      <swiper
        :modules="[Pagination, Navigation]"
        :keyboard="{ enabled: true }"
        :loop="true"
        :pagination="{ clickable: true, dynamicBullets: false }"
        navigation
        :slides-per-view="1"
        :space-between="30"
      >
        <swiper-slide v-for="(image, index) in work?.images" :key="index">
          <img
            :src="image"
            :alt="t('project-image') + ' ' + (index + 1)"
            class="w-full h-auto rounded-lg shadow-lg cursor-pointer"
            @click="openLightbox(index)"
          />
        </swiper-slide>
      </swiper>
    </div>

    <div
      v-if="isLightboxOpen"
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      @click.self="closeLightbox"
    >
      <swiper
        :modules="[Pagination, Navigation]"
        :loop="true"
        navigation
        :initial-slide="selectedIndex"
        class="lightboxSwiper w-[80vw] max-h-[90vh]"
      >
        <swiper-slide v-for="(image, index) in work?.images" :key="'light-' + index">
          <img
            :src="image"
            class="max-h-[90vh] w-auto rounded-lg shadow-lg"
            :alt="t('project-image') + ' ' + (index + 1)"
          />
        </swiper-slide>
      </swiper>

      <button
        class="absolute top-6 right-6 text-white text-3xl cursor-pointer"
        @click="closeLightbox"
      >
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <h3 class="text-3xl mb-6">{{ t('description') }}</h3>
    <p class="text-[20px] mb-8 whitespace-pre-line">{{ t(work?.description ?? '') }}</p>
    <h3 class="text-3xl mb-6">{{ t('technologies') }}</h3>
    <ul class="skills mb-8">
      <li class="text-[20px]" v-for="skill in work?.skills" :key="skill">{{ t(skill) }}</li>
    </ul>
    <h3 class="text-3xl mb-6">{{ t('link') }}</h3>
    <a :href="work?.link" class="project-link text-[20px] hover:underline">{{ work?.link }}</a>
    <h3 class="text-3xl mt-8 mb-8">{{ t('related-works') }}</h3>
    <swiper
      :modules="[Navigation]"
      :space-between="32"
      :loop="true"
      navigation
      :breakpoints="{
        0: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 32 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1440: { slidesPerView: 4, spaceBetween: 32 },
      }"
      class="relatedWorksSwiper"
    >
      <swiper-slide v-for="work in relatedWorks" :key="work.id">
        <article class="border border-white w-100 h-[144px] work p-4 rounded-lg shadow-md">
          <router-link :to="getWorkLink(work.slug)" @click.prevent="reloadPage(work.slug)">
            <h3 class="related-project-title text-xl font-semibold mb-2">{{ t(work.title) }}</h3>
            <svg
              class="ms-auto right-arrow"
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
          </router-link>
        </article>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import workData from '@/assets/works.json'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import type { WorkItem } from '@/types/works'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import workDetail from '../../assets/work.json'
import router from '@/router'

const works = ref(workDetail)
const { t } = useI18n()
const route = useRoute()

const slug = computed(() => {
  const s = route.params.slug
  return Array.isArray(s) ? s[0] : String(s ?? '')
})

const worksArray: WorkItem[] = (
  Array.isArray(workData) && Array.isArray(workData[0]) ? workData.flat() : workData
) as WorkItem[]

const relatedWorks = computed(() => worksArray.filter((w) => w.slug !== slug.value))

const work = computed<WorkItem | undefined>(() =>
  worksArray.find((w) => String(w.slug) === slug.value),
)

const selectedIndex = ref<number>(0)
const isLightboxOpen = ref(false)

function openLightbox(index: number) {
  selectedIndex.value = index
  isLightboxOpen.value = true
}

function closeLightbox() {
  isLightboxOpen.value = false
}
const getWorkLink = (slug: string) => {
  return {
    name: 'workDetail',
    params: {
      lang: locale.value,
      section: locale.value === 'en' ? 'projects' : 'proyectos',
      slug,
    },
  }
}
function reloadPage(slug: string) {
  const url = router.resolve(getWorkLink(slug)).href
  window.location.href = url
}
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 300px);
}
.skills {
  margin-left: 1rem;
  li {
    list-style: disc;
  }
}
.swiper {
  width: 100%;
  height: auto;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.swiper-slide img,
.swiper-slide a {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: transparent !important;
  max-width: 92%;
  margin: auto;
}
:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #eaeaea;
  opacity: 0.4;
  margin-right: 8px !important;
}
:deep(.swiper-pagination-bullet-active) {
  background: #3b82f6;
  opacity: 1;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fff !important;
  width: 40px;
  height: 40px;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px;
  font-weight: bold;
}
.slider-container {
  position: relative;
  margin: 2rem 0;
}
@media all and (min-width: 1200px) {
  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    background: rgba(55, 55, 55, 0.75);
  }
  :deep(.swiper-pagination-bullet-active) {
    background: #3b82f6;
    opacity: 1;
  }
}
:deep(.swiper-button-prev) {
  width: 20px;
  left: 0;
}
:deep(.swiper-button-next) {
  width: 20px;
  right: 0;
}
:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 24px;
}
@media all and (max-width: 1400px) {
  :deep(.swiper-slide img) {
    width: 83%;
  }
}
.btn-lightbox-prev {
  left: 20px;
  font-size: 2rem;
}
.btn-lightbox-next {
  right: 20px;
  font-size: 2rem;
}
@media all and (max-width: 576px) {
  .btn-lightbox-prev {
    left: 10px;
    font-size: 1.5rem;
  }
  .btn-lightbox-next {
    right: 10px;
    font-size: 1.5rem;
  }
  h2 {
    font-size: 2.25rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  .related-project-title {
    font-size: 1.5rem;
  }
  p,
  .skills li,
  .project-link {
    font-size: 1.125rem;
  }
}
.lightboxSwiper {
  width: 80vw;
  max-height: 90vh;
}
.right-arrow {
  margin-top: auto !important;
  position: absolute;
  bottom: 1rem;
  right: 0.5rem;
}
.relatedWorksSwiper {
  padding: 0 30px;
  article {
    position: relative;
    &:hover {
      background-color: #fff;
      * {
        color: #000 !important;
        stroke: #000;
      }
    }
  }
}
</style>
