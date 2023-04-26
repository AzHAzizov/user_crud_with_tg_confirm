import Users from "@/pages/Users"
import { createRouter, createWebHistory } from "vue-router"


const routes = [
  {
    path: "/",
    component: Users
  }
]


const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});


export default router;