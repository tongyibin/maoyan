<template>
  <div class="home">
    <keep-alive include="index">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="less" scoped>
.home{
  height: 100%;
}
</style>
