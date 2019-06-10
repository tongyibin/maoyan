<template>
  <div>
    <h1>登录页面</h1>
    <input type="text" placeholder="账号">
    <input type="password" placeholder="密码">
    <button @click="login">login</button>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  methods:{
    login(){
      setTimeout(()=>{
        let userInfo={
          name:'张三',
          age:18
        }
        window.localStorage.setItem('userInfo',JSON.stringify(userInfo))
        let redirect = this.$route.query.redirect || '/film'
        this.$router.replace(redirect)
      },2000)
    }
  }
}
</script>
