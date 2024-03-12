import { lazy } from "react";

const Dashboard = lazy(async () => await import("../pages/Dashboard"));
const Login = lazy(async () => await import("../pages/Login"));
const SignUp = lazy(async () => await import("../pages/SignUp"));

const publicRoutes = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/signup",
    element: SignUp,
  },
];

const privateRoutes = [
  {
    path: "/dashboard",
    element: Dashboard,
  },
];

export { privateRoutes, publicRoutes };
