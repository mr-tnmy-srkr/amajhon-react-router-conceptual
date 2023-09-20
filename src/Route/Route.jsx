import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import MainLayout from "../layouts/MainLayout";
import Product from "../pages/Product/Product";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile.jsx/Profile";
import EditProfile from "../pages/EdirProfile/EditProfile";
import getProducts from "../utils/Getproducts";

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
        // loader: () => fetch(`https://dummyjson.com/products`),

        // or

        /*     loader: async () => {
           const res = await fetch(`https://dummyjson.com/products`);
           console.log(res);
           return res; */

        // or

        loader: getProducts,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
        // loader: (params)=>console.log(params.params.id)
        // loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>,
          },
          {
            path: "/dashboard/editProfile",
            element: <EditProfile></EditProfile>,
          },
        ],
      },
    ],
  },
]);

export default myCreatedRoute;
