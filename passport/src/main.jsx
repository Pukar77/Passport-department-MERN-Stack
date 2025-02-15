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
import Showstatus from "./Pages/Showstatus.jsx";
import Searchlostpassport from "./Pages/Searchlostpassport.jsx";
import Statusresult from "./Pages/Statusresult.jsx";

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
  {
    path: "/status",
    element: <Showstatus />,
  },
  {
    path: "/search",
    element: <Searchlostpassport />,
  },
  {
    path: "/statusresult",
    element: <Statusresult />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
