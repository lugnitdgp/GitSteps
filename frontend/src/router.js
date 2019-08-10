import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Schedule from './views/Schedule.vue'
import PrizesAndRewards from './views/PrizesAndRewards.vue'
import FAQ from './views/FAQ.vue'
import Contact from './views/Contact.vue'
import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/prizes-and-rewards',
      name: 'prizes-and-rewards',
      component: PrizesAndRewards
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound
    },
  ]
})
