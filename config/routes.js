/**
 * expose routes
 */

module.exports = function(app, routes, api) {
    app.get('/', routes.index);
    app.get('/presentation', routes.presentation);
//    app.get('/api/message:id', api.list);
    app.get('/api/messages/list', api.listMessages);
    app.post('/api/messages/create', api.createMessage);
};