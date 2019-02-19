import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('./views/Introduction.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('./views/Career.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import('./views/Skill.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
