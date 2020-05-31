import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Forget from '../views/Forget.vue'
import NotFound from '../views/404.vue'
import BooksQuery from '../views/user/BooksQuery.vue'
import Borrows from '../views/user/Borrows.vue'
import SelfInfo from '../views/user/SelfInfo.vue'
import Lend from '../views/worker/Lend.vue'
import Return from '../views/worker/Return.vue'
import Census from '../views/worker/Census.vue'
import OvertimeCensus from '../views/worker/OvertimeCensus.vue'
import UserEntry from '../views/root/UserEntry.vue'
import UserDelete from '../views/root/UserDelete.vue'
import BookEntry from '../views/root/BookEntry.vue';
import BookDelete from '../views/root/BookDelete.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {path: '/', component: BooksQuery},
      {path: '/booksquery', name: 'booksquery', component: BooksQuery},
      {path: '/borrows', name: 'borrows', component: Borrows},
      {path: '/selfinfo', name: 'selfinfo', component: SelfInfo},
      {path: '/lend', name: 'lend', component: Lend},
      {path: '/return', name: 'return', component: Return},
      {path: '/census', name: 'census', component: Census},
      {path: '/overtimecensus', name: 'overtimecensus', component: OvertimeCensus},
      {path: '/userentry', name: 'userentry', component: UserEntry},
      {path: '/userdelete', name: 'userdelete', component: UserDelete},
      {path: '/bookentry', name: 'bookentry', component: BookEntry},
      {path: '/bookdelete', name: 'bookdelete', component: BookDelete},
    ]
  },
  {
    path: '/*',
    name: '404',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: '/book/',
  routes
})

router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.eleToken? true : false
  if(to.path == '/login' || to.path == '/forget'){
    next()
  }else{
    isLogin? next() : next('/login')
  }
})

export default router
