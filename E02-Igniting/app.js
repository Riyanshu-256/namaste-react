// THIS FILE STORE REACT CODE

import React from "react";
import ReactDOM from "react-dom/client";

/*
<div id="parent">
    <div id="child">
        <h1>Heyyyyy Riyanshu Sharma</h1>
    </div>
</div>
*/

// Create element
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Heyyyyy Riyanshu Sharma! 😁")
  )
); // {} => This is the palace where you will give attribute to the tag (id, class)
console.log(parent); // give object

// Create a React root connected to the <div id="root"> in HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Display the React component/element called 'parent' inside that root
root.render(parent);
