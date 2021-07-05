import { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/home",
    name: RouteName.Home,
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/post/editpost/:id",
    name: RouteName.EditPost,
    component: () => import("../views/EditPost.vue"),
    props: true,
  },

  {
    path: "/post/viewpost/:id",
    name: RouteName.ViewPost,
    component: () => import("../views/ViewPost.vue"),
    props: true,
  },

  {
    path: "/feed",
    name: RouteName.FeedPage,
    component: () => import("../views/FeedPage.vue"),
  },
];

export default routes;