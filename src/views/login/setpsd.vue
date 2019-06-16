<template>
  <div id="register">
    <!-- 头部 -->
    <div class="login">
      <div class="icon" @click="onClickLeft">＜</div>
      <div class="move">猫眼电影</div>
    </div>
    <!-- 输入手机号 -->
    <div class="import">
      <div class="import-phone"><a href="#">输入手机号</a> > <a href="#">输入验证码</a> > <a href="#">设置密码</a></div>
    </div>
    <!-- 输入框 -->
    <div class="phone">
      <input type="text" placeholder="请输入您的密码" class="text" v-model="password">

    </div>
    <div class="phone">
      <input type="text" placeholder="请重复您的输入密码" class="text" v-model="passwords">
    </div>

    <!-- 提交-->
    <div class="check-btn">

      <van-button size="large" class="btn1" @click="sendverify"  :disabled="isok">设置密码</van-button>
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
  overflow-x: hidden;

  .btn-a{
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        height: 50px;
        background-color: rgba(0,0,0,.8);
  }
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
      color: red;
      background: red;
      color: #fff;
    }
    .btn1{
      background-color: #df2d2d;
      color: #fff;
      border: 0;
      height: 47px;
      line-height: 47px;
      font-size: 20px;
      width: 100%;
      border-radius: 3px;

    }
    .btn2{
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
import Axios from 'axios'
export default {
  name:'setpsd',
  data () {
    return {
      isok:false,
      verify:'',
      password:'',
      passwords:''
    }
  },
  methods: {
    // 返回
    onClickLeft () {
      this.$router.push('/verify')
    },
    //登录
    sendverify(){
      if(this.password !== this.passwords){
        this.$toast('两次密码不一致，你个瓜皮，重新输入吧')
        return
      }else {
        //设置成功，将手机号码和密码存入数据库
        // http://123.206.123.152:3000/user
        var phone=document.cookie.split(';')[0].split('=')[1]
      Axios.post('http://localhost:3000/user',  {
          username: `${phone}`,
          password: `${String(this.passwords)}`
          }).then(res=>{
          console.log(res)
        })

      }
    }

  }

}
</script>
