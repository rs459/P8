import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";

import { DataProvider } from "./providers/DataProvider";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={Router} />
    </DataProvider>
  </React.StrictMode>
);
