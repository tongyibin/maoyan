<template>
  <div id="cinema">
    <div class="cinema-a">影院</div>
    <div class="cinema-b">
      <div class="cinema-city-search">
        <router-link to="/city" tag="div">
          <a href="#">深圳</a>
          <i class="xiajiantou"></i>
        </router-link>
        <!-- 影院搜索 -->
        <div class="cinema-search">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="
            alt
          >
          <span>搜影院</span>
        </div>
      </div>
    </div>
    <!-- 筛选城市影院 -->
    <div class="cinema-screen">
      <div class="cinema-screen-city">
        全城
        <span class="xiajiantou"></span>
      </div>
      <span class="screen-span">|</span>
      <div class="cinema-screen-city">
        品牌
        <span class="xiajiantou"></span>
      </div>
      <span class="screen-span">|</span>
      <div class="cinema-screen-city">
        特色
        <span class="xiajiantou"></span>
      </div>
    </div>
    <div class="cinema-d">
      <!-- 城市影院列表 -->
      <cinemalist :list="information" :lists="cinemslist" id="cinemalist"/>
    </div>
  </div>
</template>
<script>
import cinemalist from "@/components/cinemalist.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "cinema",
  data() {
    return {
      information: ""
    };
  },
  components: {
    cinemalist
  },
  computed: {
    ...mapState("cinema", ["cinemslist"])
  },
  methods: {
    ...mapActions("cinema", ["getcinema"]),
    //滚动条滚动
    // onscroll() {

    //     // window.pageYOffset ||
    //     // document.documentElement.scrollTop ||
    //     // document.body.scrollTop;
    //   let scrolltop=document.documentElement.scrollTop
    //   console.log(scrolltop);
    // }
  },
  created() {
    this.getcinema();
    // window.addEventListener("scroll", this.onscroll, true);
  }
};
</script>


