import WorkDetail from '@/views/myWork/workDetail.vue'
import Home from '@/views/home/homeSection.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:lang(en|es)/', name: 'Home', component: Home },
    {
      path: '/:lang(en|es)/:section(projects|proyectos)/:slug',
      name: 'workDetail',
      component: WorkDetail,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang as string
  const section = to.params.section as string

  if (lang && section) {
    const correctSection = lang === 'en' ? 'projects' : 'proyectos'
    if (section !== correctSection) {
      return next({
        ...to,
        params: { ...to.params, section: correctSection },
        replace: true,
      })
    }
  }

  next()
})

export default router
