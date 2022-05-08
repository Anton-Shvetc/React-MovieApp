import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.render(
  <React.Fragment>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.Fragment>,
  document.getElementById("root")
);
