import "../index.css";
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HeaderComponent } from "./Components/Header";
import { BodyComponent } from "./Components/Body";
import { FooterComponent } from "./Components/Footer";
import Profile from "./Components/Profile";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import RestaurentDetail from "./Pages/Restaurent";
import LoginComponent from "./Pages/Login";
import ShimmerUI from "./Components/ShimmerUI";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./redux/store";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading
// Dynamic Import

const Instamart = lazy(() => import("./Components/Instamart"));

const AboutUs = lazy(() => import("./Pages/AboutUs"));

// Upon On Demand loading - upon render - suspend loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Dummy User",
    email: "dummy@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
    </Provider>
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
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:restaurentid",
        element: <RestaurentDetail />,
      },
      ,
      {
        path: "/login",
        element: <LoginComponent />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
