import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { store } from "./store/";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter(
  [{ path: "/E-Commerce-App-React", element: <App /> }],
  {
    // basename: "/E-Commerce-App-React", // Set your desired basename here
  }
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
