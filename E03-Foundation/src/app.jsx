// THIS FILE STORES REACT CODE

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
