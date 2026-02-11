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