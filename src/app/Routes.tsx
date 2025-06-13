import {
  createBrowserRouter,
  type RouteObject,
  Navigate,
} from "react-router-dom";
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
import OnCallPage from "../pages/oncall";
import SummaryPage from "../pages/summary";

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
        // '/' 경로로 접근 시 '/main'으로 리다이렉트
        index: true,
        element: <Navigate to="/main" replace />,
      },
      {
        element: <AuthLayout />,
        children: [
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
            path: "/main",
            element: <MainPage />,
          },
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
          {
            path: "/oncall",
            element: <OnCallPage />,
          },
          {
            path: "/summary",
            element: <SummaryPage />,
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
