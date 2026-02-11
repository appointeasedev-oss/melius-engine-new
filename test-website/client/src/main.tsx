import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Optimized entry point with React.lazy for code splitting
const LazyApp = React.lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <LazyApp />
  </React.Suspense>
);

// Add viewport meta tag for mobile responsiveness
document.addEventListener("DOMContentLoaded", () => {
  const meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
  document.head.appendChild(meta);
});