import React from "react";
import { createRoot } from "react-dom/client";
import ProjectsPage from "./ProjectsPage.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectsPage />
  </React.StrictMode>,
);
