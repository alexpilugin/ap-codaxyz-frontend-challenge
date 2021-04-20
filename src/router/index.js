import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { APIService } from '../services';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        ///game/2323?name=Basketball%20Game
        path: "/game/:id/image",
        component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue'),
        props: true
      }
    ]
  },
  {
    // HINT: /game/2323?name=Basketball%20Game
    path: '/game/:id',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Game.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  window.document.title = to.name;

  await APIService.api.sendEvent(to.name);

  return next();
});

export default router
