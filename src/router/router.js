import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        hideMenu: true,
      },
      component: () => import("../views/Home/Home"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      meta: {},
      component: () => import("../views/Dashboard/Dashboard"),
    },
  ],
});


export default router;
