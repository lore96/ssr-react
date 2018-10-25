import React from 'react';
import Loadable from 'react-loadable';

const HomeComponent = Loadable({
    loader: () => import("../client/pages/home/home" /* webpackChunkName: "../assets/Home" */),
    loading: () => <div>Loading....</div>
});

const NewRouteComponent = Loadable({
    loader: () => import("../client/pages/newRoute/newRoute" /* webpackChunkName: "../assets/NewRouteComponent" */) ,
    loading: () => <div>Loading....</div>
})

const test = Loadable({
  loader: () => import("../client/pages/test/test" /* webpackChunkName: "../assets/test" */),
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