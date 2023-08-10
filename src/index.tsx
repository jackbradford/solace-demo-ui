import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import { Home } from './pages';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route key={"/home"} component={Home} exact path={"/"} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app-container'));

