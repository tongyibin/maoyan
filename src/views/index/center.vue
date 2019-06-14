<template>
  <div id="center">
    <div class="main">我的</div>
    <div class="headimg">
      <img src="https://img.meituan.net/avatar/9fb87ff410d16bbb1d583b4fc93bac6736675.jpg" alt="">
    </div>
    <div class="myorder">
      <div class="myorder-my">我的订单</div>
      <div class="movie">
        <div class="movie-left">
          <img src="http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png" alt="">
          <a href="#">电影</a>
          </div>
        <div class="movie-right">
          <img src="http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png" alt="">
          <a href="#">商城</a>
          </div>
      </div>
      </div>
      <div>
      <div class="list">
        <div class="list-card">在线观影</div>
        <div class="list-card">优惠券</div>
        <div class="list-card">折扣卡</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
#center{
  height: 100%;
  background-color: #f3f3f3;
  .main{
    display: block;
    font-size: 18px;
    width: 100%;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0 52.5px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
    background: #e54847;
  }
  .headimg{
    background: #e54847;
    background-repeat: no-repeat;
    background: url(http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
    background-position: 50%;
    background-size: 100% 150px;
    height: 150px;
    overflow: hidden;
    text-align: center;
    img{
    display: inline-block;
    margin-top: 30px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 3px solid #fff;
    }
  }
  .myorder{
    background: #fff;
    padding: 0 15px;
    margin: 8px 0;
    position: relative;
    overflow: hidden;
    text-align: center;
    .myorder-my{
    position: relative;
    margin: 13px 0 0;
    font-size: 15px;
    line-height: 21px;
    height: 21px;
    color: #333;
    z-index: 9;
    display: inline-block;
    width: 80px;
    background-color: #fff;
    }
  }

  .movie{
    display: flex;
    .movie-left,.movie-right{
    height: 97px;
    flex: 1 0 auto;
    flex-direction: column;
    margin-top: 18px;
    img{
      width: 42px;
      height: 42px;
    }
    a{
      display: block;
      text-align: center;
      font-size: 15px;
      line-height: 21px;
      height: 21px;
      margin: 0;
      color: #333;
    }
   }
  }
  .list{

    .list-card{
      text-indent: 15px;
      position: relative;
      height: 44px;
      line-height: 44px;
      font-size: 15px;
      padding-right: 15px;
      background: #fff;
      border-bottom:1px solid #e9e9e9 ;
    }
  }
}
</style>
