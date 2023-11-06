import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping, fas } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
library.add(fas, faCartShopping);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
