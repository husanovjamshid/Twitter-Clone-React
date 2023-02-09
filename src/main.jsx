import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./main.scss";
import { UserProvider } from "./context/UserContext";
// import { TweetsProvider } from "./context/TweetsContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <TweetsProvider> */}
          {" "}
          <App />
        {/* </TweetsProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
