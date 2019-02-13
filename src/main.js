import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import LoadingComponent from 'vue-full-loading'

import MainNavigationComponent from './components/MainNavigation'
import LeftsideNavigationComponent from './components/LeftsideNavigation'
import FeaturedProductsComponent from './components/FeaturedProducts'
import FeaturedProductsCarouselComponent from './components/FeaturedProductsCarousel'
import SigninComponent from './components/User/Signin'
import MessageFormComponent from './components/Message'

import ProductProperty from './components/Product/Property'

import './assets/scss/_custom.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('main-navigation-component', MainNavigationComponent)
Vue.component('leftside-navigation-component', LeftsideNavigationComponent)
Vue.component('featured-products-component', FeaturedProductsComponent)
Vue.component('featured-products-carousel-component', FeaturedProductsCarouselComponent)
Vue.component('loading-component', LoadingComponent)
Vue.component('signin-component', SigninComponent)
Vue.component('message-form-component', MessageFormComponent)

Vue.component('product-property', ProductProperty)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
