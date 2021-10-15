<template>
  <div>
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
              <div class="login-main login-form-card">
                <form class="theme-form" @submit.prevent="register">
                  <h4>Create your account</h4>
                  <p>Enter your personal details to create account</p>
                  <br />
                  <h5>Personal information</h5>
                  <div class="form-group">
                    <label class="col-form-label pt-0">Your Name</label>
                    <div class="form-row">
                      <div class="col-6">
                        <input
                          v-model="form.firstName"
                          class="form-control"
                          type="text"
                          placeholder="First name"
                          :class="{
                            'is-invalid': submitted && err.form.firstName,
                          }"
                          :state="err.firstName ? false : null"
                        />
                        <div class="invalid-feedback w-100 d-block">
                          {{ err.form.firstName }}
                        </div>
                      </div>
                      <div class="col-6">
                        <input
                          v-model="form.lastName"
                          class="form-control"
                          type="text"
                          placeholder="Last name"
                          :class="{
                            'is-invalid': submitted && err.form.lastName,
                          }"
                        />
                        <div class="invalid-feedback w-100 d-block">
                          {{ err.form.lastName }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input
                      v-model="form.email"
                      class="form-control"
                      type="email"
                      placeholder="Test@gmail.com"
                      :class="{
                            'is-invalid': submitted && err.form.email,
                          }"
                    />
                  </div>
                  <div class="invalid-feedback w-100 d-block">
                          {{ err.form.email }}
                        </div>
                  <div class="form-group">
                    <label class="col-form-label">Password</label>
                    <input
                      v-model="form.password"
                      class="form-control"
                      type="password"
                      name="login[password]"
                      placeholder="*********"
                      :class="{
                            'is-invalid': submitted && err.form.password,
                          }"
                    />
                    <div class="invalid-feedback w-100 d-block">
                          {{ err.form.password }}
                        </div>
                    <div class="show-hide"><span class="show"></span></div>
                  </div>
                  <br />
                  <h5>Organization information</h5>
                  <div class="form-group">
                    <label class="col-form-label pt-0">Your company name</label>
                    <div class="form-row">
                      <input
                        v-model="form.name"
                        class="form-control"
                        type="text"
                        placeholder="Company name"
                        :class="{
                            'is-invalid': submitted && err.form.name,
                          }"
                      />
                      <div class="invalid-feedback w-100 d-block">
                          {{ err.form.name }}
                        </div>
                    </div>
                  </div>
                  <div class="form-group auth-form-group-custom mb-4">
                    <i
                      class="
                        ri-shield-user-line
                        auti-custom-input-icon
                        input-ico
                      "
                    ></i>
                    <label class="col-form-label" v-if="countries" for="name"
                      >Country</label
                    >
                    <b-form-select
                      class="slct form-control"
                      text-field="name"
                      value-field="code"
                      :options="countries"
                      @change="getCities"
                      :class="{
                            'is-invalid': submitted && err.form.country,
                          }"
                    ></b-form-select>
                    <div class="invalid-feedback w-100 d-block">
                          {{ err.form.country }}
                        </div>
                  </div>
                  <div class="form-group auth-form-group-custom mb-4">
                    <i
                      class="
                        ri-shield-user-line
                        auti-custom-input-icon
                        input-ico
                      "
                    ></i>
                    <label class="col-form-label" v-if="cities" for="name"
                      >City</label
                    >
                    <b-form-select
                      class="slct form-control"
                      text-field="name"
                      value-field="name"
                      v-model="form.city"
                      :options="cities"
                      :class="{
                            'is-invalid': submitted && err.form.city,
                          }"
                    ></b-form-select>
                    <div class="invalid-feedback w-100 d-block">
                          {{ err.form.city }}
                        </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Zip Code</label>
                    <input
                      v-model="form.zipCode"
                      class="form-control"
                      type="number"
                      placeholder=""
                      :class="{
                            'is-invalid': submitted && err.form.zipCode,
                          }"
                    />
                    <div class="invalid-feedback w-100 d-block">
                          {{ err.form.zipCode }}
                        </div>
                  </div>
                  <br />
                  <div class="form-group mb-0">
                    <button
                      class="btn btn-primary btn-block"
                      type="submit"
                      @click="register"
                    >
                      Create Account
                    </button>
                  </div>
                  <p class="mt-4 mb-0">
                    Already have an account?
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
</template>

<script>
  import { API } from '../axios.js';
  // import axios from 'axios';
  import { Country, City } from 'country-state-city';
  import router from '../router';
  import { required, email } from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
        countries: [],
        cities: [],
        submitted: false,
        form: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          name: '',
          lat: 0,
          lng: 0,
          zipCode: '',
          country: '',
          city: ''
        },
        err: {
          form: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            name: '',
            zipCode: '',
            country: '',
            city: ''
          }
        },
        validations: {
          form: {
            firstName: { required },
            lastName: { required },
            email: { required, email },
            password: { required },
            name: { required },
            country: { required },
            city: { required }
          }
        }
      };
    },
    async created() {
      const countriesData = Country.getAllCountries();
      countriesData.forEach(country =>
        this.countries.push({ name: country.name, code: country.isoCode })
      );
    },
    methods: {
      getCities(code) {
        this.cities = [];
        const country = Country.getCountryByCode(code).name;
        this.form.country = country;
        const citiesData = City.getCitiesOfCountry(code);
        citiesData.forEach(city => this.cities.push(city.name));
        7;
      // console.log(code)
      },
      async register() {
        this.submitted = true;

        if (!this.form.firstName) {
          this.err.form.firstName = 'This field is required';
        } else this.err.form.firstName = '';
        if (!this.form.lastName) {
          this.err.form.lastName = 'This field is required';
        } else this.err.form.lastName = '';
        if (!this.form.email) {
          this.err.form.email = 'This field is required';
        } else this.err.form.email = '';
        if (!this.form.password) {
          this.err.form.password = 'This field is required';
        } else this.err.form.password = '';
        if (!this.form.name) {
          this.err.form.name = 'This field is required';
        } else this.err.form.name = '';
        if (!this.form.country) {
          this.err.form.country = 'This field is required';
        } else this.err.form.country = '';
        if (!this.form.city) {
          this.err.form.city = 'This field is required';
        } else this.err.form.city = '';
        if (!this.form.zipCode) {
          this.err.form.zipCode = 'This field is required';
        } else this.err.form.zipCode = '';

        if (
          !this.err.form.firstName &&
          !this.err.form.lastName &&
          !this.err.form.email &&
          !this.err.form.password &&
          !this.err.form.name &&
          !this.err.form.country &&
          !this.err.form.city
        ) {
          try {
            const res = await API.post('/auth/register', this.form);
            if (res.status === 201) {
              const usr = res.data;
              usr.accessToken = usr.token.accessToken;
              usr.refreshToken = usr.token.refreshToken;
              // console.log(usr);
              // delete usr.accessToken;
              // eslint-disable-next-line no-console
              // console.log(usr)
              if (usr.accessToken && usr.refreshToken) {
                localStorage.setItem('user', JSON.stringify(usr));
              }
              router.push({ name: 'default' });
              return usr;
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
  };
</script>
