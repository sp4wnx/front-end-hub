import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signin from '../components/User/Signin.vue'
import Signup from '../components/User/Signup.vue'
import Products from '../views/Products.vue'
import Support from '../views/Support.vue'
import AuthGuard from './auth-guard'
import ProductProperty from '../views/ProductProperty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
      beforeEnter: AuthGuard
    },
    {
      path: '/support',
      name: 'Support',
      component: Support,
      beforeEnter: AuthGuard
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      beforeEnter: AuthGuard
    },
    {
      path: '/product-property',
      name: 'Product Property',
      component: ProductProperty,
      beforeEnter: AuthGuard
    },
    { 
      path: '*', 
      redirect: '/signin'
    },
    {
        path: '/signup',
        component: Signup,
        name: "Sign Up"
    }
  ],
  mode: 'history'
})
