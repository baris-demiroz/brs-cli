import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./core/routes/index.js";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);