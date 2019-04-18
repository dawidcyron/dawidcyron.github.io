import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Hello from './views/Hello.vue';
import notFound from './views/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
    {
      path: '*',
      name: '404',
      component: notFound,
    },
  ],
});
