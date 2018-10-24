// shared/routes.js
import Home from '../client/pages/home/home';
import List from '../client/pages/list/list';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/list/:id',
    component: List,
  }
]

export default routes