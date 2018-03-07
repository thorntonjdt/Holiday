import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable'
import { Helmet } from 'react-helmet';

import App from '../shared/app';
import { renderHeader, renderFooter } from './render';

const app = express();
app.use('/assets', express.static('./dist'));

app.get('/api', (req, res) => {
    res.send({
      message: 'I am a server route and can also be hot reloaded!'
    })
})

app.get('*', (req, res) => {
  const context = {};
  const app = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  res.status(200).write(renderHeader(helmet));
  const stream = renderToNodeStream(app);
  stream.pipe(res, { end: 'false' });
  stream.on('end', () => {
    res.end(renderFooter());
  });
});

Loadable.preloadAll().then(() => {
  app.listen(3000, (error) => {
      console.log("listening on 3000...");
  });
});
