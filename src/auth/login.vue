<template>
  <div>
    <!-- page-wrapper Start-->
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img
                    class="img-fluid for-light"
                    src="../assets/images/logo/login.png"
                    alt="looginpage"
                  />
                  <img
                    class="img-fluid for-dark"
                    src="../assets/images/logo/logo_dark.png"
                    alt="looginpage"
                  />
                </a>
              </div>
              <div class="login-main">
                <b-card no-body>
                  <!-- <b-tabs pills vertical>
                    <b-tab active> -->
                  <!-- <template #title>
                        <img
                          src="../assets/images/login/firebase.svg"
                          id="firebase-tooltip"
                        />
                        <span>Firebase Login</span>
                      </template> -->
                  <div class="card-body">
                    <b-card-text>
                      <form class="theme-form">
                        <h4>Sign in to account</h4>
                        <p>Enter your email & password to login</p>
                        <div class="form-group">
                          <label class="col-form-label">Email Address</label>
                          <input
                            v-model="email"
                            class="form-control"
                            type="email"
                            required=""
                            placeholder="Test@gmail.com"
                            :class="{
                              'is-invalid': submitted && !email,
                            }"
                          />
                          <div
                            v-show="submitted && !email"
                            class="invalid-feedback"
                          >
                            Email is required
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-form-label">Password</label>
                          <input
                            v-model="password"
                            autocomplete=""
                            class="form-control"
                            :type="type"
                            name="login[password]"
                            required=""
                            placeholder="*********"
                            :class="{
                              'is-invalid': submitted && !email,
                            }"
                          />
                          <div
                            v-show="submitted && !password"
                            class="invalid-feedback"
                          >
                            Email is required
                          </div>
                          <div class="show-hide" @click="showPassword">
                            <span class="show"></span>
                          </div>
                        </div>
                        <div class="form-group mb-0">
                          <div class="checkbox p-0">
                            <input id="checkbox1" type="checkbox" />
                            <label class="text-muted" for="checkbox1"
                              >Remember password</label
                            >
                          </div>
                          <button
                            class="btn btn-primary btn-block"
                            type="button"
                            @click="login"
                          >
                            Login
                          </button>
                        </div>
                        <p class="mt-4 mb-0">
                          Don't have account?
                          <router-link class="ml-2" tag="a" to="/auth/register">
                            Create Account
                          </router-link>
                        </p>
                        <p class="mt-4 mb-0">
                          <router-link class="ml-2" tag="a" to="/auth/forgetpassword">
                            Forgotten password?
                          </router-link>
                        </p>
                      </form>
                    </b-card-text>
                  </div>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- latest jquery-->
  </div>
</template>

<script>
  import firebase from 'firebase';
  import Userauth from '../auth/js/index';
  import { API } from '../axios.js';
  import router from '../router';

  export default {
    name: 'login',
    data() {
      return {
        type: 'password',
        email: '',
        password: '',
        username: '',
        passwordjwt: '',
        submitted: false
      };
    },
    computed: {
      // JWT authentication
      loggingIn() {
        return this.$store.state.authentication.status.loggingIn;
      }
    },
    created() {
      // reset login status for JWT
      this.$store.dispatch('authentication/logout');
    },
    methods: {
      login() {
        return API.post(`/auth/login`, {
          email: this.email,
          password: this.password
        })
          .then(user => {
            const usr = user.data;
            usr.accessToken = usr.token.accessToken;
            usr.refreshToken = usr.token.refreshToken;
            console.log(usr);
            // delete usr.accessToken;
            // eslint-disable-next-line no-console
            // console.log(usr)
            if (usr.accessToken && usr.refreshToken) {
              localStorage.setItem('user', JSON.stringify(usr));
            }
            router.push({ name: 'default' });
            return usr;
          })
          .catch(e => {
            if (e.response.status === 401) {
              this.$toasted.show('E-mail or password is incorrect', {
                theme: 'bubble',
                position: 'bottom-right',
                type: 'error',
                duration: 2000
              });
            } else {
              this.$toasted.show('Oops...' + e.message, {
                theme: 'bubble',
                position: 'bottom-right',
                type: 'error',
                duration: 2000
              });
            }
            // const res = e.response;
            // return Promise.reject(res || 'Network Error');
          });
      },
      // JWT authentication
      handleSubmit() {
        this.submitted = true;
        const { username, passwordjwt } = this;
        const { dispatch } = this.$store;
        if (username && passwordjwt) {
          dispatch('authentication/login', { username, passwordjwt });
        }
      },
      // show/hide password
      showPassword: function() {
        if (this.type === 'password') {
          this.type = 'text';
        } else {
          this.type = 'password';
        }
      },
      // Firebase login
      signUp: function() {
        this.submitted = true;
        if (this.email === '' && this.password === '') {
          (this.email = 'test@admin.com'), (this.password = 'test@123456');
        } else {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
              result => {
                Userauth.localLogin(result);
                this.$router.replace('/');
              },
              err => {
                (this.email = 'test@admin.com'), (this.password = 'test@123456');
                this.$toasted.show('Oops...' + err.message, {
                  theme: 'bubble',
                  position: 'bottom-right',
                  type: 'error',
                  duration: 2000
                });
              }
            );
        }
      }
    // Auth0 login
    // login() {
    //   Userauth.login();
    // }
    }
  };
</script>
