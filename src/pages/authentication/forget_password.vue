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
                  <!-- <b-alert show variant="primary" class="alert alert-primary dark">
								<p>This is a info alert—check it out!</p>
							</b-alert> -->
                </div>
                <div class="login-main login-form-card">
                  <form @submit.prevent="resetPassword" class="theme-form">
                    <h4>Reset Your Password</h4>
                    <div class="form-group">
                      <label class="col-form-label"
                        >Enter Your Email address</label
                      >
                      <div class="row">
                        <div class="col-md-12">
                          <input
                            class="form-control mb-1"
                            type="email"
                            v-model="email"
                            :class="{
                                'is-invalid':
                                  submitted && !$v.email.required,
                              }"
                          />
                          <div
                            class="invalid-feedback w-100 d-block"
                             v-if="submitted && !$v.email.required"
                          >
                            Email address is required.
                          </div>
                          <!-- <div
                            class="invalid-feedback w-100 d-block"
                             v-if="submitted && $v.email.email"
                          >
                            Invalid Email address.
                          </div> -->
                        </div>
                        <!-- <div class="error" v-if="!$v.email.required">
                          Email address is required.
                        </div> -->
                        <div class="col-12">
                          <button
                            class="btn btn-primary btn-block m-t-10"
                            type="submit"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>

                    <p class="mt-4 mb-0">
                      Already have a password?
                      <router-link class="ml-2" tag="a" to="/auth/login">
                        Login
                      </router-link>
                    </p>
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
  import router from '../../router';
  import { required, email } from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
        submitStatus: null,
        submitted: false,
        email: '',
        err: {
          email: ''
        }
      };
    },
    validations: {
      email: { required, email }
    },
    methods: {
      resetPassword() {
        this.submitted = true, 
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          API.post(`/auth/send-password-reset`, {
            email: this.email,
          }).then(res => {
            if(res.status === 200) {
              this.$toasted.show('Reset password email sent.', {
                theme: 'bubble',
                position: 'bottom-center',
                type: 'success',
                duration: 2000
              });
              setTimeout( () => router.push({ path: '/login' }), 2000);
            }
          }).catch(err => {
            if (err.response.status === 400) {
              this.$toasted.show('E-mail is incorrect', {
                theme: 'bubble',
                position: 'bottom-right',
                type: 'error',
                duration: 2000
              });
            } else if (err.response.status === 401) {
              this.$toasted.show('E-mail is incorrect', {
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
    }
  };
</script>
