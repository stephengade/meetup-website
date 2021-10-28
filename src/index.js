import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import NavMenu from "../src/components/Nav/NavMenu.jsx";
import Footer from "./components/Footer/Footer";
import { Wishlist } from "../src/store/Wishlist";

ReactDOM.render(
  <Wishlist>
    <BrowserRouter>
      <NavMenu />
      <App />
      <Footer />
    </BrowserRouter>
  </Wishlist>,
  document.getElementById("root")
);
