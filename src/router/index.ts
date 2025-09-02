import WorkDetail from '@/views/myWork/workDetail.vue'
import Home from '@/views/home/homeSection.vue'
import { createRouter, createWebHistory, type RouteLocationRaw } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang(en|es)/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:lang(en|es)/:workSection(work|proyectos)',
      name: 'Work',
      component: Home,
      meta: { section: 'work' },
    },
    {
      path: '/:lang(en|es)/:contactSection(contact|contacto)',
      name: 'Contact',
      component: Home,
      meta: { section: 'contact' },
    },
    {
      path: '/:lang(en|es)/:section(projects|proyectos)/:slug',
      name: 'workDetail',
      component: WorkDetail,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // No hacer scroll automático para rutas con secciones
    // El componente se encargará del scroll
    if (to.meta?.section) {
      return false
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang as string
  const section = to.params.section as string
  const workSection = to.params.workSection as string
  const contactSection = to.params.contactSection as string

  if (lang && section) {
    const correctSection = lang === 'en' ? 'projects' : 'proyectos'
    if (section !== correctSection) {
      const target: RouteLocationRaw = {
        name: to.name as string, // reutilizamos el nombre de la ruta
        params: { ...to.params, section: correctSection },
        query: to.query,
        hash: to.hash,
        replace: true,
      }
    }
  }

  if (lang && workSection) {
    const correctWorkSection = lang === 'en' ? 'work' : 'proyectos'
    if (workSection !== correctWorkSection) {
      const target: RouteLocationRaw = {
        name: to.name as string,
        params: { ...to.params, workSection: correctWorkSection },
        query: to.query,
        hash: to.hash,
        replace: true,
      }
    }
  }

  if (lang && contactSection) {
    const correctContactSection = lang === 'en' ? 'contact' : 'contacto'
    if (contactSection !== correctContactSection) {
      const target: RouteLocationRaw = {
        name: to.name as string,
        params: { ...to.params, contactSection: correctContactSection },
        query: to.query,
        hash: to.hash,
        replace: true,
      }
    }
  }

  next()
})

export default router
