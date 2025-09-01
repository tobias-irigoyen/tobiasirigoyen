import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './main.scss'
import messages from './locales/index.ts'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)

app.use(router)
app.use(i18n)

router.beforeEach((to, from, next) => {
  const lang = to.params.lang as string
  if (!['en', 'es'].includes(lang)) {
    return next('/es/')
  }
  i18n.global.locale.value = lang
  return next()
})

app.mount('#app')

setTimeout(() => {
  const loader = document.getElementById('app-loader')
  if (loader) {
    loader.classList.add('hidden')
    setTimeout(() => loader.remove(), 600)
  }
}, 2500)
