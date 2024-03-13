import { lazy } from "react";

const Dashboard = lazy(async () => await import("../pages/Dashboard"));
const Login = lazy(async () => await import("../pages/Login"));
const SignUp = lazy(async () => await import("../pages/SignUp"));
const PageNotFound = lazy(async () => await import("../pages/PageNotFound"));

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
  {
    path: "/page-not-found",
    element: PageNotFound,
  },
];

export { privateRoutes, publicRoutes };
