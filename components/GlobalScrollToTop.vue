<template>
  <div v-if="deviceStoreUse.device === 'mobile'" class="bl-index-to-top-mobile animate__animated animate__fadeInDown" v-show="showScrollToTop" @click="handleBackToTop">
    <img src="~/assets/images/scroll-to-top.svg" alt="back-to-top">
  </div>
  <div v-else class="bl-index-to-top-pc animate__animated animate__fadeInDown" v-show="showScrollToTop" @click="handleBackToTop">
    <img src="~/assets/images/scroll-to-top.svg" class="bl-index-to-top-icon-normal" alt="back-to-top">
    <img src="~/assets/images/scroll-to-top-active.svg"
         class="bl-index-to-top-icon-active animate__animated animate__heartBeat" alt="back-to-top">
  </div>
</template>

<script setup lang="ts">
import { deviceStore } from '~/store/index';
const deviceStoreUse = deviceStore();

import {onMounted, onUnmounted, ref} from 'vue';

const showScrollToTop = ref(false);
/**
 * 动画效果
 * */
const scrollCallbackFunction = () => {
  const scrollPos = window.scrollY;
  // 是否显示回到顶部按钮
  showScrollToTop.value = scrollPos >= window.innerHeight / 2;
}
const scrollAnimateFunction = (e: Event) => {
  requestAnimationFrame(scrollCallbackFunction);
};
onMounted(() => {
  window.addEventListener('scroll', scrollAnimateFunction);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollAnimateFunction);
});
const handleBackToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped lang="scss">
.bl-index-to-top-pc {
  position: fixed;
  bottom: 334px;
  right: 10px;
  z-index: 4;
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  cursor: pointer;

  .bl-index-to-top-icon-normal {
    display: inline-block;
  }

  .bl-index-to-top-icon-active {
    display: none;
  }

  > img {
    width: 22px;
    height: 22px;
  }

  &:hover {

    .bl-index-to-top-icon-normal {
      display: none;
    }

    .bl-index-to-top-icon-active {
      display: inline-block;
    }
  }
}

.bl-index-to-top-mobile{
  position: fixed;
  bottom: 334px;
  right: 10px;
  z-index: 4;
  width: 75px;
  height: 75px;
  background: #FFFFFF;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  > img {
    width: 33px;
    height: 33px;
  }
}
</style>
