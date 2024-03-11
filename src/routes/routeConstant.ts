import { lazy } from "react";

const Dashboard = lazy(async () => await import("../pages/Dashboard"));
const Login = lazy(async () => await import("../pages/Login"));

const publicRoutes = [
  {
    path: "/login",
    element: Login,
  },
];

const privateRoutes = [
  {
    path: "/dashboard",
    element: Dashboard,
  },
];

export { privateRoutes, publicRoutes };
