import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import MainPage from "../pages/main";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/404";
import MyPage from "../pages/my";

const loginRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/my",
        element: <MyPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter([...loginRoutes, ...routes]);
