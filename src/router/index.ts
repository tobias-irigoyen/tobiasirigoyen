import WorkDetail from '@/views/myWork/workDetail.vue'
import Home from '@/views/home/homeSection.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:lang(en|es)/', name: 'Home', component: Home },
    { path: '/:lang(en|es)/:slug', name: 'workDetail', component: WorkDetail, props: true },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    if (to.name === 'workDetail') {
      // si querés que quede la posición
      //return false
      // o si querés que suba arriba:
      return { top: 0 }
    }
    return { top: 0 }
  },
})

export default router
