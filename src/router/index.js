import { createRouter, createWebHistory } from '@ionic/vue-router';
import TodoPage from '../pages/TodoPage.vue';
import PronoPage from "@/pages/PronoPage";

const routes = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  /*{
    path: '/todos',
    name: 'TodoPage',
    component: TodoPage
  },
  {
    path: '/todos/add',
    component: () => import('../pages/AddTodoPage.vue')
  },
  {
    path: '/todos/:id',
    component: () => import('../pages/TodoDetail.vue')
  },*/
  {
    path: '/tabs/',
    component: () => import("../pages/TabsPage.vue"),
    children: [
      {
        path: "",
        redirect: "/tabs/home"
      },
      {
        path: "home",
        component: () => import('../pages/HomePage.vue')
      },
      {
        path: "league/",
        component: () => import('../pages/LeaguePage.vue')
      },
      {
        path: "pronos",
        component: PronoPage
      },
      {
        path: 'pronos/add',
        component: () => import('../pages/AddPronoPage.vue')
      },
      {
        path: 'pronos/:id',
        component: () => import('../pages/PronoDetail.vue')
      },
      {
        path: "todos",
        component: TodoPage
      },
      {
        path: "account",
        component: () => import('../pages/AccountPage.vue')
      },
      {
        path: 'todos/add',
        component: () => import('../pages/AddTodoPage.vue')
      },
      {
        path: 'todos/:id',
        component: () => import('../pages/TodoDetail.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
