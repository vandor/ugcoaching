<template>
  <f7-page @page:init="onPageInit">

    <f7-swiper pagination :params="swiperParams" class="main-swiper">
      <f7-swiper-slide class="slide-1">
        <div class="slide-content">
          <f7-row style="text-align: center">
            <img src="../img/logo.png" class="logo">
          </f7-row>
          <f7-row>
            <f7-col class="title-container"><h1>Underground Coaching</h1></f7-col>
          </f7-row>
          <f7-row><f7-col><hr></f7-col></f7-row>
          <f7-row>
            <f7-col><h3>
              You have a missional dream<br>
              We have the resources to help
            </h3></f7-col>
          </f7-row>
          <f7-row><f7-col><hr></f7-col></f7-row>
        </div>
      </f7-swiper-slide>
    </f7-swiper>

    <f7-toolbar bottom-md class="welcome-toolbar" color="white">
      <f7-link v-if="!isAuthenticated()" @click="login()">Login</f7-link>
      <f7-link v-if="isAuthenticated()" href="/notes">See Notes</f7-link>
    </f7-toolbar>

  </f7-page>
</template>
<script>
import {
  f7Block,
  f7BlockTitle,
  f7Col,
  f7Link,
  f7Page,
  f7Row,
  f7Swiper,
  f7SwiperSlide,
  f7Toolbar,
} from 'framework7-vue'
import AuthService from '../auth/AuthService'
const auth = new AuthService()
const { isAuthenticated, login } = auth

export default {
  data () {
    return {
      auth,
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
    isAuthenticated,
    login,
    onPageInit: function() {
      auth.handleAuthentication(this.$f7router);
    },
  },
  components: {
    f7Block,
    f7BlockTitle,
    f7Col,
    f7Link,
    f7Page,
    f7Row,
    f7Swiper,
    f7SwiperSlide,
    f7Toolbar,
  }
}
</script>
<style scoped>
.logo {
  width: 8rem;
  height: 8rem;
  margin-left: auto;
  margin-right: auto;
  filter: brightness(90%);
}
.main-swiper {
  width: 100%;
  height: 100%;
}
.main-swiper .swiper-slide {
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
  background-position: center;
  background-size: cover;
}

.col {
  padding: .8rem;
}
h1 {
  color: #e0ca00;
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 300;
  letter-spacing: .0048888888888rem;
  line-height: 2.2rem;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}
h3 {
  color: #adadad;
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: .12rem;
  line-height: 1.6rem;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}
.title-container {
  margin-top: .5rem;
  margin-bottom: 1.2rem;
}
hr {
  color: #ddd;
  background-color: #ddd;
  border: none;
  height: 1px;
  margin: 0 10px;
}
.md .welcome-toolbar:not(.messagebar) {
  background-color: #f7f7f8;
}
.welcome-toolbar a {
  color: #404040;
}
</style>

<style>
.ios .swiper-pagination-bullet-active,
.md .swiper-pagination-bullet-active {
  background-color: #e0ca00;
}
.welcome-toolbar .toolbar-inner {
  justify-content: center;
}
</style>

