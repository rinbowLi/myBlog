<template>
  <div class="reward">
    <button id="rewardButton" disable="enable" @click="isShow=!isShow">
      <span>打赏</span>
    </button>
    <div id="QR" v-show="isShow">
      <div id="wechat">
        <a class="fancybox" rel="group">
          <img
            id="wechat_qr"
            v-lazy="'https://api.rinbowli.cn/public/img/WeChatPay.jpg'"
            alt="WeChat Pay"
          />
        </a>
        <p>微信打赏</p>
      </div>
      <div id="alipay">
        <a class="fancybox" rel="group">
          <img
            id="alipay_qr"
            v-lazy="'https://api.rinbowli.cn/public/img/AliPay.jpg'"
            alt="Alipay"
          />
        </a>
        <p>支付宝打赏</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  }
};
</script>

<style lang="scss" scoped>
.reward {
  padding: 10px 0;
  margin: 20px auto;
  width: 100%;
  font-size: 16px;
  text-align: center;
  #rewardButton {
    border: 1px solid #ffab2e;
    line-height: 36px;
    width: 100px;
    color: #ffab2e;
    background-color: #ffffff;
    cursor: pointer;
  }
  #rewardButton:hover {
    color: #ffffff;
    background-color: #ffab2e;
  }

  #QR {
    img {
      width: 180px;
      max-width: 100%;
      display: inline-block;
      margin: 0.8em 2em 0 2em;
    }
    #wechat,
    #alipay {
      display: inline-block;
    }
  }
}
</style>