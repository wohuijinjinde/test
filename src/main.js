import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/stylesheets/base.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false;

Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
