import { createI18n } from 'vue-i18n'
import {defineNuxtPlugin, useCookie} from "nuxt/app";
import en from '../i18n/en'
import zh from '../i18n/zh'

export default defineNuxtPlugin(({ vueApp }) => {
  // 这里设置了默认启动时从cookie获取语言配置。至于为什么是cookie ，是因为nuxt 的首屏服务端加载原因
  const language = useCookie('lang').value || 'zh'
  console.log('language', language)
  const i18n = createI18n({
    fallbackLocale: 'zh',
    locale: language,
    messages: {
      en,
      zh
    }
  })

  vueApp.use(i18n)
})
