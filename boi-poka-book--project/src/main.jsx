import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";
import ErrorPage from "./component/Error Page/ErrorPage";
import Home from "./component/Home Page/Home";
import DashBord from "./component/Dashbord/DashBord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/' ,
        element:<Home></Home>
      },
      {
        path:'dashbord',
        element:<DashBord></DashBord>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
