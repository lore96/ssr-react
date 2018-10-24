import React from 'react';
import Loadable from 'react-loadable';

const HomeComponent = Loadable({
    loader: () => import("../client/pages/home/home"),
    loading: () => <div>Loading....</div>
});

const NewRouteComponent = Loadable({
    loader: () => import("../client/pages/newRoute/newRoute"),
    loading: () => <div>Loading....</div>
})

const test = Loadable({
  loader: () => import("../client/pages/test/test"),
  loading: () => <div>Loading....</div>
})

const routes = [
  {
    path: '/',
    exact: true,
    component: HomeComponent,
  },
  {
    path: '/newroute',
    component: NewRouteComponent,
  },
  {
    path: '/test', 
    component: test
  }
]

export default routes