import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import { AddNote, Home } from './pages';
import { useNotes } from './lib/hooks';

export const AppContext = React.createContext(null);

const App = () => {

  const notes = useNotes();
  const context = { notes };
  return (
    <AppContext.Provider value={context}>
      <Router>
        <Switch>
          <Route key={"/home"} component={Home} exact path={"/"} />
          <Route key={"/add"} component={AddNote} path={"/add"} />
          <Route key={"/update"} component={AddNote} path={"/update/:id"} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app-container'));

