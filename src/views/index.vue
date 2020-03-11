<template>
  <div>
    <keep-alive>
      <animate-view></animate-view>
    </keep-alive>
    <header-nav>
      <i class="fa fa-qrcode icon-qrcode" slot="right"></i>
    </header-nav>
    <tab-list></tab-list>
  </div>
</template>

<script>
  import headerNav from  '../components/hearder'
  import tabList from  '../components/tabList'
  import animateView from './animateView'
  export default {
    name: "index",
    components:{
      headerNav,
      animateView,
      tabList
    }
  }
</script>

<style scoped>

  .icon-qrcode{
    font-size: 30px;
  }
</style>
