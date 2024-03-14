<template>
  <div style="width: 100vw;overflow-x: hidden;">
    <HomeMobile v-if="deviceStoreUse.device === 'mobile'"></HomeMobile>
    <HomePc v-if="deviceStoreUse.device === 'pc'"></HomePc>
  </div>
</template>

<script setup lang="ts">
import { deviceStore } from '~/store/index';
const deviceStoreUse = deviceStore();
</script>

<style></style>
