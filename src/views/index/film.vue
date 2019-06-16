<template>
  <div>
    <div class="film-title">猫眼电影</div>
    <div class="film-nav">
      <router-link to="/city" tag="div">
      <div class="nav-city">
         <a href="#">深圳</a>
          <i class="xiajiantou"></i>
      </div>
      </router-link>

      <div click="nav-center">
      <van-tabs v-model="tabAct" id="nav-sticky" title-active-color="#ef4238">
          <van-tab title="正在热映">
            <keep-alive include="filmilst">
            <FilmList film-type="nowPlaying" :list="filmList"></FilmList>
            </keep-alive>
          </van-tab>
          <van-tab title="即将上映">
            <keep-alive include="filmilsts">
            <FilmListq film-type="comingSoon" :list="filmListq"></FilmListq>
            </keep-alive>
          </van-tab>
      </van-tabs>
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FilmList from '@/components/FilmList.vue'
import FilmListq from '@/components/FilmListq.vue'
export default {
  name: 'film',
  data () {
    return {
      tabAct: 0,
      index: ''
    }
  },
  components: {
    FilmList,
    FilmListq

  },
  computed: {
    ...mapState('film', ['filmList', 'curFilmType', 'filmListq'])
  },

  methods: {
    ...mapActions('film', ['getFilmList', 'getFilmList_q'])

    // onScroll () {
    //   let scrollTop = document.documentElement.scrollTop;

    //   let srollHeight = document.body.scrollHeight;
    //   let clienHeight = document.documentElement.clientHeight;

    //   if ( (srollHeight - clienHeight ) - scrollTop < 50 ) {
    //       console.log('到底');
    //   }
    // }

  },
  created () {
    this.getFilmList()
    this.getFilmList_q()

    // window.addEventListener('scroll', this.onScroll)
  },
  // 激活
  activated () {
  },
  // 失活
  deactivated () {

  }

}
</script>

<style lang="less" >
@import '~@/styles/common/mixin.less';
.film-title{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    display: block;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    white-space: nowrap;
    overflow: hidden;
}
// #nav-sticky{
//
// }
.van-tabs__wrap {
    margin-left: 64px;
    position: fixed;
    top: 50px;
    }
  .title-active-color{
    color: #ef4238;
  }
  .title-inactive-color{
    font-size: 15px;
    color: #666;
  }
.film-nav{
  background: #fff;
  margin-top: 50px;
  .nac-center{
    font-size: 15px;
  }
  .nav-city{
    float: left;
    margin-top: 1.5px;
    padding-top: 15px;
    margin-left: 15px;
    position: fixed;
    background: #fff;
    width: 50px;
    height: 27px;
    top:50px;
    z-index: 100;

     .xiajiantou{
    margin-right: 5px;
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
  }
  }
}
.film-tabs {
  padding-bottom: 50px;
}
.film-list {
    padding-left: 15px;
    background-color: #fff;
    .film-item {
    .border-bottom;
    display: flex;
    height: 114px;
    padding-top:12px;
    position: relative;
    box-sizing: border-box;
    align-items: center;
      .film-img {
        width: 64px;
        height: 90px;
      }
      .film-info {
        width: 206px;
        padding-left: 12px;
        color: #333;
        font-size: 13px;
        line-height: 24px;
        .grade_sp{
          font-weight: 700;
          color: #faaf00;
          font-size: 15px;
        }
        .film-info_name {
          font-size: 17px;
          font-weight: 700;
          padding-right: 5px;
          flex-shrink: 1;
          }
         .film-info_actors {
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
         }

      }
      .film-buy {

            width: 47px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            box-sizing: border-box;
            background-color: #f03d37;
            color: #fff;
            border-radius: 4px;
            white-space: nowrap;
            font-size: 12px;
            cursor: pointer;
         }
    }
}
</style>
