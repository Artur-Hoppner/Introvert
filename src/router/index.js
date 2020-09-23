import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import Login from '../views/Login/Login.vue';
import Registrate from '../views/Registrate/Registrate.vue';
import NewEvent from '../views/NewEvent/NewEvent.vue';
import User from '../views/User/User.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { loggedIn: true }
    },
    {
      path: '/registrate',
      name: 'Registrate',
      component: Registrate,
      meta: { loggedIn: true }
    },
    {
      path: '/newevent',
      name: 'NewEvent',
      component: NewEvent,
      meta: { guest: true }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: { guest: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loggedIn)) {
    if (localStorage.getItem('token')) {
      next('/user');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('token') == null) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
