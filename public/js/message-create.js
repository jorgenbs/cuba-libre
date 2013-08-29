(function() {
    $('form').ajaxForm({
        success: function (response, status) {
            console.log(response);
            console.log(status);
            window.socket.emit(response);
        }
    });
})()