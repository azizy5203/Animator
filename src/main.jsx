import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "animate.css";
import { ThemeProvider } from "./providers/theme-provider.jsx";
import "./vendors/i18n.js";

createRoot(document.getElementById("root")).render(
  <ThemeProvider
    defaultTheme="dark"
    storageKey="anim-report-theme">
    <App />
  </ThemeProvider>
);
