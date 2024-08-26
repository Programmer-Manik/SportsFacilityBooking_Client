import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import { mainPaths } from "./main.route";
import LandingPages from "../pages/Landing/LandingPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPages />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: routesGenerator(mainPaths),
  },

  {
    path: "/admin",
    element: <Dashboard />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/user",
    element: <Dashboard />,
    children: routesGenerator(userPaths),
  },
]);

export default router;
