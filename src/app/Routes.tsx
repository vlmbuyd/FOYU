import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import MainPage from "../pages/main";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/404";
import MyPage from "../pages/my";
import AuthLayout from "./layout/AuthLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: "my",
            element: <MyPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export const router = createBrowserRouter([...routes]);
