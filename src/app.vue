<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>

  </div>
</template>

<script>
import { f7Statusbar, f7View } from 'framework7-vue'
export default {
  components: {
    f7Statusbar,
    f7View,
  }
}
</script>
