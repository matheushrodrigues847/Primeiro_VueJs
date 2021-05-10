import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';
//globalViewObject
//el -> elemento html

//para usar a api
//registrando vueResource
//usado ao inves do fetch
Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

//view instance
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
