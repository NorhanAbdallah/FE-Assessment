import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { withRouter } from 'react-router-dom';

function WithLayout(props: RouteConfigComponentProps) {
  const { history, route: { routes = [] } = {} } = props;
  return (
    <React.Suspense fallback={'Loading'}>{renderRoutes(routes, { history })}</React.Suspense>
  );
}

export default withRouter(WithLayout);
