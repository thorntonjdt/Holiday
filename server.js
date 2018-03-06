import React from 'react';
import { renderToNodeStream } from 'react-dom/server';

import Landing from './src/App';

export function render(req, res) {
  res.write('<html><head><title>My App</title></head><body><div id="root">');

  const stream = renderToNodeStream(<Landing />);
  stream.pipe(res, { end: 'false' });

  stream.on('end', () => {
    res.end('</div></body></html>');
  });
}
