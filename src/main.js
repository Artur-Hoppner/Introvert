import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vSelect from 'vue-select';
import Axios from 'axios';
import vuetify from './plugins/vuetify';

Vue.component('v-select', vSelect);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');