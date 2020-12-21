import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/test.vue")
  },
  {
    path: "/",
    component: () => import("@/views/layout/"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home/home.vue")
      },
      {
        path: "/qa",
        home: "qa",
        component: () => import("@/views/qa/qa.vue")
      },
      {
        path: "/video",
        home: "viedo",
        component: () => import("@/views/video/video.vue")
      },
      {
        path: "/userinfo",
        home: "userinfo",
        component: () => import("@/views/userinfo/userinfo.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
