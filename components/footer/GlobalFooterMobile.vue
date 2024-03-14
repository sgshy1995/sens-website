<template>
  <section class="sens-footer-mobile">
    <div class="sens-footer-body">
      <div class="sens-footer-left">
        <img src="~/assets/images/footer.png" alt="footer">
      </div>
      <div class="sens-footer-right">
        <div>
          <span>公司地址</span>
          <span>中国 · 北京 昌平区科星西路106号院4号楼14层1407</span>
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
          <span>邮箱：singlesaulwork@gmail.com</span>
        </div>
      </div>
    </div>
    <div class="sens-footer-copyright">
      <span>北京赴康科技有限公司版权所有</span>
      <div>
        <a href="https://beian.miit.gov.cn/" target="_blank"> 京ICP备2023005211号</a>
<!--        <img src="~/assets/images/police.png" alt="police">
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=37021202000301" target="_blank">鲁公网安备 37021202000301号</a>-->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts" >

</script>

<style scoped lang="scss">
.sens-footer-mobile {
  width: 100%;
  height: 1060px;
  display: flex;
  flex-direction: column;

  .sens-footer-body {
    width: 100%;
    height: 960px;
    background: #777C85;
    display: flex;
    align-items: center;
    flex-direction: column;

    .sens-footer-left {
      margin-top: 61px;

      > img {
        width: 340px;
        height: 340px;
      }
    }

    .sens-footer-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 460px;

      > div {
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        text-align: center;

        > span:nth-child(1) {
          font-size: 24px;
          font-family: Microsoft YaHei-Bold, Microsoft YaHei, sans-serif;
          font-weight: bold;
          color: #FFFFFF;
          display: inline-block;
        }

        > span:nth-child(2), > span:nth-child(3) {
          font-size: 22px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei, sans-serif;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 44px;
          white-space: nowrap;
          user-select: text;
        }
      }

      .sens-footer-right-code{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        > img {
          width: 119px;
          height: 119px;
          margin-bottom: 2px;
        }

        > span {
          font-size: 16px;
          font-family: Microsoft YaHei-Regular, Microsoft YaHei, sans-serif;
          font-weight: 400;
          color: #FFFFFF;
        }
      }
    }
  }

  .sens-footer-copyright {
    width: 100%;
    height: 100px;
    background: #656B76;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
      font-size: 20px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei, sans-serif;
      font-weight: 400;
      color: #FFFFFF;
      padding-right: 7px;
      line-height: 30px;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4px;

      > img {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 10px;
      }

      > span, > a {
        font-size: 20px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei, sans-serif;
        font-weight: 400;
        color: #FFFFFF;
        padding-right: 7px;
        line-height: 30px;
      }

      > a {
        cursor: default;
        transition: all 0.3s;
        text-decoration: none;
        padding-right: 0;
      }
    }
  }
}
</style>
