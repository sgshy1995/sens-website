<template>
  <div class="fk-downloads">
    <!--  导航  -->
    <div class="sens-index-mobile-header">
      <div class="sens-index-mobile-header-in">
        <div class="sens-index-mobile-header-in-inner">
          <div class="sens-index-mobile-header-left">
            <img class="sens-index-mobile-header-left-logo" src="~/assets/images/logo.svg" alt="logo">
            <img class="sens-index-mobile-header-left-title" src="~/assets/images/name.svg" alt="name" />
          </div>
          <div class="sens-index-mobile-header-right">
            <img class="sens-index-mobile-header-right-1" src="~/assets/images/right-1.svg" alt="right">
            <img class="sens-index-mobile-header-right-2" src="~/assets/images/right-2.svg" alt="right">
          </div>
        </div>

      </div>

    </div>
    <div class="fk-downloads-images">
      <img class="fk-downloads-images-logo" src="~/assets/images/logo.svg" alt="logo">
      <img class="fk-downloads-images-title" src="~/assets/images/name.svg" alt="name" />
    </div>

    <div class="fk-downloads-title">
      <div class="fk-downloads-title-in">赴康云健康APP</div>
      <div class="fk-downloads-title-version">Version 1.0.5</div>
      <div class="fk-downloads-title-time">发布时间: 2024-05-24</div>
    </div>

    <div class="fk-downloads-log">
      <div class="fk-downloads-log-title">更新日志</div>
      <table>
        <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">内容</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>添加了康复处方的标签功能</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>修复了一些BUG</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="fk-downloads-tip">
      <div class="fk-downloads-tip-1">IOS用户请使用Safari浏览器打开</div>
      <div class="fk-downloads-tip-2">Android用户请使用系统自带浏览器打开</div>
    </div>

    <div class="fk-downloads-items">
      <a class="fk-downloads-items-ios" href="itms-services://?action=download-manifest&url=https://fkcdn.cn/cdn/resource/manifest-1.0.5.plist">
        <img src="~/assets/images/ios.svg" alt="ios">
        <span>点击下载IOS</span>
      </a>
      <a class="fk-downloads-items-android" href="https://fkcdn.cn/cdn/resource/FkHealthy-1.0.5.apk" target="_blank">
        <img src="~/assets/images/android.svg" alt="android">
        <span>点击下载Android</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { deviceStore } from '~/store/index';
const deviceStoreUse = deviceStore();
</script>

<style scoped lang="scss">
.fk-downloads{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .sens-index-mobile-header {
    width: 100%;

    .sens-index-mobile-header-in {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);

      .sens-index-mobile-header-in-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 48px;
        box-sizing: border-box;
        height: 100px;
        background: rgba(255, 255, 255, 1);
        margin-top: 0;
        border-bottom: 1px solid #333;
      }
    }

    .sens-index-mobile-header-left {
      display: flex;
      align-items: center;
      box-sizing: border-box;


      .sens-index-mobile-header-left-logo {
        width: 64px;
        height: 64px;
        margin-right: 12px;
      }

      .sens-index-mobile-header-left-title {
        width: 96px;
        height: 48px;
      }
    }

    .sens-index-mobile-header-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .sens-index-mobile-header-right-1{
        width: 240px;
        height: 40px;
        margin-bottom: -12px;
      }

      .sens-index-mobile-header-right-2{
        width: 240px;
        height: 40px;
      }
    }
  }

  .fk-downloads-images{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-top: 48px;

    .fk-downloads-images-logo {
      width: 64px;
      height: 64px;
      margin-bottom: 12px;
    }

    .fk-downloads-images-title {
      width: 96px;
      height: 48px;
    }
  }

  .fk-downloads-title{
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .fk-downloads-title-in{
      font-size: 32px;
      font-weight: bold;
      color: #333;
    }

    .fk-downloads-title-version{
      font-size: 32px;
      font-weight: normal;
      color: #333;
      margin-top: 12px;
    }

    .fk-downloads-title-time{
      font-size: 32px;
      font-weight: normal;
      color: #333;
      margin-top: 12px;
    }
  }

  .fk-downloads-log{
    margin-top: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 48px;
    box-sizing: border-box;

    .fk-downloads-log-title{
      font-size: 32px;
      font-weight: bold;
      color: #333;
      margin-bottom: 24px;
      width: 100%;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      border: 2px solid rgb(140 140 140);
      font-family: sans-serif;
      font-size: 0.8rem;
      letter-spacing: 1px;
    }

    caption {
      caption-side: bottom;
      padding: 10px;
      font-weight: bold;
    }

    thead,
    tfoot {
      background-color: rgb(228 240 245);
    }

    th,
    td {
      border: 1px solid rgb(160 160 160);
      padding: 8px 10px;
      font-size: 32px;
    }

    td:last-of-type {
      text-align: center;
    }

    tbody > tr:nth-of-type(even) {
      background-color: rgb(237 238 242);
    }

    thead th {
      white-space: nowrap;
    }

    tfoot th {
      text-align: right;
    }

    tfoot td {
      font-weight: bold;
    }
  }

  .fk-downloads-tip{
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .fk-downloads-tip-1{
      font-size: 32px;
      color: #333;
      margin-bottom: 12px;
    }

    .fk-downloads-tip-2{
      font-size: 32px;
      color: #333;
    }
  }

  .fk-downloads-items{
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .fk-downloads-items-ios, .fk-downloads-items-android{
      width: 240px;
      height: 240px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      > img {
        width: 140px;
        height: 140px;
      }

      > span {
        font-size: 32px;
        color: #333;
        text-decoration: none;
        white-space: nowrap;
      }
    }

    .fk-downloads-items-ios{
      margin-right: 44px;
    }
  }
}
</style>