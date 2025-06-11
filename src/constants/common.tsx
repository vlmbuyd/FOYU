import HomeIcon from "../assets/tab/home.svg?react";
import DiaryIcon from "../assets/tab/diary.svg?react";
import MissionIcon from "../assets/tab/mission.svg?react";
import CommunityIcon from "../assets/tab/community.svg?react";
import MyIcon from "../assets/tab/my.svg?react";

const tabBarList = [
  {
    label: "홈",
    defaultIcon: <HomeIcon fill="#6B7280" />,
    activeIcon: <HomeIcon fill="#FF9B9B" />,
    path: "/",
  },
  {
    label: "일기",
    defaultIcon: <DiaryIcon fill="#6B7280" />,
    activeIcon: <DiaryIcon fill="#FF9B9B" />,
    path: "/diary",
  },
  {
    label: "미션",
    defaultIcon: <MissionIcon fill="#6B7280" />,
    activeIcon: <MissionIcon fill="#FF9B9B" />,
    path: "/mission",
  },
  {
    label: "커뮤니티",
    defaultIcon: <CommunityIcon fill="#6B7280" />,
    activeIcon: <CommunityIcon fill="#FF9B9B" />,
    path: "/community",
  },
  {
    label: "마이",
    defaultIcon: <MyIcon fill="#6B7280" />,
    activeIcon: <MyIcon fill="#FF9B9B" />,
    path: "/my",
  },
] as const;

export { tabBarList };
