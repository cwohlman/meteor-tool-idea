import tool from 'meteor-tool';

tool.run('../dist/server')
  .keepAlive({ restartCount: 3 })
  ;

export default tool;