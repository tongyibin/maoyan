<template>
  <div id="login">
    <div class="login">
      <div class="icon" @click="onClickLeft"> ＜ </div>
      <div class="move">猫眼电影</div>
    </div>
    <div>
      <van-tabs title-active-color="#df2d2d">
        <van-tab title="美团账号登录">
          <van-cell-group class="login-border">
            <van-cell-group>
              <van-field v-model="username" clearable placeholder="账号/手机/email"/>
              <van-field v-model="password" type="password" placeholder="请输入您的密码"/>
              <van-button size="large" class="btn">登录</van-button>
              <div>
                <div class="bottom">
                  <a href="#">立即注册</a><a href="#">找回密码</a>
                </div>
                <div class="phone">
                  <span>©猫眼电影客服电话：</span><a href="#" title="156451212">156451212</a>
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
              <van-field  placeholder="请输入用户名" />
               <van-button size="large" class="btn">登录</van-button>
              <div>
                <div class="bottom">
                  <a href="#">立即注册</a><a href="#">找回密码</a>
                </div>
                <div class="phone">
                  <span>©猫眼电影客服电话：</span><a href="#" title="156451212">156451212</a>
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
html,body {
  height: 100%;
}
#login {
  .login-border{
      border-top: 4px solid #d6d6d6;
      .btn-v{
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
  .btn{
    background-color: #df2d2d;
    border-radius:3px;
    font-size: 20px;
    color: #fff;
  }
  .bottom{
    display: flex;

    justify-content: space-between;
    margin: 14px 10px;
  }
  .phone{
    text-align: center;
    color: #333;
    font-size: 14px;
  }

}
</style>

<script>
import {mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      sms: '',
      loginlist: [
        { id: 1, name: '美团账号登录', href: '/login/meituan' },
        { id: 2, name: '手机验证登陆', href: '/login/phone' }
      ]
    }
  },
  components: {},
  computed: {
    // 把账号密码传递给仓库
    username: {
      get () {
        // console.log(this.$store.username)
        return this.$store.username
      },
      set (value) {
        // this.chguser(value)
        this.$store.commit({
          type: 'login/chguser',
          username: value
        })
      }
    },
    password: {
      get () {
        return this.$store.password
      },
      set (value) {
        this.$store.commit({
          type: 'login/chguser',
          password: value
        })
      }
    }
  },
  methods: {
    // 登录
    login () {
      setTimeout(() => {
        let userInfo = {
          name: '张三',
          age: 18
        }
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
        let redirect = this.$route.query.redirect || '/film'
        this.$router.replace(redirect)
      }, 2000)
    },
    // 返回
    onClickLeft () {
      this.$router.push('/film')
    },
    ...mapMutations('login', ['chguser'])
  }
}
</script>
