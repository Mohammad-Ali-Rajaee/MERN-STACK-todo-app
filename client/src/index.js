import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TodoContextProvider } from "./context/todoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TodoContextProvider>
);
