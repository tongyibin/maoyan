<template>

   <ul class="film-list film-tabs">

     <vivi></vivi>

    <li class="film-item" v-for="film in list" :key="film.movieIds">
      <img
      class="film-img"
      :src="film.img" alt="">
      <div class="film-info">
        <p class="film-info_name">{{ film.nm }}</p>
        <p class="film-info_grade" > <span class="grade_sp">{{ film.wish }}</span>人想看</p>
        <p class="film-info_actors">主演:{{ film.star }}</p>
        <p class="film-info_actors">{{ film.rt }}上映</p>
      </div>
        <div class="film-buy_act">
          <span class="film-buy_s">预约</span>
        </div>
    </li>
  </ul>
</template>

<script>
import vivi from './vivi.vue';
export default {
  props: {
    filmType: {
      validator (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['nowPlaying', 'comingSoon'].indexOf(value) !== -1
      }
    },

    list: {
      type: Array
    },

  },

  components: {
    vivi
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
