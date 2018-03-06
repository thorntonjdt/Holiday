import Loadable from 'react-loadable'
import express from 'express';
const app = express();
console.log('hello');
app.use(express.static('build'));

import { render } from './middlewares/render';

app.use(render);

Loadable.preloadAll().then(() => {
  app.listen(3000, (error) => {
      console.log("listening on 3000...");
  });
});
