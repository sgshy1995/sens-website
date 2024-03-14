<template>
  <div class="sens-index-pc">
    <!--  导航  -->
    <div class="sens-index-pc-header">
      <div class="sens-index-pc-header-in">
        <div class="sens-index-pc-header-in-inner">
          <div class="sens-index-pc-header-left">
            <img class="sens-index-pc-header-left-logo" src="~/assets/images/logo.svg" alt="logo">
            <img class="sens-index-pc-header-left-title" src="~/assets/images/name.svg" alt="name" />
          </div>
          <div class="sens-index-pc-header-right">
            <img class="sens-index-pc-header-right-1" src="~/assets/images/right-1.svg" alt="right">
            <img class="sens-index-pc-header-right-2" src="~/assets/images/right-2.svg" alt="right">
          </div>
        </div>

      </div>

    </div>

    <!--  Title  -->
    <div class="sens-index-pc-title">
      <div class="sens-index-pc-title-in">
        <span>公司介绍</span>
      </div>
    </div>

    <!--  Banner  -->
    <div class="sens-index-pc-content">
      <div class="sens-index-pc-content-left">
        <div class="sens-index-pc-content-left-1">
          <span>HEALTHY</span>
        </div>
        <div class="sens-index-pc-content-left-2">
          <span>运动康复</span>
        </div>
        <div class="sens-index-pc-content-left-3">
          <span>和我们一起<span>Exercise !</span></span>
          <div class="sens-index-pc-content-left-3-icon">
            <img src="~/assets/images/home/phone.svg" alt="phone">
          </div>
          <div class="sens-index-pc-content-left-3-icon right-one">
            <img src="~/assets/images/home/exercise.svg" alt="exercise">
          </div>
        </div>
        <div class="sens-index-pc-content-left-4">
          <span>欢迎光临赴康运动康复中心！<br><br>
在我们的温馨康复工作室，您将与经验丰富的康复医师和治疗师共同踏上康复之旅。我们致力于为每一位患者提供个性化的康复方案，帮助您摆脱疼痛，重拾活力。<br><br>
我们的医师和治疗师不仅拥有丰富的专业知识和技能，更注重与患者之间的沟通和信任。他们将细心聆听您的需求和疼痛，制定最合适的康复计划，并引领您一步步走向康复之路。<br><br>
在赴康运动康复中心，您将感受到温暖和关怀，我们希望为您提供一个放松舒缓的康复环境，让您在治疗的同时也享受到愉悦和舒心。<br><br>
无论您是术后、运动受伤、脊柱侧弯还是其他康复需求，赴康运动康复中心将是您最好的伙伴。
</span>
        </div>
      </div>
      <div class="sens-index-pc-content-right">
        <div class="sens-index-pc-content-right-top">
          <img src="~/assets/images/home/img.png" alt="img">
        </div>
        <div class="sens-index-pc-content-right-bottom">
          <img src="~/assets/images/home/img_1.png" alt="img">
          <img src="~/assets/images/home/img_2.png" alt="img">
        </div>
      </div>
    </div>

    <!--  Title  -->
    <div class="sens-index-pc-title">
      <div class="sens-index-pc-title-in">
        <span>联系我们</span>
      </div>
    </div>

    <!--  地理位置地图  -->
    <section class="sens-location">
      <div class="sens-location-in animate__animated animate__fadeIn" id="SensLocationMapPc">

      </div>
    </section>
    <!--  底部Footer  -->
    <GlobalFooter></GlobalFooter>
  </div>
</template>

<script setup lang="ts">
import {routeStore, globalStore} from '~/store/index';

const routeStoreUse = routeStore();
const globalStoreUse = globalStore();

/**
 * 检查设备
 * User-Agent
 * */
const device = ref('');
if (process.client) {
  device.value = sessionStorage.getItem('BL_WEBSITE_DEVICE') || 'pc';
}

const showIndex = ref(0);

const changeShowIndex = (index: number) => {
  showIndex.value = index;
};

import {getCurrentInstance, onMounted, onUnmounted, reactive, ref, watch, nextTick} from 'vue';
import {NuxtAxiosInstance} from '@nuxtjs/axios';
import {useRouter, useRoute} from 'nuxt/app';
import * as _ from 'lodash';

const bMapObject = ref<BMapInstance | null>(null);
const bMapMarkerObject = ref<BMapMarkerInstance | null>(null);
const bMapCustomLayerObject = ref<BMapCustomLayerInstance | null>(null);

function useAsset(): string[] {
  const assets: Record<string, string> = import.meta.glob('~/assets/images/home/point.png', {
    eager: true,
    import: 'default',
  });
  return [...Object.keys(assets).map(key => assets[key])];
}

const initMap = () => {
  // GL版命名空间为BMapGL
  //@ts-ignore
  const BMAP_NORMAL_MAP = window.BMAP_NORMAL_MAP;
  const map = new BMapGL.Map('SensLocationMapPc');    // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(116.367009, 40.079765), 15);
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  map.setMapType(BMAP_NORMAL_MAP);      // 设置地图类型为地球模式
  // 加载完成
  map.addEventListener('tilesloaded', () => {
    console.log('地图加载完成');
    const point = new BMapGL.Point(116.367009, 40.079765);
    const myIcon = new BMapGL.Icon(useAsset()[0], new BMapGL.Size(36, 47), {
      // 指定定位位置。
      // 当标注显示在地图上时，其所指向的地理位置距离图标左上
      // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
      // 图标中央下端的尖角位置。
      anchor: new BMapGL.Size(36 / 2, 47 / 2),
      // 设置图片偏移。
      // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
      // 需要指定大图的偏移位置，此做法与css sprites技术类似。
      // imageOffset: new BMapGL.Size(0, 0 - 25)   // 设置图片偏移
    });
    // 创建标注对象并添加到地图
    bMapMarkerObject.value = new BMapGL.Marker(point, {icon: myIcon});
    bMapObject.value && bMapObject.value.addOverlay(bMapMarkerObject.value);

    // 创建自定义覆盖物DOM
    function createDOM(): Element {
      const div = document.createElement('div');
      div.className = 'bl-point-board';
      div.innerHTML = `
              <span class="bl-point-board-title">北京赴康科技有限公司</span>
              <span class="bl-point-board-text">北京市昌平区科星西路106号院4号楼14层1407</span>
            `;
      return div;
    }

    bMapCustomLayerObject.value = new BMapGL.CustomOverlay(createDOM, {
      point: point,
      map: map,
      offsetY: -56,
    });
    // 将自定义html图层添加到地图上
    bMapObject.value && bMapObject.value.addOverlay(bMapCustomLayerObject.value);
  });


  //鼠标绘制完成回调方法   获取各个点的经纬度
  bMapObject.value = map;
};

onMounted(() => {
  initMap();
});
onUnmounted(() => {
  bMapObject.value && bMapMarkerObject.value && bMapObject.value.removeOverlay(bMapMarkerObject.value);
  bMapMarkerObject.value = null;
  bMapObject.value && bMapCustomLayerObject.value && bMapObject.value.removeOverlay(bMapCustomLayerObject.value);
  bMapCustomLayerObject.value = null;
  bMapObject.value && bMapObject.value.destroy();
  bMapObject.value = null;
});

</script>

<style lang="scss" scoped>
.sens-index-pc {
  background: #EBEDF0;
  width: 100vw;
  min-height: 100vh;

  .sens-index-pc-header {
    width: 100%;
    height: 1080px;
    background: url("~/assets/images/background.png") no-repeat;
    background-size: 100% 100%;

    .sens-index-pc-header-in {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);

      .sens-index-pc-header-in-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 48px;
        box-sizing: border-box;
        height: 140px;
        background: rgba(255, 255, 255, 1);
      }
    }

    .sens-index-pc-header-left {
      display: flex;
      align-items: center;
      box-sizing: border-box;

      .sens-index-pc-header-left-logo {
        width: 64px;
        height: 64px;
        margin-right: 12px;
      }

      .sens-index-pc-header-left-title {
        width: 96px;
        height: 48px;
      }
    }

    .sens-index-pc-header-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .sens-index-pc-header-right-1{
        width: 240px;
        height: 40px;
        margin-bottom: -12px;
      }

      .sens-index-pc-header-right-2{
        width: 240px;
        height: 40px;
      }
    }
  }

  .sens-index-pc-title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 64px 0;
    background: rgba(120, 124, 132, 0.2);

    .sens-index-pc-title-in{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 72px 128px;
      box-sizing: border-box;
      background: url("~/assets/images/home/title.svg") no-repeat;
      background-size: 100% 100%;

      > span {
        font-size: 48px;
        font-weight: bold;
      }
    }
  }

  .sens-index-pc-content {
    display: flex;
    margin-top: 64px;

    .sens-index-pc-content-left {
      display: flex;
      flex-direction: column;
      margin-top: 100px;
      box-sizing: border-box;
      padding-left: 48px;
      width: 700px;

      .sens-index-pc-content-left-1 {
        margin-bottom: 24px;

        > span {
          font-size: 40px;
          font-weight: bold;
          color: #8F939B;
        }
      }

      .sens-index-pc-content-left-2 {
        margin-bottom: 24px;

        > span {
          font-size: 40px;
          font-weight: bold;
          color: #070826;
        }
      }

      .sens-index-pc-content-left-3 {
        margin-bottom: 24px;
        display: flex;
        align-items: center;

        > span {
          font-size: 40px;
          font-weight: bold;
          color: #070826;
          padding-right: 24px;

           > span {
             font-size: 48px;
             font-weight: bold;
             color: #BF5A46;
             font-style: italic;
             padding-left: 8px;
           }
        }

        .sens-index-pc-content-left-3-icon {
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          border-radius: 50%;
          border: 2px solid #fff;

          > img {
            width: 56px;
            height: 56px;
          }

          &.right-one {
            margin-left: -8px;
          }
        }
      }

      .sens-index-pc-content-left-4{
        margin-top: 64px;

        > span {
          font-style: italic;
          font-size: 28px;
          color: #333;
        }
      }
    }

    .sens-index-pc-content-right{
      display: flex;
      flex-direction: column;
      margin-left: 60px;
      //1620 1080

      .sens-index-pc-content-right-top{
        width: 1134px;
        height: 756px;

        > img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }
      }

      .sens-index-pc-content-right-bottom{
        display: flex;
        width: 1134px;
        margin-top: 48px;
        justify-content: space-between;

        > img {
          border-radius: 12px;

          &:nth-child(1){
            width: 352px;
            height: 486px;
          }

          &:nth-child(2){
            width: 729px;
            height: 486px;
          }
        }
      }
    }
  }

  .sens-location {
    width: 100%;
    height: 800px;
    background: transparent;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    margin-top: 64px;
    position: relative;
    z-index: 4;
    margin-bottom: 48px;

    /* This only changes this particular animation duration */
    .animate__animated {
      animation-duration: 1.5s;
      animation-delay: 0s;
    }

    .sens-location-in {
      height: 800px;
      width: 94%;
      background: #333;

      :deep(.bl-point-board) {
        padding: 13px 16px;
        display: flex;
        width: 263px;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 5px 5px 5px 5px;

        .bl-point-board-title {
          font-size: 16px;
          font-family: Microsoft YaHei, Microsoft YaHei, sans-serif;
          font-weight: bold;
          color: #333333;
          display: inline-block;
          margin-bottom: 6px;
        }

        .bl-point-board-text {
          font-size: 14px;
          font-family: Microsoft YaHei, Microsoft YaHei, sans-serif;
          font-weight: 400;
          color: #777777;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
