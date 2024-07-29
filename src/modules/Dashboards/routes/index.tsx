import React, { lazy } from 'react';
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import WithLayout from 'shared/components/WithLayout';
import Layout from 'shared/components/layout';

const Dashboard = lazy(() => import('../views/index'));
const ErrorPage404 = lazy(() => import('shared/components/ErrorPages/404'));

const wrapper =
  (
    Component: React.LazyExoticComponent<(props: RouteConfigComponentProps) => JSX.Element | null>,
  ) =>
    (props: RouteConfigComponentProps) => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    };


const routes: RouteConfig[] = [
  {
    path: "/",
    component: WithLayout,
    sideMenu: true,
    routes: [
      {
        path: ["/"],
        exact: true,
        name: 'Dashboard',
        component: wrapper(Dashboard),
      },
      {
        path: '*',
        component: wrapper(ErrorPage404),
      },
    ],
  },
];

const Routes = () => {
  const renderedRoutes = renderRoutes(routes);

  return renderedRoutes;
};

export default Routes;
