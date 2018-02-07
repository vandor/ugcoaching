<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>{{ title }}</f7-nav-title>
    </f7-navbar>
    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
  </f7-page>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'title',
  ]),
}
</script>
