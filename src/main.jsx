import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Download from "./Components/Download.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Download />
  </StrictMode>
);
