var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var port = process.env.PORT || 8080;

app = express();
if (process.env.NODE_ENV === 'production') {
  var enforce = require('express-sslify');
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
app.use(serveStatic(path.join(__dirname, '/www')));

app.listen(port, () => console.log('server listening on port ' + port));
