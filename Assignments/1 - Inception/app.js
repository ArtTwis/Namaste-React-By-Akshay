/**
 *
 * <div id="parent">
 *  <div id="child">
 *    <h1>.....</h1>
 *    <h2>.....</h2>
 *  </div>
 * </div>
 *
 * React.createElement (Object) ===> HTML (Browser Understand)
 */

const heading1 = React.createElement(
  "h1",
  { id: "heading1", className: "headingTag" },
  "Hello, World!\nWelcome to Namaste Javascript!"
);

const parentElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a H1 tag..."),
    React.createElement("h2", {}, "I'm a H2 tag..."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a H1 tag..."),
    React.createElement("h2", {}, "I'm a H2 tag..."),
  ]),
]);

console.log("heading1 :>> ", heading1);

console.log("parentElement :>> ", parentElement);

// React.createElement will create a Javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentElement);

// Render method is taking that javascript object and converting it into html element and printing it on DOM...

// JSX
