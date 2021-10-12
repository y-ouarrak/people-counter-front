import axios from 'axios';
// import router from './router/index';

export const API = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL + '/v1',
});

// Add a request interceptor
// API.interceptors.request.use(
//   (config) => {
//     const user = JSON.parse(localStorage.getItem('user'));

//     const token = user ? user.token : '';
//     if (token) {
//       config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// API.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     if (
//       error.response.status === 401 &&
//       error.config.url !== '/auth/login' &&
//       error.config.url !== '/auth/refresh-token'
//     ) {
//       localStorage.removeItem('user');
//     //   router.go();
//     }
//     return Promise.reject(error);
//   }
// );