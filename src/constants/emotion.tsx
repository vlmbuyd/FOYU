import VeryGood from "../assets/emotion/very_good.svg?react";
import Neutral from "../assets/emotion/neutral.svg?react";
import Bad from "../assets/emotion/bad.svg?react";
import Excited from "../assets/emotion/excited.svg?react";
import Tired from "../assets/emotion/tired.svg?react";
import Angry from "../assets/emotion/angry.svg?react";

const emotionSelectoins = [
  {
    label: "매우 좋아요",
    icon: <VeryGood />,
    color: "#EAB308",
  },
  {
    label: "보통이에요",
    icon: <Neutral />,
    color: "#60A5FA",
  },
  {
    label: "별로예요",
    icon: <Bad />,
    color: "#A855F7",
  },
  {
    label: "신나요",
    icon: <Excited />,
    color: "#F97316",
  },
  {
    label: "피곤해요",
    icon: <Tired />,
    color: "#6B7280",
  },
  {
    label: "화가나요",
    icon: <Angry />,
    color: "#EF4444",
  },
];

export { emotionSelectoins };
