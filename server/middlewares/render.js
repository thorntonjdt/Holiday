import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../build/react-loadable.json';

import App from '../../shared/app';

export function render(req, res) {
  res.write('<html><head><title>My App</title></head><body><div id="root">');
  const context = {};
  const modules = [];
  const app = (
    <Loadable.Capture report={m => modules.push(m)}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Loadable.Capture>
  );
  const bundles = getBundles(stats, modules);
  const stream = renderToNodeStream(app);
  stream.pipe(res, { end: 'false' });

  stream.on('end', () => {
    res.end(`
          </div>
          <script src="/build/manifest.json"></script>
          ${bundles.map(bundle => {
            return `<script src="/build/${bundle.file}"></script>`
          }).join('\n')}
        </body>
      </html>
    `);
  });
}
