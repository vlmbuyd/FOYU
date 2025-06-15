import Score from "../assets/mission/score.svg?react";
import Level from "../assets/mission/level.svg?react";
import Badge from "../assets/mission/badge.svg?react";
import MindCareBadge from "../assets/mission/mind-care-badge.svg?react";
import Coin from "../assets/mission/coin.svg?react";
import Leaf from "../assets/mission/leaf.svg?react";
import Present from "../assets/mission/present.svg?react";

const status = [
  {
    label: "점수",
    value: "2,450",
    icon: <Score />,
  },
  {
    label: "레벨",
    value: "Lv.5",
    icon: <Level />,
  },
  {
    label: "뱃지",
    value: "12개",
    icon: <Badge />,
  },
];

const awards = [
  {
    label: "마음챙김 뱃지",
    value: "Level 1",
    icon: <MindCareBadge />,
  },
  {
    label: "포인트 획득",
    value: "+100p",
    icon: <Coin />,
  },
  {
    label: "성장 포인트",
    value: "+50XP",
    icon: <Leaf />,
  },
  {
    label: "특별 보상",
    value: "행복 스티커",
    icon: <Present />,
  },
];

export { status, awards };
