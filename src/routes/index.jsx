import { createBrowserRouter } from "react-router-dom";

import Service from "@/pages/Service";
import App from "@/App";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import AdminLayout from "@/layout/AdminLayout";
import Dashboard from "@/pages/Dashboard";
import Products from "@/pages/Products";
import Orders from "@/pages/Orders";
import Settings from "@/pages/Settings";
import { fetchProductDetailsById } from "@/lib/query";
import Cart from "@/pages/Cart";
import ProductDetails from "@/pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/admin/products",
            element: <Products />,
          },
          {
            path: "/admin/products/:id",
            loader: ({ params }) => fetchProductDetailsById(params.id),
            element: <ProductDetails />,
          },
          {
            path: "/admin/orders",
            element: <Orders />,
          },
          {
            path: "/admin/settings",
            element: <Settings />,
          },
          {
            path: "/admin/cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

export default router;
