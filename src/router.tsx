import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logement/:id",
        element: <Logement />,
      },
      {
        path: "404",
        element: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
