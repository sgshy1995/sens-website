<template>
  <div class="bl-loading-page animate__animated" :class="{'is-hidden': hidden, 'animate': showAnimation, 'mobile': deviceStoreUse.device === 'mobile'}">
    <img src="~/assets/images/loading.gif" alt="loading">
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import { deviceStore, globalStore } from '~/store/index';
const deviceStoreUse = deviceStore();
const globalStoreUse = globalStore();
const showAnimation = ref(false);
const hidden = ref(false);
const loadingRendered = ref(false);

const loadingUrl = ref<string>(`${globalStoreUse.cdn_url}/assets/lottie/loading.gif`)

watch(deviceStoreUse, (newValue) => {
  if (newValue.device){
    showAnimation.value = true
    setTimeout(() => {
      hidden.value = true
    }, 1000)
  }
})
</script>

<style scoped lang="scss">
.bl-loading-page {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E89A36;

  > img {
    width: 118.125PX;
    height: 108.75PX;
  }

  .bl-loading-page-icon{
    width: 352PX;
    height: 224PX;
  }

  &.is-hidden{
    display: none;
  }

  &.animate{
    animation: fadeOut; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
}
</style>
