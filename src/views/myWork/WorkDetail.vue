<template>
  <section class="container pb-[100px]">
    <h2 class="section-title text-center mt-4">{{ work ? t(work.title) : '' }}</h2>

    <!-- Image Slider -->
    <div class="slider-container mb-6" v-if="work?.images && work.images.length > 0">
      <swiper
        :modules="[Pagination, Navigation]"
        :keyboard="{ enabled: true }"
        :loop="true"
        :pagination="{ clickable: true, dynamicBullets: false }"
        navigation
        :slides-per-view="1"
        :space-between="30"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in work?.images" :key="index">
          <img
            :src="image"
            :alt="'Screenshot ' + (index + 1)"
            class="w-full h-auto rounded-lg shadow-lg cursor-pointer"
            @click="openLightbox(index)"
          />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Lightbox -->
    <div
      v-if="selectedIndex !== null"
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <img
        :src="work?.images[selectedIndex]"
        class="max-h-[90vh] max-w-[80vw] rounded-lg shadow-lg"
      />

      <button
        class="absolute top-6 right-6 text-white text-3xl cursor-pointer"
        @click="closeLightbox"
      >
        <i class="bi bi-x-lg"></i>
      </button>

      <button
        class="absolute btn-lightbox-prev text-white flex items-center justify-center cursor-pointer"
        @click.stop="prevImage"
      >
        <i class="bi bi-chevron-left"></i>
      </button>

      <button
        class="absolute btn-lightbox-next text-white flex items-center justify-center cursor-pointer"
        @click.stop="nextImage"
      >
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>

    <h3 class="text-3xl mb-6">{{ t('description') }}</h3>
    <p class="text-[20px] mb-8 whitespace-pre-line">{{ t(work?.description ?? '') }}</p>
    <h3 class="text-3xl mb-6">{{ t('technologies') }}</h3>
    <ul class="skills mb-8">
      <li class="text-[20px]" v-for="skill in work?.skills" :key="skill">{{ t(skill) }}</li>
    </ul>
    <h3 class="text-3xl mb-6">{{ t('link') }}</h3>
    <a :href="work?.link" class="hover:underline">{{ work?.link }}</a>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import workData from '@/assets/works.json'
import { useI18n } from 'vue-i18n'
import type { WorkItem } from '@/types/works'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'

const { t } = useI18n()
const route = useRoute()

const slug = computed(() => {
  const s = route.params.slug
  return Array.isArray(s) ? s[0] : String(s ?? '')
})

const worksArray: WorkItem[] = (
  Array.isArray(workData) && Array.isArray(workData[0]) ? workData.flat() : workData
) as WorkItem[]

const work = computed<WorkItem | undefined>(() =>
  worksArray.find((w) => String(w.slug) === slug.value),
)

// Lightbox state (usamos índice en lugar de url)
const selectedIndex = ref<number | null>(null)

function openLightbox(index: number) {
  selectedIndex.value = index
}

function closeLightbox() {
  selectedIndex.value = null
}

function prevImage() {
  if (!work.value) return
  selectedIndex.value =
    selectedIndex.value === 0 ? work.value.images.length - 1 : (selectedIndex.value ?? 0) - 1
}

function nextImage() {
  if (!work.value) return
  selectedIndex.value =
    selectedIndex.value === work.value.images.length - 1 ? 0 : (selectedIndex.value ?? 0) + 1
}

function handleKeydown(e: KeyboardEvent) {
  if (selectedIndex.value === null) return
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  //window.scrollTo(0, 0)
})
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))

const touchStartX = ref<number | null>(null)

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.changedTouches[0].clientX
}

function onTouchEnd(e: TouchEvent) {
  if (touchStartX.value === null) return
  const touchEndX = e.changedTouches[0].clientX
  const diff = touchStartX.value - touchEndX

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // swipe left → next
      nextImage()
    } else {
      // swipe right → prev
      prevImage()
    }
  }
  touchStartX.value = null
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

/* Custom styles */
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
}
</style>
