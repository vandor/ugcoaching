<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>UG Coaching</f7-nav-title>
      <f7-nav-right>
        <f7-link @click="login()">Login</f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title>Welcome</f7-block-title>
    <f7-block strong>
      <p>Our mission is to resource every leader with a missional dream in our city.
      As a coach, you play a vital role in connecting our network, and we are grateful!</p>

      <p>This app is dedicated to helping you rock at coaching.</p>
    </f7-block>


  </f7-page>
</template>
<script>
import { mapState } from 'vuex'
import {
  f7Block,
  f7BlockTitle,
  f7Link,
  f7NavRight,
  f7NavTitle,
  f7Navbar,
  f7Page,
} from 'framework7-vue'
import AuthService from '../auth/AuthService'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth
console.log(auth)

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
      authenticated
    }
  },
  methods: {
    login,
    logout
  },
  components: {
    f7Block,
    f7BlockTitle,
    f7Link,
    f7NavRight,
    f7NavTitle,
    f7Navbar,
    f7Page,
  }
}
</script>

