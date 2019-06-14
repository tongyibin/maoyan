<template>
  <div>
    <filmheard></filmheard>
    <router-view></router-view>
    <tabbar :tabs="tabs"></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar.vue'
import filmheard from './filmheard.vue'
export default {
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
    tabbar,
    filmheard
  }
}
</script>
