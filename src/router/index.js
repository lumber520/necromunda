import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FullReport from "../views/FullReport";
const routes = [
  {
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/fullreport",
    name: "Report",
    component: FullReport
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
