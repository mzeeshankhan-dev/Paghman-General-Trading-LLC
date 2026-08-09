import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { applyLanguage } from "./i18n";
import i18n from "./i18n";
import App from "./App.jsx";

// Apply the persisted (or default) language direction/fonts before first paint.
applyLanguage(i18n.language);

createRoot(document.getElementById("root")).render(
    <App />
);
