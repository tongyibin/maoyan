<template>
   <ul class="film-list film-tabs">
          <li class="film-item" v-for="film in list" :key="film.movieIds">
            <img
            class="film-img"
            :src="film.img" alt="">
            <div class="film-info">
              <p class="film-info_name">{{ film.nm }}</p>
              <p class="film-info_grade" v-if="film.sc !== 0">观众评 <span class="grade_sp">{{ film.sc }}</span></p>
              <p class="film-info_grade" v-else><span class="grade_sp">{{ film.wish }}</span>人想看</p>
              <p class="film-info_actors">主演:{{ film.star }}</p>
              <p class="film-info_msg">{{ film.showInfo }}</p>
            </div>
            <div v-if="film.sc !== 0" class="film-buy film-buy_act">
              <span class="film-buy_s" v-if="filmType === 'nowPlaying' && film.sc !== 0">购票</span>
              <span class="film-buy_s" v-else>预约</span>
            </div>
            <div v-else class="film-buy_act">
              <span class="film-buy_s" v-if="filmType === 'nowPlaying' && film.sc !== 0">购票</span>
              <span class="film-buy_s" v-else>预约</span>
            </div>
          </li>
        </ul>
</template>

<script>
export default {
  name:"filmilst",
  props: {
    filmType: {
      validator (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['nowPlaying', 'comingSoon'].indexOf(value) !== -1
      }
    },

    list: {
      type: Array
    }
  }
}

</script>

<style lang="less" >
  .film-buy_act {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #3c9fe6;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
  }
</style>
