import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { HeaderComponent } from "./Components/Header";
import { BodyComponent } from "./Components/Body";

// Config Driven UI
const AppLayout = () => {
  return (
    <React.Fragment>
      <>
        <HeaderComponent />
        <BodyComponent />
      </>
    </React.Fragment>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
