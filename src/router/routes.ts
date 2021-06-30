import { RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    path: "/newsfeed",
    name: "newsfeed",
    component: () =>
      import("../views/newsfeed.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/contents/:id",
    name: "viewDetails",
    component: () =>
      import("../views/Details.vue"),
    props: true
  },
];

export default routes;