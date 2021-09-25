import { createRouter, createWebHistory } from "vue-router";

import Login from "../../components/views/Login.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;