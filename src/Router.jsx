import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Checkout from "./Components/Checkout";
import ErrorPage from "./Components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
