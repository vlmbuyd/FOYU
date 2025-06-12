import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import MainPage from "../pages/main";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/404";
import MyPage from "../pages/my";
import AuthLayout from "./layout/AuthLayout";
import PHQPage from "../pages/phq";
import HeaderLayout from "./layout/HeaderLayout";
import EmotionPage from "../pages/emotion";
import CommunicationPage from "../pages/communication";

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
        element: <HeaderLayout />,
        children: [
          {
            path: "/phq",
            element: <PHQPage />,
          },
          {
            path: "/emotion",
            element: <EmotionPage />,
          },
          {
            path: "/communication",
            element: <CommunicationPage />,
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
