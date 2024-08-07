import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Offers from "./Components/Offers";
import Help from "./Components/Help";
import SignUp from "./Components/SignUp";
import Cart from "./Components/Cart";
import PageNotFound from "./Components/PageNotFound";
import Body from "./Components/Body";
import RestaurentMenu from "./Components/RestaurentMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:restroId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
