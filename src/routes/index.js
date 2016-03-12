import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../views/components/App';
import Header from '../views/components/Header';
import Footer from '../views/components/Footer';

const routes = (
  <Route
    component={App}
    path="/"
  >
    <IndexRoute components={{ header: Header, footer: Footer }}/>
  </Route>
);

export default routes;
