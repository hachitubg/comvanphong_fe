import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/HomePage.vue";
import MenuManagement from "@/components/MenuManagement.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "MenuManagement",
    component: MenuManagement,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
