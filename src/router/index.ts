import HeroSection from '@/views/hero/heroSection.vue'
import MyWorkSection from '@/views/myWork/myWorkSection.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:lang(en|es)/', name: 'Home', component: HeroSection },
    { path: '/#my-work', name: 'My Work', component: MyWorkSection },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
