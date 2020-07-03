import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FilmsPage from 'pages/FilmsPage';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/films/:filmId">
          <FilmsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
