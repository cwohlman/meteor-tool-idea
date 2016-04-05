import Tool from 'meteor-tool';

// meteor defaults
// tool is chainable, each call returns a new tool instance
const tool = Tool
  .importsDir('../imports')
  .packagesDir('~/.meteor/packages')
  ;

tool.usePackages('../config/packages')
  .processFiles('../server')
  .outputFiles('../dist/server')
  ;

tool.usePackages('../config/packages')
  .processFiles('../client')
  .outputFiles('../dist/public/resources')
  .outputBundle('../dist/server/client-bundle.js')
  ;

tool
  .use('meteor-client-bundle', {
    bundlePath: '../dist/server/client-bundle.js',
  })
  .processFiles('../public')
  .outputFiles('../dist/public')
  ;

tool
  .use('meteor-server-assets')
  .processFiles('../assets')
  .outputFiles('../dist/server/assets')
  .outputBundle('../dist/server/assets-bundle.js')
  ;

export default tool;
