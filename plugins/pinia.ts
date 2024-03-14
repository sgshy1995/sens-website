import { createPinia } from 'pinia'
import {defineNuxtPlugin, useCookie} from "nuxt/app";

export default defineNuxtPlugin(({ vueApp }) => {
  // 这里设置了默认启动时从cookie获取语言配置。至于为什么是cookie ，是因为nuxt 的首屏服务端加载原因
  vueApp.use(createPinia())
})
