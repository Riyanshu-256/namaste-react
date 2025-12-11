// THIS FILE STORE REACT CODE
/*
<div id="parent">
    <div id="child">
        <h1>Heyyyyy Riyanshu Sharma</h1>
    </div>
</div>
*/
// import React from "react";
// import ReactDOM from "react-dom/client";

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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
