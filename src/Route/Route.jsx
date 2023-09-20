import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/products";
import MainLayout from "../layouts/MainLayout";

const myCreatedRoute = createBrowserRouter([
  // This is a fixed item
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    // This is changeable
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/dashboard",
        element: <Products></Products>,
      },
    ],
  },
]);

export default myCreatedRoute;
