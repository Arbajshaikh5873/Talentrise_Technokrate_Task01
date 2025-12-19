import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ViewPage from "./components/ViewPage.jsx";
import AddEdit from "./components/AddEdit.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/viewPage" element={<ViewPage />} />
      <Route path="/addEdit" element={<AddEdit />} />
    </Routes>
  </BrowserRouter>
);
