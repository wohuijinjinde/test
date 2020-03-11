<template>
    <div class="container" v-if="$store.state.flag">
      <span class="btn-redirect" @click="redirect">点击进入{{time}}s</span>

    </div>
</template>

<script>

  export default {
    name: "animateView",
    data(){
      return {
        time:5,
        // active: true
      }
    },
    computed:{

    },
    methods: {
      redirect () {
        // this.active = false;
        this.$store.commit('changeFlag')
      }
    },
    created() {

    },
    mounted() {
    },
    activated(){
      let timer = setInterval(()=>{
        if(this.time <= 0){
          // this.active = false;
          this.$store.commit('changeFlag')

          clearInterval(timer);
        }else {
          this.time--
        }
      },1000)
    }


  }
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(../assets/images/index.gif);
    background-position: center bottom;
    background-repeat: no-repeat;
    z-index: 1;
  }
  .btn-redirect {
    float: right;
    margin: 3px;
    padding: 1px 8px;
    background-color: #919191;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
</style>
