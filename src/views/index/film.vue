<template>
  <div>

    <van-tabs v-model="tabAct" sticky>
      <van-tab title="正在热映">
        <FilmList film-type="nowPlaying" :list="filmList"></FilmList>
      </van-tab>
      <van-tab title="即将上映">
        <FilmListq film-type="comingSoon" :list="filmListq"></FilmListq>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FilmList from '@/components/FilmList.vue';
import FilmListq from '@/components/FilmListq.vue';
export default {
  name: 'Film',
  data () {
    return {
      tabAct: 0
    }
  },
  components: {
    FilmList,
    FilmListq,

  },
  computed: {
    ...mapState('film',['filmList','curFilmType','filmListq'])
  },

  methods: {
    ...mapActions('film',['getFilmList','getFilmList_q']),

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
    this.getFilmList();
     this.getFilmList_q();

    window.addEventListener('scroll', this.onScroll)
  }

}
</script>

<style lang="less" >
@import '~@/styles/common/mixin.less';

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

