var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');
var port = process.env.PORT || 8080;

app = express();
if (process.env.NODE_ENV === 'production') {
  var enforce = require('express-sslify');
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
const staticMiddleware = serveStatic(path.join(__dirname, '/www'));
app.use(staticMiddleware);
app.use(history({}));
app.use(staticMiddleware);


app.listen(port, () => console.log('server listening on port ' + port));
