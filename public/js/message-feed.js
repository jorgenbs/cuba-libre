/**
 * Created with JetBrains WebStorm.
 * User: jorgen.svendsen
 * Date: 29.08.13
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */
require(['socket.io', 'jquery'], function(io,$) {
    var socket = io.connect('http://localhost');
    var width = $(document).width();
    var height = $(document).height();

    socket.on('newMessage', function (msg) {
        var element = $("<p class='messageText'>" + msg.message + "</p>");
        randomPosition(element);

        $('#inbox').append(element);
    });

    var randomPosition = function (element) {
        var offset_x = element.text().length * 7; //ca
        var offset_y = 100;
        var rnd_x = Math.floor(Math.random() * (width-offset_x));
        var rnd_y = Math.floor(Math.random() * (height-offset_y));

        element.css('left',rnd_x);
        element.css('top',rnd_y);
    }

});

