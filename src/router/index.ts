import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/ex06.vue",
    component: () => import("../views/Ex06.vue"),
  },
  {
    path: "/ex05.vue",
    component: () => import("../views/Ex05.vue"),
  },
  {
    path: "/ex04.vue",
    component: () => import("../views/Ex04.vue"),
  },
  {
    path: "/ex03.vue",
    component: () => import("../views/Ex03.vue"),
  },
  {
    path: "/ex02.vue",
    component: () => import("../views/Ex02.vue"),
  },
  {
    path: "/ex01.vue",
    component: () => import("../views/Ex01.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
