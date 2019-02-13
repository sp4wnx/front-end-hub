<template>
    <div>
        <b-navbar id="nav-desktop" toggleable="sm" type="dark">

            <b-navbar-toggle target="nav_collapse" @click="burgerMenu = !burgerMenu"></b-navbar-toggle>

            <b-navbar-brand to="/">MyClubHub</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/products">Products</b-nav-item>
                    <b-nav-item to="/Support">Support</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                    <b-nav-item to="/signup">Sign up</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <!--<b-nav-item @click="burgerMenu = !burgerMenu">Test Mobile/Tablet Menu</b-nav-item>-->
                    <b-nav-item to="/profile">{{ user.name }} <b-badge variant="secondary">{{ user.role }}</b-badge></b-nav-item>
                    <b-nav-item @click="onLogout">Logout</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>

        <!-- Mobile Menu -->
        <div id="nav-mobile" class="mobileActive animated" :class="{ invisible: !burgerMenu, slideInLeft: burgerMenu }">
            <div>
                <router-link to="/">Home</router-link>
            </div>
            <div>
                <router-link to="/about">About</router-link>
            </div>

            <div class="hamburger is-active" id="hamburger-1" @click="burgerMenu = !burgerMenu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      burgerMenu: false
    };
  },
  computed: mapGetters([
    'loading',
    'user'
  ]),
  methods: {
    onLogout() {
        this.$store.commit('setLoading', true)

        /** It will be created proper logout */
        this.$store.commit('setUser', null)
        this.$store.commit('setLoading', false)
        this.$router.push('/signin')
    }
  }
};
</script>

<style lang="scss">
    @media(max-width:576px){
        .navbar-nav .nav-link {
            padding-right: 0;
            padding-left: 0;
            font-size: 2em;
            line-height: 2em;
            padding: 0.2em 0;
        }
    }

    #nav-desktop {
        background-color: #e40713;
        color: white;
        font-weight: bold;
    }

    /* Menu for Mobile/Table */
    #nav-mobile {
        z-index: 1000;
    }

    .mobileActive {
      width: 100vw;
      height: 100vh;
      background-color: lightblue;
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 !important;

      a {
        font-size: 7vw;
        line-height: 12vw;
      }
    }

    // Fade Effect for Route-View
    .fade-enter-active,
    .fade-leave-active {
      transition-property: opacity;
      transition-duration: 0.25s;
    }

    .fade-enter-active {
      transition-delay: 0.25s;
    }

    .fade-enter,
    .fade-leave-active {
      opacity: 0;
    }

    // Effect for Mobile Menu Items
    @keyframes fadeInFromTop {
      0% {
        transform: rotate(0) translateY(-15%);
        opacity: 0;
      }
      100% {
        transform: rotate(0);
        opacity: 1;
      }
    }
</style>