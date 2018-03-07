import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../shared/app';

window.onload = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Router>
        <App />
      </Router>,
      document.getElementById("root")
    );
  })
};
