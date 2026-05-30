import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./core/routes/index.js";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);