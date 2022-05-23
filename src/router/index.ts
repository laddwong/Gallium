import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import { routes as home } from './routes/home' 

let allRoutes: Array<RouteRecordRaw> = []
allRoutes = allRoutes.concat(home)

export const router: Router = createRouter({
  routes: allRoutes,
  history: createWebHashHistory()
})