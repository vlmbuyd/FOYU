import Speaker from "../assets/call/speaker.svg?react";
import Mute from "../assets/call/mute.svg?react";
import Keyboard from "../assets/call/keyboard.svg?react";

const callOptions = [
  {
    label: "스피커",
    icon: <Speaker />,
  },
  {
    label: "음소거",
    icon: <Mute />,
  },
  {
    label: "스피커",
    icon: <Keyboard />,
  },
];

const MODEL = "model=gpt-4o-mini-realtime-preview-2024-12-17";

const instruction = `사용자가 한국어로 말하고 있으므로 응답도 반드시 한국어로 해주세요.
    부드럽고 따뜻한 목소리로 말하듯이 대화해 주세요.
    사용자의 감정에 공감하며 위로하거나 칭찬하며, 긍정적인 방향으로 이끌어주세요.
    대화의 목적은 사용자가 편안함을 느끼고 자신의 생각을 자연스럽게 표현할 수 있도록 돕는 것입니다.`;

export { callOptions, MODEL, instruction };
