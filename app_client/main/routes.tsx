import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';import App from './App';import { About, Todos, Dashboard, Blueprint, Mailer } from './containers';

export default () => {
  return (
    <Router history={browserHistory} >      <Route path="/" component={App}>        <IndexRoute component={Blueprint} />        <Route path="todos" component={Todos} />        <Route path="dashboard" component={Dashboard} />        <Route path="blueprint" component={Blueprint} />        <Route path="mailer" component={Mailer} />      </Route>    </Router >
  );
};
