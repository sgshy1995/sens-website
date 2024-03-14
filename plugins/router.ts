import {defineNuxtPlugin, useCookie} from "nuxt/app";
import {Router} from 'vue-router';

export default defineNuxtPlugin((nuxtApp) => {
  (nuxtApp.$router as Router).options.scrollBehavior = () => {
    return { left: 0, top: 0 }
  }
})
