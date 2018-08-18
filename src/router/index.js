import Vue from 'vue'
import Router from 'vue-router'
import General from '@/components/General'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'General',
      component: General
    }
  ]
})
