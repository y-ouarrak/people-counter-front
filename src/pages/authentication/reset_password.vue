<template>
  <div>
    <div class="page-wrapper">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-12">
            <div class="login-card">
              <div>
                <div>
                  <a class="logo">
                    <!-- <img
                      class="img-fluid for-light"
                      src="../../assets/images/logo/login.png"
                      alt="looginpage"
                    />
                    <img
                      class="img-fluid for-dark"
                      src="../../assets/images/logo/logo_dark.png"
                      alt="looginpage"
                    /> -->
                  </a>
                </div>
                <div class="login-main login-form-card">
                  <form @submit.prevent="resetPassword" class="theme-form">
                    <h4>Create Your Password</h4>
                    <div class="form-group">
                      <label class="col-form-label">Your email</label>
                      <input
                        class="form-control"
                        type="email"
                        v-model="email"
                      />
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">New Password</label>
                      <input
                        class="form-control"
                        type="password"
                        v-model="password"
                      />
                      <div class="show-hide"><span class="show"></span></div>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Retype Password</label>
                      <input
                        class="form-control"
                        type="password"
                        v-model="confirmPassword"
                      />
                    </div>
                    <div class="form-group mb-0">
                      <button class="btn btn-primary btn-block" type="submit">
                        Done
                      </button>
                    </div>
                    <!-- <p class="mt-4 mb-0">
                      Don't have account?
                      <router-link class="ml-2" tag="a" to="/auth/register">
                        Create Account
                      </router-link>
                    </p> -->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { API } from '../../axios.js';
  import { required, email, sameAs } from 'vuelidate/lib/validators';
  import router from '../../router';
  export default {
    data() {
      return {
        resetToken: '',
        email: '',
        password: '',
        confirmPassword: '',
        submitted: false,
      };
    },
    validations: {
      email: { required, email },
      password: { required },
      confirmPassword: { required, sameAsPassword: sameAs('password') }
    },
    
    created() {
      this.resetToken = this.$route.query.resetToken;
    },
    methods: {
      resetPassword() {
        this.submitted = true,
        this.$v.$touch();
        if (this.$v.$invalid) {
          return false;
        }
        return API.post(`/auth/reset-password`, {
          email: this.email,
          password: this.password,
          resetToken: this.resetToken
        }).then(res => {
          if(res.status === 200) {
            this.$toasted.show('Password changed successfully.', {
              theme: 'bubble',
              position: 'bottom-center',
              type: 'success',
              duration: 2000
            });
            setTimeout( () => router.push({ path: '/login' }), 2000);
          }
        }).catch(err => {
          if (err.response.status === 500) {
            this.$toasted.show('E-mail or Token is incorrect', {
              theme: 'bubble',
              position: 'bottom-right',
              type: 'error',
              duration: 2000
            });
          } else if (err.response.status === 401) {
            this.$toasted.show('Reset token is expired', {
              theme: 'bubble',
              position: 'bottom-center',
              type: 'error',
              duration: 2000
            });
          } else {
            this.$toasted.show('Oops...' + err.message, {
              theme: 'bubble',
              position: 'bottom-right',
              type: 'error',
              duration: 2000
            });
          }
        });
      }
    }
  };
</script>