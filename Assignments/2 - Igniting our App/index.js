import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "Namaste React 🚀"
);

const Jsxheading2 = (
  <h1 id="heading2" className="heading">
    Namaste React using JSX 2
  </h1>
);

const JsxHeading1 = () => (
  <div>
    {Jsxheading2}
    <h1>It is a fucntional component.... 1</h1>
  </div>
);

// React Functional Component
const HeadingComponent = () => (
  <div>
    <JsxHeading1 />
    {JsxHeading1()}
    <JsxHeading1></JsxHeading1>

    <h1>It is a functional component.... 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
