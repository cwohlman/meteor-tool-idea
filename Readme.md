# Complex Meteor Apps

Meteor is an awesome tool for prototyping web apps, and even beyond that, Meteor continues to do well. However for more complex apps, I thought that Meteor could use a bit of a boost.

The core concept is to split Meteor into 3 parts:

1. The meteor cli tool, basically is just a helper tool.
    - Knows how to create new meteor projects & packages
    - Knows to run npm install before running a meteor app
    - Knows whether a particular repo actually is a meteor app or not
    - Knows which version of the meteor-tool to install
    - Knows how to upgrade packages
    - Knows how to read your build.js & server.js files to parse out your dependencies.
    - Is git-aware, knows how to use git to git to upgrade your app structure without data loss.
    - Knows to make you commit your changes before upgrading an app
    - Knows how to bump your 'app-version'
    - Knows how to publish your app or packages
    - Is git-aware and won't let you publish packages or deploy apps when if you haven't committed your changes and will tag your releases when published/deployed.
2. The meteor-tool npm package, like gulp, but more opinionated.
    - Pipeline for running build actions
    - Knows how to download and install both npm & meteor packages
    - Build pipeline does things like tree shaking & traversal (for dependencies), cached builds of files, etc.
    - Knows how to run an app which might crash
    - Knows how to act as a proxy for an app which is in development
3. The meteor project structure (this repository).
    - A default structure which compiles client, public, server & asset directories into the completed meteor app & client resources.

With this more flexible setup, you can accomplish more with the meteor tool:

- Compile templates at runtime (e.g. build a static app using meteor templates).
- Run multiple 'sites' from the same codebase, e.g. a user-facing and admin-facing app.
- Run multiple 'sites' from the same server, e.g. serve multiple SPAs from the same server, but with different client bundles.
- Modify the default client or server configurations to exclude packages you don't need (for example you could build a serverless app by dropping the ddp package).
- An example with multiple apps & a static site
    + Serve your home page as a static html file with only html & css & img resources (so it's super fast & seo friendly).
    + Serve your signup page as a static html file with html, css, & a javascript signup form
    + Serve your main app as a normal meteor app
    + Serve an admin app as a normal meteor app
    + Serve an api using just ddp
- Notice that in the above example we would still be able to use:
    + Meteor templates, even in our static home page
    + A subset of meteor packages on our static signup page
    + All the meteor functionality for running a reactive app with ddp & lots of packages.

