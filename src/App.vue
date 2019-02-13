<template>
  <div>
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppLayout from './layouts/AppLayout'
import SimpleLayout from './layouts/SimpleLayout'

export default {
  computed: mapGetters(['loading', 'user','layout']),
  components: {
    'app-layout': AppLayout,
    'simple-layout': SimpleLayout
  }
}
</script>
