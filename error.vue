<template>
  <div class="bl-not-found">
    <img src="~/assets/images/404.svg" alt="404">
    <span>抱歉，您访问的页面不存在</span>
    <div class="animate__animated" @click="handleJumpToIndex">
      <span>返回首页</span>
      <img src="~/assets/images/goto.svg" alt="goto">
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from 'nuxt/app';
import {routeStore} from '~/store/index';
const routeStoreUse = routeStore();

const handleJumpToIndex = () => {
  routeStoreUse.changeName('index');
  const routes = useRoute();
  console.log('routes', routes);
  console.log('pageName', 'index');
  const router = useRouter();
  router.replace({
    name: 'index'
  });
};
</script>

<style scoped lang="scss">
.bl-not-found{
  width: 100vw;
  height: 100vh;
  background: linear-gradient(149deg, #FFFFFF 0%, #E8E8E8 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 366px;
    height: 306px;
    margin-bottom: 60px;
  }

  > span {
    font-size: 24px;
    font-family: Microsoft YaHei, Microsoft YaHei, sans-serif;
    font-weight: 400;
    color: #333333;
    line-height: 41px;
  }

  > div {
    width: 230px;
    height: 60px;
    margin-top: 46px;
    background: linear-gradient(90deg, #B22747 0%, #E3A739 100%);
    box-shadow: 0 20px 35px -10px rgba(255,115,46,0.4);
    border-radius: 126px 126px 126px 126px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > span {
      font-size: 24px;
      font-family: Microsoft YaHei, Microsoft YaHei, sans-serif;
      font-weight: 400;
      color: #FFFFFF;
    }

    > img {
      width: 26px;
      height: 26px;
      margin-left: 18px;
    }

    &:hover {
      animation: pulse; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 0.6s; /* don't forget to set a duration! */
    }
  }
}
</style>
