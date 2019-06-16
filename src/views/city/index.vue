<template>
  <div id="city">
    <div class="city-title">定位城市</div>
    <!-- 最近访问城市 -->
    <div>
      <div class="city-title">最近访问城市</div>
      <div>
        <ul class="city-lately">
          <li class="city-name">深圳</li>
          <li class="city-name">北京</li>
          <li class="city-name">成都</li>
        </ul>
      </div>
    </div>
    <!-- 热门城市列表 -->
    <div class="city-hot">
      <div class="city-title">热门城市</div>
      <div>
        <ul class="city-lately">
          <li class="city-name"
           v-for="list in citylist.slice(0,7)"
          :key="list.id"
          >{{ list.nm }}</li>

        </ul>
      </div>
    </div>
    <!-- 城市列表 -->
    <div>
      <div class="city-list"
      v-for="item in newcitylist"
      :key="item.py"
      >
        <div class="city-title">{{ item.py }}</div>
        <div class="city-lately">
          <ul class="city-border">
            <li class="city-names" v-for="city in item.list"
            :key="city.id">
            {{ city.nm }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 侧边导航栏 -->
    <div class="city-nav">
      <ul>
        <li class="city-a"
        v-for="py in newcitylist"
        :key="py.py" @click="fn1"
        >
        {{py.py}}
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
#city{
  height: 100%;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;
  // 小标题
  .city-title{
    padding-left: 15px;
    line-height: 30px;
  }
  .city-lately{
    height: 100%;
    // width: 100%;
    display: flex;
    overflow-x: hidden;
    flex-wrap: wrap;

    background-color: #f5f5f5;
    padding-bottom: 8px;
    padding-right: 30px;
  }
  .city-name{
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 0;

    text-overflow: ellipsis;
  }
  .city-names{
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
    border-bottom: 1px solid #c8c7cc
  }
  .city-border{
    width: 100%;
  }
  .city-nav{
    position: fixed;
    top: 75px;
    top: 11vh;
    right: 0;
    width: 35px;
    z-index: 10;
    text-align: center;
    font-size: 12px;
  }
  .city-a{
    width: 20px;
    margin-top: 10px;
    margin-left: 15px;
  }

}
</style>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'city',
  computed: {
    ...mapGetters('city', ['newcitylist']),
    ...mapState('city', ['citylist'])
  },
  methods: {
    ...mapActions('city', ['getcitylist']),
    fn1 () {
      console.log('a')
    }
  },
  created () {
    this.getcitylist()
  }
}

</script>
