/**
 * Created with JetBrains WebStorm.
 * User: jorgen.svendsen
 * Date: 29.08.13
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */
(function() {
    var socket = io.connect('http://localhost');
    socket.on('newMessage', function (msg) {
        $('#inbox').text(msg.message);
    });
})();
