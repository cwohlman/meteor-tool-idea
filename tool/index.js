// This file is designed to be node-runnable in basically any version of node

var tool = require('meteor-tool');

tool
  .use('ecmascript')
  .run('build.js')
  .watch()
  .run('server.js')
  .watch()
  ;
