// shared/routes.js
import Home from '../client/pages/home/home';
import newRoute from '../client/pages/newRoute/newRoute';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/newroute',
    component: newRoute,
  }
]

export default routes