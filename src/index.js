import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import NavMenu from "../src/components/Nav/NavMenu.jsx";

ReactDOM.render(
  <BrowserRouter>
    <NavMenu />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
