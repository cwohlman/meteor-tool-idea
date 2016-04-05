import tool from 'meteor-tool';

tool.run('../build/server')
  .keepAlive({ restartCount: 3 })
  ;

export default tool;