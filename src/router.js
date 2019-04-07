import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Home from './views/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const Router = new VueRouter({
  routes:[
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/home',
      component: Home
    },
  ]
})

export default Router;


