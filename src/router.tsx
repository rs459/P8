import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home, { homeLoader } from "./pages/Home";
import Logement, { logementLoader } from "./pages/Logement";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";

import logement from "./data/logement-type";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logement/:id",
        element: <Logement />,
        loader: logementLoader as () => logement,
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

export default router;
