import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegisterView from "@/views/RegisterView.vue";
import ChatContactView from "@/views/ChatContactsView.vue";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import RegisterContactView from "@/views/RegisterContactView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/registercontact",
    name: "registercontact",
    component: RegisterContactView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
