import Vue from 'vue'
import Vuex from 'vuex'
import Category from './modules/Category'
import List from './modules/List'
import News from './modules/News'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag:true
  },
  mutations: {
    changeFlag(state){
      state.flag = false
    }
  },
  actions: {
  },
  modules: {
    Category,
    List,
    News
  }
})
