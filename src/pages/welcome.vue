<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <img src="../img/logo.png" class="logo">
      </f7-nav-left>
      <f7-nav-right>
        <f7-link @click="login()">Login</f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-swiper pagination :params="swiperParams" class="main-swiper">
      <f7-swiper-slide class="slide-1">
        <div class="slide-content">
          <f7-row>
            <f7-col class="title-container"><h1>Underground Coaching</h1></f7-col>
          </f7-row>
          <f7-row><f7-col><hr></f7-col></f7-row>
          <f7-row>
            <f7-col><h2>
              You have a missional dream<br>
              We have the resources to help
            </h2></f7-col>
          </f7-row>
          <f7-row><f7-col><hr></f7-col></f7-row>
        </div>
      </f7-swiper-slide>
      <f7-swiper-slide>Slide 2</f7-swiper-slide>
      <f7-swiper-slide>Slide 3</f7-swiper-slide>
    </f7-swiper>


  </f7-page>
</template>
<script>
import { mapState } from 'vuex'
import {
  f7Block,
  f7BlockTitle,
  f7Col,
  f7Link,
  f7NavLeft,
  f7NavRight,
  f7Navbar,
  f7Page,
  f7Row,
  f7Swiper,
  f7SwiperSlide,
} from 'framework7-vue'
import AuthService from '../auth/AuthService'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  computed: mapState([
    'title',
    'notes',
  ]),
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated,
      swiperParams: {
        autoplay: {
          delay: 5 * 1000,
          disableOnInteraction: true,
        },
        direction: 'vertical',
      },
    }
  },
  methods: {
    login,
    logout
  },
  components: {
    f7Block,
    f7BlockTitle,
    f7Col,
    f7Link,
    f7NavLeft,
    f7NavRight,
    f7Navbar,
    f7Page,
    f7Row,
    f7Swiper,
    f7SwiperSlide,
  }
}
</script>
<style scoped>
.logo {
  margin: 8px;
  width: 35px;
  height: 35px;
}
.main-swiper {
  width: 100%;
  height: 100%;
  font-size: 18px;
}
.main-swiper .swiper-slide {
  font-size: 25px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #000;
  box-sizing: border-box;
  border-width: 0;
}
.main-swiper .slide-1 {
  background-image: url("../img/welcome_header.jpg");
  background-size: cover;
}

.col {
  padding: 17px;
}
h1 {
  color: #e0ca00;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
}
h2 {
  color: #adadad;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
}
.title-container {
  margin-bottom: 50px;
}
hr {
  color: #ddd;
  background-color: #ddd;
  height: 1px;
  border: none;
}

</style>
<style>
.navbar {
  /*
  background-color: #404040 !important;
  height: 56px !important;
  */
}
</style>

