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
    compileTime: [
      {
        url: '/api/v1/todos/',
        params: {
          id: ''
        }
      }
    ]
  },
  {
    path: '/newroute',
    component: NewRouteComponent,
    compileTime: []
  },
  {
    path: '/test', 
    component: test,
    compileTime: []
  }
]

export default routes