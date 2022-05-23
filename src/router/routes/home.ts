import { RouteRecordRaw } from "vue-router"
import HomePage  from '../../view/home/HomePage.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  }
]