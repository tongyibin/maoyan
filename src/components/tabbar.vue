<template>
  <ul class="tabbar">
   <router-link :to="tab.href" tag="li"
   v-for="tab in tabs"
   :key="tab.id"
   active-class="z-act"
   >
    <i :class="['iconfont',tab.icon]"></i>
    <span>{{tab.name}}</span>
   </router-link>
  </ul>
</template>
<script>

export default {
  name: 'tabbar',
  props: {
    tabs: Array
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixin.less';
  .tabbar{
    position: fixed;
    bottom: -3px;
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    margin: 0;
    z-index: 100;
    background: #fff;
    list-style: none;
    li{
        flex: 1;
        text-align: center;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: @tabcolor;

        .iconfont {
        font-size: 24px;
        margin-bottom: 4px;
        }
        span{
            font-size:14px;
        }
        &.z-act{
            color: @tabcolorActive;
        }
    }
  }
</style>
