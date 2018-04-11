const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const notesRoutes = require('./app/api/notes');
const port = process.env.PORT || 8080;

app = express();
if (process.env.NODE_ENV === 'production') {
  const enforce = require('express-sslify');
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

const staticMiddleware = serveStatic(path.join(__dirname, '/www'));
const apiRoutes = express.Router();
apiRoutes.use('/notes', notesRoutes);

app.use(staticMiddleware);
app.use('/api', apiRoutes);
app.use(history({}));
app.use(staticMiddleware);


app.listen(port, () => console.log('server listening on port ' + port));
