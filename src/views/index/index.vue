<template>
  <div class="home">
    <keep-alive include="cinema,film">
    <router-view class="list"></router-view>
    </keep-alive>
    <tabbar :tabs="tabs" class="tabs"></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar.vue'
export default {
  name: 'index',
  data () {
    return {
      tabs: [
        { id: 1, name: '电影', icon: 'icon-films', href: '/film' },
        { id: 2, name: '影院', icon: 'icon-cinemas', href: '/cinema' },
        { id: 3, name: '我的', icon: 'icon-center', href: '/center' }
      ]
    }
  },
  components: {
    tabbar
  }
}
</script>
<style lang="less" scoped>
html,body{
  height: 100%;
}
.home{
  height: 100%;
  display: flex;
  flex-direction: column;
  .tabs{
    height: 50px;
    flex-shrink: 0;
  }
  .list{
    flex: 1;
    overflow-y: auto;

  }
}

</style>
