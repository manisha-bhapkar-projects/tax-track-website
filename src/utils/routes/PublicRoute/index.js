import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils';
import constants from '../../constants';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? (
          <Redirect to={constants.ROUTE.SIDEBAR.DASHBORD} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
