<template>
    <div>
        <section class="hero is-fullheight is-dark-gradient">

            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-4 is-offset-4">

                            <!--<v-layout row v-if="error">-->
                            <!--<v-flex xs12 sm6 offset-sm3>-->
                            <!--<app-alert @dismissed="onDismissed" :text="error.message"></app-alert>-->
                            <!--</v-flex>-->
                            <!--</v-layout>-->

                            <div class="box box-login">

                                <img src="images/MCB18_Stack_RGB.png" style="max-height:100px; max-width: 218px;" alt="">

                                <h1 class="title" style="text-transform: uppercase;">
                                    HelpDesk
                                </h1>

                                <b-form @submit.prevent="onSignup" class="form-horizontal">

                                    <b-form-group class="" label="Email:" label-for="email">
                                        <b-form-input id="email" type="email" v-model="form.email" required placeholder="email@example.com">
                                        </b-form-input>
                                    </b-form-group>

                                    <b-form-group class="" label="Password:" label-for="password">
                                        <b-form-input id="password" type="password" v-model="form.password" required placeholder="●●●●●●●">
                                        </b-form-input>
                                    </b-form-group>

                                    <p class="control margin-top1">
                                        <b-button type="submit">Sign up</b-button>
                                        <!--<button class="button button-login margin-top-button" type="submit">Login</button>-->
                                    </p>
                                </b-form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                }
            };
        },
        computed: {
            user() {
                return this.$store.getters.user;
            },
            error() {
                return this.$store.getters.error;
            },
            loading() {
                return this.$store.getters.loading;
            }
        },
        watch: {
            user(value) {
                if (value !== null && value !== undefined) {
                    this.$router.push("/");
                }
            }
        },
        methods: {
            onSignup() {

                //http
                const axios = require('axios');

                axios.defaults.baseURL = 'http://localhost:8091';
                axios.defaults.headers.common['Authorization'] = "dummytoken";
                axios.defaults.headers.post['Content-Type'] = 'application/json';
                axios.defaults.headers.post['Accept'] = 'application/json';
                axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


                let user = {
                    email: this.form.email,
                    password: this.form.password
                };
                axios.post('/register', JSON.stringify(user));

                this.$store.dispatch("signUserUp", {
                    email: this.email,
                    password: this.password
                });
            },
            onDismissed() {
                this.$store.dispatch("clearError");
            }
        }
    };
</script>

<style lang="scss">
    body {
        background-color: linear-gradient(141deg, #1f191a 0%, #7b7b7b 71%, #ababab 100%);
    }
</style>
