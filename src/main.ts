import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './main.scss'
//import i18n from './i18n.ts'
import messages from './locales/index.ts' // tus JSON de traducciones

const i18n = createI18n({
  legacy: false,
  locale: 'es', // valor por defecto
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)

app.use(router)
app.use(i18n)

router.beforeEach((to, from, next) => {
  const lang = to.params.lang as string
  if (!['en', 'es'].includes(lang)) {
    return next('/es/') // fallback a español
  }
  i18n.global.locale.value = lang
  return next()
})

app.mount('#app')
