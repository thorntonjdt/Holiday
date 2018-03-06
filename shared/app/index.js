import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Routes from './routes';

const App = () => (
  <Switch>
    <Route exact path="/" component={Routes.Landing} />
    <Route path="/projects" component={Routes.Projects} />
  </Switch>
)

export default App;
