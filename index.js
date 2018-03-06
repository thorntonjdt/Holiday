const express = require('express');
const app = express();
app.use(express.static('build'));

const {render} = require('./build/server.js');

app.get('/', render);


app.listen(3000);
