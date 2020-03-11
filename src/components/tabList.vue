<template>
  <div>
    <ul class="tab-list">
      <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-item"
          :class="{'is-active': index === activeTabIndex}"
          @click="toggleTab(tab, index)">
        {{ tab }}
      </li>
    </ul>
    <ul class="news-list">
      <li
          v-for="(item, index) in list"
          :key="index"
          class="news-item"
          @click="toNews(item)">
        <div class="news-media">
          <img class="news-thumbnail" :src="item.thumbnail">
          <div class="news-profile">
            <p>{{ item.title }}</p>
            <p class="news-mark">
              <Badge v-if="item.isHot" text="热点"></Badge>
              <span>{{ item.source }}</span>&nbsp;&nbsp;
              <span>{{ item.time | supplyTime }}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  import Badge from './Badge'
  export default {
    name: "tabList",
    components: { Badge },
    data () {
      return {
        activeTabIndex: 0
      }
    },
    computed: {
      ...mapGetters('Category', ['categories']),
      ...mapGetters('List', ['list']),
      tabs () {
        return ['推荐', '热点'].concat(this.categories)
      }
    },
    methods: {
      ...mapActions('Category', ['getCategories']),
      ...mapActions('List', ['getListByCategory']),
      toggleTab(n,i){
        this.activeTabIndex = i
        this.getListByCategory({
          category: n
        })
      },
      toNews (news) {
        this.$router.push({ path: 'news', query: { id: news.id } })
        // this.$router.push({ path: 'a' })
      },
    },
    created () {
      this.$nextTick(function () {
        this.getCategories()
        this.getListByCategory({
          category: '推荐'
        })
      })
    },
    filters: {
      supplyTime (value) {
        return value.substring(0, 10)
      }
    }
  }
</script>

<style scoped>
  .tab-list {
    list-style: none;
    border-bottom: 1px solid #e8e8e8;
  }
  .tab-item {
    box-sizing: border-box;
    display: inline-block;
    width: 14%;
    line-height: 32px;
    color: #222;
    font-size: 14px;
    text-align: center;
  }
  .tab-item.is-active {
    color: #d33d3e;
  }
  .news-list {
    list-style: none;
    height: calc(100% - 80px);
    overflow-y: auto;
  }
  .news-item {
    overflow: hidden;
    padding: 12px 8px;
    border-bottom: 1px solid #e8e8e8;
  }
  .news-media {
    overflow: hidden;
    position: relative;
  }
  .news-thumbnail {
    float: left;
    width: 100px;
    padding-right: 8px;
  }
  .news-profile {
    overflow: hidden;
  }
  .news-mark {
    margin-top: 5px;
    font-size: 12px;
    color: #a9a9a9;
  }
</style>
