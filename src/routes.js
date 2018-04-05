import AuthService from './auth/AuthService'
const auth = new AuthService()
import WelcomePage from './pages/welcome.vue';
import NotesPage from './pages/notes.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

function routeIfAuthenticated(componentIfAuthenticated, componentIfUnauthenticated) {
  return function(routeTo, routeFrom, resolve, reject) {
    if (auth.isAuthenticated()) {
      resolve({ component: componentIfAuthenticated })
    } else {
      resolve({ component: componentIfUnauthenticated || WelcomePage })
    }
  }
}

export default [
  {
    path: '/',
    component: WelcomePage,
  },
  {
    path: '/notes',
    async: routeIfAuthenticated(NotesPage),
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
