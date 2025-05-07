<template>
  <section class="sens-footer-pc">
    <div class="sens-footer-body">
      <div class="sens-footer-left">
        <img src="~/assets/images/footer.png" alt="footer">
      </div>
      <div class="sens-footer-right">
        <div>
          <span>公司地址</span>
          <span>中国 · 北京 海淀区北下关街道枫蓝国际B座409A</span>
          <span>102208</span>
        </div>
        <div>
          <span>合作咨询</span>
          <span>电话：17862192193</span>
          <span>邮箱：491987736@qq.com</span>
        </div>
        <div>
          <span>技术咨询</span>
          <span>电话：15589807093</span>
          <span>邮箱：singlesaul@163.com</span>
        </div>
      </div>
    </div>
    <div class="sens-footer-copyright">
      <span>北京赴康科技有限公司版权所有 & </span>
      <a href="https://beian.miit.gov.cn/" target="_blank"> 京ICP备2023005211号</a>
      <img src="~/assets/images/police.png" alt="police">
      <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11011402053999" target="_blank">京公网安备11011402053999号</a>
    </div>
  </section>
</template>

<script setup lang="ts" >

</script>

<style scoped lang="scss">
.sens-footer-pc {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;

  .sens-footer-body {
    width: 100%;
    height: 400px;
    background: #777C85;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 74px 0 173px;

    .sens-footer-left {

      > img {
        width: 280px;
        height: 280px;
      }
    }

    .sens-footer-right {
      display: flex;
      align-items: center;

      > div {
        margin-left: 110px;
        display: flex;
        flex-direction: column;

        > span:nth-child(1) {
          font-size: 24px;
          font-family: Microsoft YaHei-Bold, Microsoft YaHei, sans-serif;
          font-weight: bold;
          color: #FFFFFF;
          display: inline-block;
          margin-bottom: 11px;
        }

        > span:nth-child(2), > span:nth-child(3) {
          font-size: 18px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei, sans-serif;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 28px;
          display: inline-block;
          margin-bottom: 11px;
          white-space: nowrap;
          user-select: text;
        }
      }

    }
  }

  .sens-footer-copyright {
    width: 100%;
    height: 100px;
    background: #656B76;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 24px;
      height: 24px;
      margin-left: 8px;
      margin-right: 8px;
    }

    > span, > a {
      font-size: 20px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei, sans-serif;
      font-weight: 400;
      color: #FFFFFF;
      padding-right: 7px;
    }

    > a {
      padding-right: 0;
      cursor: pointer;
      transition: all 0.3s;
      text-decoration: none;
      user-select: text;

      &:hover {
        color: #E8B93C;
      }
    }
  }
}
</style>
