<template>
  <div>
    <div class="vivi-most">
      <p class="vivi-title">近期最受期待</p>
      <div class="vivi-xbox" >
        <div class="vivi-xbox_a" v-for="item in 10" :key="item">
          <img src="https://p0.meituan.net/170.230/movie/e11213b2676bcf6f4eac41c482af2bdd327884.jpg">
          <span class="vivi-wish"><span class="vivi-num">395514</span>人想看</span>

          <h5 class="vivi-line">少年的你</h5>
          <p class="vivi-date">6月27日</p>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'vivi',

  props: {
  }
}
</script>

<style lang="less" scoped >
.vivi-most{
  height: 216px;
  padding: 12px 0;
  box-sizing: border-box;

  .vivi-title{
    margin: 0 0 12px;
    font-size: 14px;
    color: #333;
  }

  .vivi-xbox{
    overflow: scroll;
    white-space: nowrap;

    .vivi-xbox_a{
      display: inline-block;
      width: 85px;
      overflow: hidden;
      position: relative;
      margin-right: 12px;

      img{
        width: 85px;
        height: 115px;
        position: relative;
      }
      .vivi-wish{
        position: absolute;
        left: 4px;
        bottom: 35px;
        color: #faaf00;
        font-size: 11px;
        font-weight: 600;
      }
      .vivi-line{
        margin: 0 0 3px;
        font-size: 13px;
        color: #222;
      }
      .vivi-date{
        margin: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
}

</style>
