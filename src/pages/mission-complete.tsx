import Button from "../components/Button";
import MissionToast from "../components/mission/MissionToast";
import { awards, status } from "../constants/mission";

export default function MissionCompletePage() {
  return (
    <div className="flex flex-col items-center pt-7">
      <MissionToast />
      <div className="flex items-center justify-around w-[343px] h-[101px] bg-white/90 rounded-[24px] mb-20">
        {status.map((item, idx) => (
          <div
            key={`status-${idx}`}
            className="flex flex-col items-center justify-around w-8 h-[73px]"
          >
            <div className="flex justify-center items-center">{item.icon}</div>
            <span className="text-[12px] font-normal text-[#4b5563]">
              {item.label}
            </span>
            <span className="text-[14px] font-medium text-primary">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {awards.map((item, idx) => (
          <div
            key={`awards-${idx}`}
            className="flex flex-col items-center justify-center w-[165px] h-[168px] bg-white/90 rounded-[24px]"
          >
            <div className="flex justify-center items-center w-[138px] h-[96px] rounded-[20px] bg-primary/20 border border-dashed border-primary/30 mb-2">
              {item.icon}
            </div>
            <strong className="text-[14px] font-medium text-[#1f2937]">
              {item.label}
            </strong>
            <span className="text-[12px] font-normal text-[#6b7280]">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <Button className="w-[343px] h-[48px] mb-20">
        오늘의 피드백 확인하기
      </Button>
    </div>
  );
}
