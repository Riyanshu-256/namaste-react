// THIS FILE STORES REACT CODE
// app.jsx is the main file of the app. It joins all components together and decides the basic layout of the application.

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Applayout Component contains all components of planning
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
