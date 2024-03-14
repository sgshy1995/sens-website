<template>
  <div style="width: 100vw;overflow-x: hidden;">
    <GlobalFooterMobile v-if="deviceStoreUse.device === 'mobile'"></GlobalFooterMobile>
    <GlobalFooterPc v-if="deviceStoreUse.device === 'pc'"></GlobalFooterPc>
  </div>
</template>

<script setup lang="ts" >
import GlobalFooterMobile from "./footer/GlobalFooterMobile.vue";
import GlobalFooterPc from "./footer/GlobalFooterPc.vue";
import { deviceStore } from '~/store/index';
const deviceStoreUse = deviceStore();
</script>

<style scoped lang="scss">

</style>
