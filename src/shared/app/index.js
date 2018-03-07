import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import * as Routes from './routes';

const App = () => (
  <div>
    <Helmet
        htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
        titleTemplate="%s | Universal React App "
        titleAttributes={{ itemprop: 'name', lang: 'en' }}
        meta={[
            { name: 'description', content: 'Server side rendering example' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
    />
    <Switch>
      <Route exact path="/" component={Routes.Landing} />
      <Route path="/projects" component={Routes.Projects} />
    </Switch>
  </div>
)

export default App;
