import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:8091';

Vue.use(Vuex)

export default new Vuex.Store({
  debug: true,
  state: {
    user2: null,
    user: {
      name: 'First User',
      email: 'test@test.com',
      role: 'MCG-Admin'
    },
    products: [],
    loading: false,
    error: null,
    theme: 'mcb-theme',
    layout: 'app-layout'
  },
  mutations: {
    setUser (state, payload) {
      console.log('setUser Mutation')
      state.user = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    setLoading (state, payload) {
      console.log('setLoading Mutation')
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
    setLayout(state, payload) {
      state.layout = payload
    }
  },
  actions: {
    clearError({ commit }) {
      commit('clearError')
    },
    loadProducts({ commit }) {
      /*
      Axios.get('/products')
        .then(function (response) {
          commit('setProducts', response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      */
      const products = [
        {
          id: 1,
          name: 'Product Electricity',
          description: 'Description for the product.',
          imageUrl: 'https://idateadvice.com/wp-content/uploads/2017/08/Ukraine-690x518.jpg?d6e458&d6e458'
        },
        {
          id: 2,
          name: 'Product Electricity 2',
          description: 'Description for the product.',
          imageUrl: 'https://idateadvice.com/wp-content/uploads/2017/08/Ukraine-690x518.jpg?d6e458&d6e458'
        },
        {
          id: 3,
          name: 'Product Electricity 3',
          description: 'Description for the product.',
          imageUrl: 'https://idateadvice.com/wp-content/uploads/2017/08/Ukraine-690x518.jpg?d6e458&d6e458'
        }
      ]
      commit('setProducts', products)
    },
    onAbout({ commit }) {
      // TESTING
      console.log('working...')
      commit('setLoading', true)

      // wait for 7 seconds
      var start = new Date().getTime();
      var end = start;
      while (end < start + 2000) {
        end = new Date().getTime();
      }

      commit('setLoading', false)
      console.log('working end...')
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    user (state) {
      return state.user
    },
    products (state) {
      return state.products
    },
    theme (state) {
      return state.theme
    },
    layout (state) {
      return state.layout
    }
  }
})
