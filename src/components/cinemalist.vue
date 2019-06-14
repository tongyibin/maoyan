//影片列表组件
<template>

<div>
  <div class="cinema-list"
  v-for="list in lists"
  :key="list.id"
  >
        <div class="list-box">
           <!-- 影院名 -->
          <div class="list-title">
            <span class="list-title-t">{{list.nm}}</span>
            <span class="list-span">
              <span class="list-price">{{list.sellPrice}}</span>
              <span class="list-price-m">元起</span>
            </span>
          </div>
          <!-- 影院地址 -->
          <div class="list-site">
            <div class="site-top">{{ list.addr }}</div>
            <div class="site-bottom">{{ list.distance }}</div>
          </div>
          <!-- 影院标签 -->
          <div class="list-label">
            <div class="list-retreat list-block">退</div>
            <div class="list-change list-block">改</div>
            <div class="list-snack list-block">小吃</div>
            <div class="list-card list-block">折扣卡</div>
          </div>
          <!-- 开卡特惠 -->
          <div class="list-discounts">
            <div>
              <div class="discounts-img">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
              </div>
              <div class="discounts-price">
                {{ list.promotion.cardPromotionTag }}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


</template>
<script>

export default {

  props:{
    list:String,
    //影片数据
    lists:{
      lists:String
    }
  },
  methods:{
    // onscroll() {
    //   let scrollTop =document.getElementsByClassName('cinema-list')[0].scrollTop
    //   console.log(scrollTop);
    // }
  },
  created() {

    // window.addEventListener("scroll", this.onscroll, true);
  }

}
</script>
