import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './main.scss'
import messages from './locales/index.ts'

function getDefaultLocale(): 'en' | 'es' {
  const pathLang = router.currentRoute.value.params.lang as string
  if (['en', 'es'].includes(pathLang)) return pathLang as 'en' | 'es'

  const navLang = navigator.language.split('-')[0]
  return ['en', 'es'].includes(navLang) ? (navLang as 'en' | 'es') : 'es'
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'es',
  messages,
})

const app = createApp(App)

app.use(router)
app.use(i18n)

router.beforeEach((to, from, next) => {
  const lang = to.params.lang as string
  if (!['en', 'es'].includes(lang)) {
    return next('/' + i18n.global.locale.value + '/')
  }
  i18n.global.locale.value = lang as 'en' | 'es'
  next()
})

app.mount('#app')

setTimeout(() => {
  const loader = document.getElementById('app-loader')
  if (loader) {
    loader.classList.add('hidden')
    setTimeout(() => loader.remove(), 600)
  }
}, 2500)
