# Namaste React

## CDN

CDN stands for Content Delivery Network.

### Why to use CDN

- To decrease the latency of the application (annoying delay is called latency).
- Scalability
- Security. Any website can come across DDoS attacks or similar. CDN can solve this problem pretty easily.

## Crossorigin

- The crossorigin attribute in an HTML <script> tag controls how the browser handles requests for external scripts that come from another domain.

## React vs ReactDOM

- React is a library and having all core functionality like hooks, state management like useState etc defined in this library.

- Whereas ReactDOM library is used to manipulate the DOM or modifiying the DOM. Creating root and rendering root is defined in ReactDOM library.

## React.createElement

This will create object of reactElement.

## Root.render()

This method will overwrite the root element which exists in HTML file...

## Package.json

It is a configuraton file for node project..

## Package-lock.json

It is a file which keeps the track of packages which is installed in project...

## Dependencies

- Dependencies, these're the packages which're required in production env also...
- DevDependencies, packages which are required in development phase only not in production dependencies...

## caret(^) vs tilde(~)

- caret is used to update the minor version automatically...
- tilde is used to update the major version automatically...

## Transitive Dependencies :- When we install any package, it might be depend on other packages and those packages also depends on other packages.. These packages are called transitive dependencies...

## npx vs Npm

Npm command is used to install a new package, where as Npx is used to execute a package..

# BUNDLERS :- Vite, Webpack, Parcel, Rollup or Browserify.

> Create_react_app uses Webpack behind the scene...

> Parcels gives us such Superpowers mentioned below

- Create a server

- **Hot Module Replacement :** Whenever you make changes in any of your project file it's automatically reload the app just like live-server. You don't need to press ctrl+r to reload the app it does automatically. Another example is nodemon package.

- **File Watcher Algorithm :** With the help of this algorithm the parcel knows that there is any change in the project files and it need to be reload app again. Parcel take care of it automatically.

- **Bundling :** Bundle up all project files into the dist directory.

- **Minify :** Minify the code files.

- Cleaning our Code

- Dev and Prod build

- Super fast build algorithm

- **Image Optimization :** Minify your images

- Caching while development

- Compression

- **Tree Shaking :** Removing unwanted code

- **Compatible with older version of browsers :** It uses Polyfills (A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it).

- Allows us to run our app on HTTPS on development env. (npx parcel index.html --https)

- Manages port number automatically. Suppose your one app is running on port:1234 than you start another app, parcel will take care of that and run that app on another available port.

- **Zero Config :** You just need to install parcel and tell the entry point and parcel will take care of all the things for you.

\*\*/

==============================================================================================================================

- Dev Server : Parcel’s builtin dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve. By default, it starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used. After Parcel starts, the location where the dev server is listening will be printed to the terminal.

The dev server supports several options, which you can specify via CLI options:

- -p, --port – Overrides the default port. The PORT environment variable can also be used to set the port.

- --host – By default, the dev server accepts connections on all interfaces. You can override this to specify that only connections from certain hosts should be accepted.

- --open – Automatically opens the entry in your default browser after Parcel starts. You can also pass a browser name to open a different browser, e.g. --open safari.

==============================================================================================================================

- Hot reloading : As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.

CSS changes are automatically applied via HMR with no page reload necessary. This is also true when using a framework with HMR support built in, like React (via Fast Refresh), and Vue.

==============================================================================================================================

- Lazy mode : In development, it can be frustrating to wait for your entire app to build before the dev server starts up. This is especially true when working on large apps with many pages. If you’re only working on one feature, you shouldn’t need to wait for all of the others to build unless you navigate to them.

You can use the --lazy CLI flag to tell Parcel to defer building files until they are requested in the browser, which can significantly reduce development build times. The server starts quickly, and when you navigate to a page for the first time, Parcel builds only the files necessary for that page. When you navigate to another page, that page will be built on demand. If you navigate back to a page that was previously built, it loads instantly.

parcel 'pages/\*.html' --lazy

This also works with dynamic import(), not just separate entries. So if you have a page with a dynamically loaded feature, that feature will not be built until it is activated. When it is requested, Parcel eagerly builds all of the dependencies as well, without waiting for them to be requested.

==============================================================================================================================

- Caching : Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes. For example, if you change a configuration file, all of the source files that rely on that configuration will be rebuilt.

By default, the cache is stored in the .parcel-cache folder inside your project. You should add this folder to your .gitignore (or equivalent) so that it is not committed in your repo. You can also override the location of the cache using the --cache-dir CLI option.

Caching can also be disabled using the --no-cache flag. Note that this only disables reading from the cache – a .parcel-cache folder will still be created.

==============================================================================================================================

- HTTPS : Sometimes, you may need to use HTTPS during development. For example, you may need to use a certain hostname for authentication cookies, or debug mixed content issues. Parcel’s dev server supports HTTPS out of the box. You can either use an automatically generated certificate, or provide your own.

To use an automatically generated self-signed certificate, use the --https CLI flag. The first time you load the page, you may need to manually trust this certificate in your browser.

parcel src/index.html --https

To use a custom certificate, you’ll need to use the --cert and --key CLI options to specify the certificate file and private key respectively.

parcel src/index.html --cert certificate.cert --key private.key

==============================================================================================================================

- Auto install : When you use a language or plugin that isn’t included by default, Parcel will automatically install the necessary dependencies into your project for you. For example, if you include a .sass file, Parcel will install the @parcel/transformer-sass plugin. When this happens, you'll see a message in the terminal, and the new dependency will be added to the devDependencies in your package.json.

Parcel automatically detects which package manager you use in your project based on the lock file. For example, if yarn.lock is found, then Yarn will be used to install packages. If no lock file is found, then the package manager is chosen based on what is installed on your system. The following package managers are currently supported, listed in priority order:

    Yarn
    Pnpm
    Npm

Auto install only occurs during development by default. During production builds, if a dependency is missing, the build will fail. You can also disable auto install during development using the --no-autoinstall CLI flag.
