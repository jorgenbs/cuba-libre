/**
 * Created with JetBrains WebStorm.
 * User: jorgen.svendsen
 * Date: 29.08.13
 * Time: 12:01
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose');

module.exports.io = undefined;

var Message = mongoose.model('Message');

module.exports.listMessages = function(req, res) {
    Message.find({}, function (err, messages) {
        res.json(messages);
    });
};

module.exports.createMessage = function(req, res) {

    var messageString = req.body.message;
    var message = new Message({ message: messageString });

    message.save(function(err) {
        if (err) console.log(err);
        else {
            res.json(message);
        }
    });
};