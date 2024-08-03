# Namaste React

================

## CDN

---

CDN stands for Content Delivery Network.

### Why use CDN?

- To decrease the latency of the application (annoying delay is called latency).
- Scalability
- Security. Any website can come across DDoS attacks or similar. CDN can solve this problem pretty easily.

## Crossorigin

---

The crossorigin attribute in an HTML `<script>` tag controls how the browser handles requests for external scripts that come from another domain.

## React vs ReactDOM

---

React is a library and has all core functionality like hooks, state management like `useState`, etc., defined in this library. Whereas ReactDOM library is used to manipulate the DOM or modify the DOM. Creating root and rendering root is defined in the ReactDOM library.

## React.createElement

---

This will create an object of `ReactElement`.

## Root.render()

---

This method will overwrite the root element which exists in the HTML file.

## Package.json

---

It is a configuration file for a Node project.

## Package-lock.json

---

It is a file that keeps track of packages installed in the project.

## Dependencies

---

- **Dependencies**: These are the packages required in the production environment also.
- **DevDependencies**: Packages required in the development phase only, not in production dependencies.

## caret(^) vs tilde(~)

---

- Caret is used to update the minor version automatically.
- Tilde is used to update the major version automatically.

## Transitive Dependencies

---

When we install any package, it might depend on other packages, and those packages also depend on other packages. These packages are called transitive dependencies.

## npx vs Npm

---

- Npm command is used to install a new package, whereas Npx is used to execute a package.

# BUNDLERS

---

- Vite
- Webpack
- Parcel
- Rollup
- Browserify

> Create-react-app uses Webpack behind the scene.

### Parcel

Parcel gives us the following superpowers:

- **Create a server**
- **Hot Module Replacement**: Whenever you make changes in any of your project files, it automatically reloads the app, just like live-server. You don't need to press Ctrl+R to reload the app; it does it automatically. Another example is the nodemon package.
- **File Watcher Algorithm**: With the help of this algorithm, Parcel knows that there is a change in the project files and it needs to reload the app again. Parcel takes care of it automatically.
- **Bundling**: Bundle up all project files into the dist directory.
- **Minify**: Minify the code files.
- **Cleaning our Code**
- **Dev and Prod build**
- **Super fast build algorithm**
- **Image Optimization**: Minify your images
- **Caching while development**
- **Compression**
- **Tree Shaking**: Removing unwanted code
- **Compatible with older versions of browsers**: It uses Polyfills (A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it).
- Allows us to run our app on HTTPS on the development environment. (npx parcel index.html --https)
- Manages port number automatically. Suppose your one app is running on port:1234, then you start another app, Parcel will take care of that and run that app on another available port.
- **Zero Config**: You just need to install Parcel and tell the entry point, and Parcel will take care of all the things for you.

### Dev Server

Parcel's built-in dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve. By default, it starts a server at <http://localhost:1234>. If port 1234 is already in use, then a fallback port will be used. After Parcel starts, the location where the dev server is listening will be printed to the terminal.

The dev server supports several options, which you can specify via CLI options:

- `-p`, `--port` – Overrides the default port. The `PORT` environment variable can also be used to set the port.
- `--host` – By default, the dev server accepts connections on all interfaces. You can override this to specify that only connections from certain hosts should be accepted.
- `--open` – Automatically opens the entry in your default browser after Parcel starts. You can also pass a browser name to open a different browser, e.g., `--open safari`.

### Hot Reloading

As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases, it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh
