import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/Product/Product";

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
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path:"/product/:id",
        element:<Product></Product>,
        // loader: (params)=>console.log(params.params.id)
        // loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default myCreatedRoute;
