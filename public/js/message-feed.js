/**
 * Created with JetBrains WebStorm.
 * User: jorgen.svendsen
 * Date: 29.08.13
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */
require(['socket.io', 'jquery'], function(io,$) {
    var socket = io.connect('http://localhost');
    console.log(socket);
    socket.on('newMessage', function (msg) {
        console.log('GOT MESSAGE');
        console.log(msg);
        $('#inbox').text(msg.message);
    });
});

