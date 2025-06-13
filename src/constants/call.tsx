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

export { callOptions };
