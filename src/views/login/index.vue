<template>
  <div id="login">
    <div class="login">
      <div class="icon" @click="onClickLeft">＜</div>
      <div class="move">猫眼电影</div>
    </div>
    <div>
      <van-tabs title-active-color="#df2d2d">
        <van-tab title="美团账号登录">
          <van-cell-group class="login-border">
            <van-cell-group>
              <van-field v-model.lazy="username" placeholder="账号/手机/email" @input="getuser"/>
              <van-field v-model.lazy="password" type="password" @input="getpsd" placeholder="请输入您的密码"/>
              <van-button size="large" class="btn" @click="btn"  :disabled="isok">登录</van-button>
              <div>
                <div class="bottom">
                   <router-link to="/register">立即注册</router-link>
                  <a href="#">找回密码</a>
                </div>
                <div class="phone">
                  <span>©猫眼电影客服电话：</span>
                  <a href="#" title="156451212">156451212</a>
                </div>
              </div>
            </van-cell-group>
          </van-cell-group>
        </van-tab>
        <van-tab title="手机验证登陆">
          <van-cell-group class="login-border">
            <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
              <van-button slot="button" size="small" type="primary" class="btn-v">发送验证码</van-button>
            </van-field>
            <van-cell-group>
              <van-field placeholder="请输入用户名"/>
              <van-button size="large" class="btn">登录</van-button>
              <div>
                <div class="bottom">
                  <router-link to="/register">立即注册</router-link>
                  <a href="#">找回密码</a>
                </div>
                <div class="phone">
                  <span>©猫眼电影客服电话：</span>
                  <a href="#" title="156451212">156451212</a>
                </div>
              </div>
            </van-cell-group>
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "~@/styles/common/variable.less";
html,
body {
  height: 100%;
}
#login {
  .login-border {
    border-top: 4px solid #d6d6d6;
    .btn-v {
      height: 20px;
      text-align: center;
      line-height: 20px;
    }
  }
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
  .btn {
    background-color: #df2d2d;
    border-radius: 3px;
    font-size: 20px;
    color: #fff;
  }
  .bottom {
    display: flex;

    justify-content: space-between;
    margin: 14px 10px;
  }
  .phone {
    text-align: center;
    color: #333;
    font-size: 14px;
  }
}
</style>

<script>
import http from "@/utils/http.js"
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      sms:'',
      username:'',
      password:'',
      isok:false
    };
  },
  computed: {
    ...mapState("login", ["user","psd","code"]),


  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.push("/film");
    },
    getuser() {
     if(this.username.length>0){
         this.isok=false
      }
    },
    getpsd() {
      if(this.password.length>0){
         this.isok=false
      }
    },
    //发送ajax
    btn() {
      if(this.username == '' ){
         this.$toast('账号不能为空');
         this.isok=true
         return
      }else if(this.password == ''){
         this.$toast('密码不能为空');
         this.isok=true
         return
      }
       this.$store.commit({
          type: "login/chguser",
          user: this.username.trim()
        })
        this.$store.commit({
          type: "login/chgpsd",
          psd: this.password.trim()
        })
        this.get()

    },
     // 获取输入的账号密码，然后与数据库的进行对比
    get() {
      http.get('http://123.206.123.152:3000/user',{
        params:{
          username:`${this.username}`,
          password:`${this.password}`
        }})
        .then(res => {
          if(res.length>0){
            this.login()
          }else{
             this.$toast('账号或密码错误');
          }
        })
    },
    // 登录
    login() {
      setTimeout(() => {
        let userInfo = {
          user: `${this.username}`,
          psd: `${this.password}`,
        };
        window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
        let redirect = this.$route.query.redirect || "/film";
        this.$router.replace(redirect);
      }, 1000);
      // console.log(state.log.password)
    },
    ...mapMutations("login", ["chguser","chgpsd"])
  }
};
</script>
