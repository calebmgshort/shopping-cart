import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";

const routerConfig = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

export {
  routerConfig,
  router
}