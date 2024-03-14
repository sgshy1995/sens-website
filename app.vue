<template>
  <div>
    <LoadingPage></LoadingPage>
    <NuxtLayout v-if="deviceStoreUse.device">
      <NuxtPage />
    </NuxtLayout>
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue';
const showLoading = ref(false)
import { deviceStore } from '~/store/index';
import * as _ from 'lodash';
const deviceStoreUse = deviceStore();
/**
 * 检查设备
 * User-Agent
 * */
const device = ref('');
const deviceCheckFunction = () => {
  if (process.client) {
    device.value = sessionStorage.getItem('BL_WEBSITE_DEVICE') || 'pc';
    deviceStoreUse.changeDevice(device.value);
  }
}
const deviceCheckInterval = setInterval(deviceCheckFunction, 100)
const deviceCheckTimeout = setTimeout(() => {
  clearInterval(deviceCheckInterval)
}, 1000)

if (process.client) {
  const resizeCallbackFunction = _.debounce(deviceCheckFunction, 300);
  window.addEventListener('resize', resizeCallbackFunction)
}

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// You might choose this based on an API call or logged-in status

const nuxtApp = useNuxtApp()
// console.log(nuxtApp)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component)
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(40px);
}
</style>
