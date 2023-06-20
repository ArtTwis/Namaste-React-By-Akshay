import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
import { HeaderComponent } from "./Components/Header";
import { BodyComponent } from "./Components/Body";
import { FooterComponent } from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import RestaurentDetail from "./Pages/Restaurent";

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:restaurentid",
        element: <RestaurentDetail />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
