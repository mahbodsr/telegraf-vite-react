import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./pages/page.tsx"));
const Login = lazy(() => import("./pages/login/page.tsx"));
const Video = lazy(() => import("./pages/[chatId]/[messageId]/page.tsx"));

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/:chatId/:messageId",
      element: <Video />,
    },
  ]);

export default Routes;
