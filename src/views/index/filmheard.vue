<template>
  <div class="navbar-box">
     <header class="navbar " >
    <h1 class="nav-header">猫眼电影</h1>
  </header>
  </div>
</template>

<script>
export default {
  name:'filmheard',

}
</script>

<style lang="less" scoped>
.navbar {
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;


    .nav-header {
      height: 50.5px;
      line-height: 50.5px;
      margin-right: 0!important;

      display: block;
      -webkit-box-flex: 1;
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      line-height: 50px;
      margin: 0 52.5px 0 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

    }
}

</style>

