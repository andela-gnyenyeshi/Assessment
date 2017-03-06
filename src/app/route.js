import { Route, IndexRoute} from 'react-router';
import React from 'react';
import App from './views/App';
import Home from './views/container/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);