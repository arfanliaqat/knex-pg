const express = require('express');
const routes = require('./routes/index');
const app = express();

app.use(express.json());

app.use(routes);

app.listen(8080, () =>
  console.log('server listening on http://localhost:8080')
);
