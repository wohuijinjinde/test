<template>
  <div class="header">
    <div class="left-box">
      <slot name="left"></slot>
    </div>
    <div class="center-box">
      <slot name="center">
        <i class="fa fa-search"></i>&nbsp;&nbsp;
        <label for="search" v-show="false"></label>
        <input
            id="search"
            type="text"
            placeholder="请输入关键字..."
            class="ipt-search"
            >
      </slot>
    </div>
    <div class="right-box">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hearder",

  }
</script>

<style scoped>
  .header {
    padding: 8px 15px;
    background-color: #d33d3e;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left-box{
    /*width: 30px;*/
    color: #fff;
    display: flex;
    align-items: center;
  }
  .center-box{
    flex: 1;
    background-color: #fff;
    padding-left: 8px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin: 0 5px;
  }
  input{
    background-color: transparent;
  }
  .right-box{
    /*width: 30px;*/
    color: #fff;
    display: flex;
    align-items: center;
  }
  .search-box>i {
    color: #707070;
  }
  .ipt-search {
    width: calc(100% - 26px);
    border: none;
    outline: none;
    line-height: 32px;
  }


</style>
