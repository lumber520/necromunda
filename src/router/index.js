import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gangs",
    name: "Gangs",
    component: () =>
      import(/*webpackChunkName:"Current-table" */ "../views/GangList")
  },
  {
    path: "/games-played",
    name: "GamesPlayed",
    component: () =>
      import(/*webpackChunkName:"Games-played" */ "../views/GamesPlayed")
  },
  {
    path: "/most-wanted",
    name: "MostWanted",
    component: () =>
      import(/*webpackChunkName:"Most-wanted" */ "../views/MostWanted")
  },
  {
    path: "/report/:gameId",
    name: "Report",
    props: true,
    component: () =>
      import(/*webpackChunkName:"Most-wanted" */ "../views/FullReport")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
