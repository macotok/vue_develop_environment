import Vue from 'vue';
// import Vuex from 'vuex';
import App from './App';
// import _store from './store';

// Vue.use(Vuex);

// const store = new Vuex.Store(_store);

const app = new Vue({
  components: { App },
  template: '<App/>',
  // store,
});
app.$mount('#app');
