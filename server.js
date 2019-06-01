// server.js
const next = require('next');
const { createServer } = require('http');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer(handler).listen(port);
})