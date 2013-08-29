var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    message: {type: String, default: ''},
    created: {type: Date, default: Date.now()},
    count: {type: Number, default: 0}
});


var Message = mongoose.model('Message', MessageSchema);