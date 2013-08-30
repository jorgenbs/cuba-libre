require(['socket.io', 'jquery'], function(io,$) {
    var socket = io.connect('http://localhost');

    $('#createMessage').submit(function(){
        var action = $(this).attr('action');
        var data = $(this).serialize();

        $.post(action, data, function(res) {
            console.log(res);
            socket.emit('newMessage',res);
        });
        return false;
    });
});