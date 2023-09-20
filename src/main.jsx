import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from "./Route/Route";
// import MainLayout from "./Layouts/MainLayout";
// import Home from "./pages/Home/Home";
// import Products from "./pages/Products/products";

/*const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/products",
    element: <div>product</div>,
  }, {
    path: "/about",
    element: <div>about</div>,
  },
]);  */



/* const myCreatedRoute = createBrowserRouter([
  // This is a fixed item
  {
    path: "/",
    element: (
      <section>
        <div className="py-5 shadow-lg">This is a fixed item</div>
        <Outlet></Outlet>
      </section>
    ),

    // This is changeable
    children: [
      {
        path: "/",
        element: <div>this is a home route</div>,
      },
      {
        path: "/products",
        element: <div>Products page</div>,
      },
    ],
  },
]);
 */


/* const myCreatedRoute = createBrowserRouter([
  // This is a fixed item
  {
    path: "/",
    element:<MainLayout></MainLayout>,

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
    ],
  },
]); */


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
