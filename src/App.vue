<template>
  <div id="app">

    <div class="container">
      <router-view v-if="isMobile"/>
      <h1 v-else>请在手机端上访问</h1>
    </div>
  </div>
</template>

<script>
export default {
  name : 'app',
  computed: {
    isMobile () {
      return document.body.clientWidth < 500
    }
  }
}

</script>
<style lang="less">
  .container {
    height: 100%;
    user-select: none;
  }
</style>
