import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as BrouserRouter } from "react-router-dom";
import StoreContext from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrouserRouter>
    <StoreContext>
      <App />
    </StoreContext>
  </BrouserRouter>
);
