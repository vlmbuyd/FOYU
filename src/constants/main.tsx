import FlagIcon from "../assets/main/flag.svg?react";
import HeartIcon from "../assets/main/heart.svg?react";
import ChallengeIcon from "../assets/main/challenge.svg?react";
import WarnIcon from "../assets/main/warn.svg?react";

const mainRoutingCards = [
  {
    to: "/mission",
    title: "오늘의 미션",
    description: "3개의 새로운 미션",
    icon: <FlagIcon />,
  },
  {
    to: "statistics",
    title: "감정 그래프",
    description: "주간 리포트 보기",
    icon: <HeartIcon />,
  },
  {
    to: "/challenge",
    title: "챌린지",
    description: "진행중인 챌린지",
    icon: <ChallengeIcon />,
  },
  {
    to: "/warn",
    title: "위기 감지",
    description: "도움을 받아보세요",
    icon: <WarnIcon />,
  },
];

export { mainRoutingCards };
