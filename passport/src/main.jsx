import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import Apply from "./Pages/Apply.jsx";
import Firstissuance from "./Pages/Firstissuance.jsx";
import Onlineform from "./Pages/Onlineform.jsx";
import Userdetail from "./Pages/Userdetail.jsx";
import Photo from "./Pages/Photo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apply",
    element: <Apply />,
  },

  {
    path: "/firstissuance",
    element: <Firstissuance />,
  },
  {
    path: "/onlineform",
    element: <Onlineform />,
  },
  {
    path: "/userdetail",
    element: <Userdetail />,
  },
  {
    path: "/photo",
    element: <Photo />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
