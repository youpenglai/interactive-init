import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import config from '../public/plinteractive';

export default new Router({
  mode: config.mode,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "main" */ './views/Main.vue')
    },
    {
      path: '/client',
      name: 'client',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Client.vue')
    },
    {
        path: '/console',
        name: 'console',
        component: () => import(/* webpackChunkName: "console" */ './views/Console.vue')
    },
    {
        path: '/config',
        name: 'config',
        component: () => import(/* webpackChunkName: "config" */ './views/Config.vue')
    },
  ]
})
