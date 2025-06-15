import phqImg from "../assets/bg/phq.png";
import emotionImg from "../assets/bg/emotion.png";
import communicationImg from "../assets/bg/communication.png";
import onCallImg from "../assets/bg/oncall.png";
import summaryImg from "../assets/bg/summary.png";
import missionCompleteImg from "../assets/bg/complete.png";

const backgroundImg: Record<string, string> = {
  main: onCallImg,
  phq: phqImg,
  emotion: emotionImg,
  communication: communicationImg,
  oncall: onCallImg,
  summary: summaryImg,
  complete: missionCompleteImg,
};

export { backgroundImg };
