// Import Vue
import Vue from 'vue';
import store from './store';

// Import F7
import Framework7 from 'framework7';
import Swiper from 'framework7/dist/components/swiper/swiper.js'
Framework7.use([ Swiper ])

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

// Theme
let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  store,
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'coach.underground.ugcoaching', // App bundle ID
    name: 'Underground Coaching', // App name
    theme, // Automatic theme detection
    // App routes
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
