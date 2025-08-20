import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

const i18n = createI18n({
  legacy: false, // Recomendado en Vue 3 con Composition API
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en', // Idioma de respaldo
  messages: {
    en,
    es,
  },
})

export default i18n
