<template>
  <f7-page @page:init="onPageInit">
    <f7-navbar>
      <f7-nav-title>{{ title }}</f7-nav-title>
    </f7-navbar>

    <f7-list>
      <f7-card
        v-for="(note, index) in notes"
        :key="index">
        <f7-card-header>
          <div>{{ note.fields.Microchurch }}</div>
          <div>{{ note.fields.Date }}</div>
        </f7-card-header>
        <f7-card-content>
          <p>{{ note.fields.Notes }}</p>
        </f7-card-content>
      </f7-card>
    </f7-list>
  </f7-page>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import {
  f7Card,
  f7CardContent,
  f7CardHeader,
  f7List,
  f7NavTitle,
  f7Navbar,
  f7Page,
} from 'framework7-vue'

export default {
  computed: mapState([
    'title',
    'notes',
  ]),
  methods: {
    ...mapActions([
      'fetchNotes',
    ]),
    onPageInit() {
      this.fetchNotes();
    },
  },
  components: {
    f7Card,
    f7CardContent,
    f7CardHeader,
    f7List,
    f7NavTitle,
    f7Navbar,
    f7Page,
  }
}
</script>
