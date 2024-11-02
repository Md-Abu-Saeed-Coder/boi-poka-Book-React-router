import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";
import ErrorPage from "./component/Error Page/ErrorPage";
import Home from "./component/Home Page/Home";
import DashBord from "./component/Dashbord/DashBord";
import BookDetails from "./component/Book Details/BookDetails";
import Contact from "./component/Contact/Contact";
import Blog from "./component/Blog/Blog";

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
        path:'books/:bookId',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'dashbord',
        element:<DashBord></DashBord>
      },
      {
        path:'contac',
        element:<Contact></Contact>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
