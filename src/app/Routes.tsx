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
import PHQPage from "../pages/phq";
import HeaderLayout from "./layout/HeaderLayout";
import EmotionPage from "../pages/emotion";
import CommunicationPage from "../pages/communication";
import OnCallPage from "../pages/oncall";
import SummaryPage from "../pages/summary";
import MissionPage from "../pages/mission";
import MissionLayout from "./layout/MissionLayout";
import TabBarLayout from "./layout/TabBarLayout";

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
        element: <TabBarLayout />,
        children: [
          {
            // '/' 경로로 접근 시 '/login'으로 리다이렉트
            index: true,
            element: <Navigate to="/login" replace />,
          },
          {
            path: "my",
            element: <MyPage />,
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
            element: <MissionLayout />,
            children: [
              {
                path: "/mission",
                element: <MissionPage />,
              },
            ],
          },

          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter([...routes]);
