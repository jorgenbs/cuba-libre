
/**
 * Module dependencies.
 */

var express = require('express'),
 routes = require('./app/routes'),
 http = require('http'),
 path = require('path'),
 mongoose = require('mongoose'),
 message = require('./app/models/message'),
 api = require('./app/api/api'),
 fs = require('fs');

var app = express();

// all environments
app.set('env', process.env.NODE_ENV || 'development');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/views');
app.set('models', __dirname + '/app/models');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
var config = require('./config/config')[app.get('env')];

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//db connection
mongoose.connect(config.db);

//setup models
//fs.readdirSync(app.get('models')).forEach(function (file) {
//    if (~file.indexOf('.js')) require(app.get('models') + '/' + file);
//});

// config routes
require('./config/routes')(app, routes, api);

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

api.io = require('socket.io').listen(server);

