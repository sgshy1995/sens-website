<template>
  <div style="width: 100vw;overflow-x: hidden;position: fixed;z-index: 201">
    <GlobalHeaderMobile v-if="deviceStoreUse.device === 'mobile'"></GlobalHeaderMobile>
    <GlobalHeaderPc v-if="deviceStoreUse.device === 'pc'"></GlobalHeaderPc>
  </div>
</template>

<script setup lang="ts" >
import GlobalHeaderMobile from "./header/sticky/GlobalHeaderMobile.vue";
import GlobalHeaderPc from "./header/sticky/GlobalHeaderPc.vue";
import { deviceStore } from '~/store/index';
const deviceStoreUse = deviceStore();
</script>

<style scoped lang="scss">

</style>
