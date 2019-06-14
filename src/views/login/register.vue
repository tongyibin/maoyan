<template>
  <div id="register">
    <!-- 头部 -->
    <div class="login">
      <div class="icon" @click="onClickLeft">＜</div>
      <div class="move">猫眼电影</div>
    </div>
    <!-- 输入手机号 -->
    <div class="import">
      <div class="import-phone">输入手机号 > 输入验证码 > 设置密码</div>
    </div>
    <!-- 输入框 -->
    <div class="phone">
      <input type="text" placeholder="请输入您的手机号" class="text">
    </div>
    <!-- 同意 -->
    <div class="check-btn">

      <div class="check">
        <input type="checkbox" class="input">
        我已阅读并同意
        <a href="#">《美团网用户协议》</a>
      </div>
      <button class="btn">获取验证码</button>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "~@/styles/common/variable.less";
#register{
  font-size: 14px;
  color: #333;
  background-color: #f8f8f8;
  height: 100%;
  //头部
  .login {
    display: flex;
    text-align: center;
    height: 50px;
    color: #fff;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    background: @logincolor;
    .move {
      flex: 1;
    }
    .icon {
      font-size: 24px;
      text-align: center;
      line-height: 50px;
      width: 52px;
      height: 100%;
    }
  }
  // 输入手机号
  .import{
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    margin-top: .2rem;
    margin-bottom: 0;
    background-color: #fff;
    .import-phone{
        list-style: none;
        padding-left: 0;
        text-align: center;
        margin: 0;
        padding: 14px 10px;
    }
  }
  // 输入框
  .phone{
    padding: 14px 10px;
    width: 100%;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
    margin-top: 10px;
    margin-bottom: 0;
    width: 100%;
    background-color: #fff;
    .text{
    border: 0;
    height: 30px;
    margin: -7px 0;
    text-indent: 5px;
    line-height: 1;
    font-size: 15px;
    border-radius: 3px;
    padding: 0;
      }
  }
  //阅读同意
  .check-btn{
    margin: 14px 10px;
    .check{
       margin: 14px 10px;
      display: flex;
    }
    .input{
      width: 14px;
      height: 14px;
      margin: -1px 0;
      background: red;
      color: #fff;
    }
    .btn{
      background-color: #dcdcdc;
      color: #999;
      border: 0;
      height: 47px;
      line-height: 47px;
      font-size: 20px;
      width: 100%;
      border-radius: 3px;
    }
  }

}

</style>
<script>
export default {
  methods:{
    // 返回
    onClickLeft() {
      this.$router.push("/login");
    },
  }
}
</script>
