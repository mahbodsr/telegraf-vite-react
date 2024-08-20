import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <Routes />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
