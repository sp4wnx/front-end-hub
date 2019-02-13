import store from '../store'

export default (to, from, next) => {
  const currentPath = to.matched[0].path

  if (store.getters.user) {
    if (currentPath == '/signin') {
      console.log('logged user can not see Signin Page, redirecting to Home')
      next('/')
    } else {
      console.log('Continue to the next page')
      next()
    }
  } else if (!store.getters.user && currentPath == '/signin') {
    console.log('Not logged user acessing Signin Page. So just pass by.')
    store.commit('setLayout', 'simple-layout')
    next()
  } else {
    console.log('not logged user')
    store.commit('setLayout', 'simple-layout')
    next('/signin')
  }
}