import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/layout/Main.vue";
import Events from "../views/pages/event/Events.vue";
import EventDetail from "../views/pages/event/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/",
        name: "Events",
        component: Events,
      },
      {
        path: "/events",
        name: "Events",
        component: Events,
      },
      {
        path: "/events/:id",
        name: "EventDetail",
        component: EventDetail,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
