import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";

//for routing
import { BrowserRouter } from "react-router-dom";
import AdminContext from "./context/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <AdminContext>
        <App />
      </AdminContext>
    </AuthContext>
  </BrowserRouter>
);
