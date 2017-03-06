import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './app/route';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/app/store/create';

const store = configureStore();

render (
  <Provider store={store}><Router history={browserHistory} routes={routes} /></ Provider >, document.getElementById('app')
);