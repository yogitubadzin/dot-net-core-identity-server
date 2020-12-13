function DisplayManager() {};

DisplayManager.prototype.display = function() {
    document.getElementById('claims').innerText = '';

    Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
            msg = "Error: " + msg.message;
        }
        else if (typeof msg !== 'string') {
            msg = JSON.stringify(msg, null, 2);
        }
        
        document.getElementById('claims').innerHTML += msg + '\r\n';
    });
}