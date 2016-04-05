import Tool from 'meteor-tool';

// meteor defaults
// tool is chainable, each call returns a new tool instance
const tool = Tool
  .importsDir('../imports')
  .packageDirs(Tool.PACKAGE_DIRS)
  ;

tool
  .usePackages('../config/packages')
  .useVersions('../config/versions')
  .processFiles('../server')
  .outputFiles('../build/server')
  ;

tool
  .usePackages('../config/packages')
  .useVersions('../config/versions')
  .processFiles('../client')
  .outputFiles('../build/public/resources')
  .outputBundle('../build/server/client-bundle.js')
  ;

tool
  .use('meteor-client-bundle', {
    bundlePath: '../build/server/client-bundle.js',
  })
  .processFiles('../public')
  .outputFiles('../build/public')
  ;

tool
  .use('meteor-server-assets')
  .processFiles('../assets')
  .outputFiles('../build/server/assets')
  .outputBundle('../build/server/assets-bundle.js')
  ;

export default tool;
