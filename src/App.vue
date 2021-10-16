<template>
  <div id="app">
    <!-- Loader starts-->
    <div class="loader-wrapper" :class="{ loderhide: !show }">
      <div class="loader-index">
        <span></span>
      </div>
    </div>
    <!-- Loader ends-->

    <!--<Main/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import { API } from './axios.js';

export default {
  name: 'app',
  data() {
    return {
      // interval: null,
      show: true
    };
  },
  mounted() {
    this.timeOut();
  },
  async created() {
      this.refresh();
      // this.me();
      const that = this;
      this.interval = setInterval(function() {
        that.refresh();
      }, 1000 * 60 * 12);
      console.log(this.interval)
  },
  methods: {
    timeOut() {
      var self = this;
      setTimeout(function() {
        self.show = false;
      }, 1000);
    },
    refresh() {
      const usr = JSON.parse(localStorage.getItem('user'));
      if (usr) {
        const refreshToken = usr.refreshToken;
        const email = usr.user.email;
        API.post('/auth/refresh-token', {
          email,
          refreshToken
        }).then(res => {
          console.log(res.data)
            console.log('---------------------')
          if (res.status === 200) {
            let data = {
              ...usr,
              token: res.data.accessToken,
              refreshToken: res.data.refreshToken,
              expiresIn: res.data.expiresIn
            };
            console.log(data)
            localStorage.setItem('user', JSON.stringify(data));
          }
        });
      } else {
        clearInterval(this.interval);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.loader-wrapper.loderhide {
  display: none;
}
</style>
