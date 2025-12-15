// THIS FILE STORES REACT CODE

import React from "react";
import ReactDOM from "react-dom/client";

// JSX(transpiled before it reaches the JS) - PARCEL - Babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const heading = <h1 className="head">Namaste React using JSX</h1>;

// React Component are 2 types
// 1. React Functional Component => Modern way
// 2. Class Based Component => Old way of writing code of component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
