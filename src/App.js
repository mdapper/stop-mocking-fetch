import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FilmsPage from 'pages/FilmsPage';
import HomePage from 'pages/HomePage';
import PeoplePage from 'pages/PeoplePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/films/:id">
          <FilmsPage />
        </Route>
        <Route path="/people/:id">
          <PeoplePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
