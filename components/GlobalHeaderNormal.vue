<template>
  <div class="bl-global-header-normal" style="overflow-x: hidden;z-index: 201" :class="{'is-mobile': deviceStoreUse.device === 'mobile'}">
    <GlobalHeaderMobile v-if="deviceStoreUse.device === 'mobile'"></GlobalHeaderMobile>
    <GlobalHeaderPc :if-index="ifIndex" v-if="deviceStoreUse.device === 'pc'"></GlobalHeaderPc>
  </div>
</template>

<script setup lang="ts" >
const props = defineProps({
  ifIndex: {
    type: Boolean,
    default: false
  }
})
import GlobalHeaderMobile from "./header/normal/GlobalHeaderMobile.vue";
import GlobalHeaderPc from "./header/normal/GlobalHeaderPc.vue";
import { deviceStore } from '~/store/index';
const deviceStoreUse = deviceStore();
</script>

<style scoped lang="scss">
.bl-global-header-normal{
  height: 80px;

  .is-mobile{
    height: 97px;
  }
}
</style>
