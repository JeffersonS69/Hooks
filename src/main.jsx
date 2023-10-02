import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

//import "./08-useReducer/into-reducer"
import { MainApp } from "./09-useContext/MainApp";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MultipleCustomHooks />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
