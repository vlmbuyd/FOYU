import { useNavigate } from "react-router-dom";
import MisisonPoint from "../../assets/mission/point.svg?react";

interface MissionCardProps {
  data: {
    idx: number;
    title: string;
    content: string;
  };
}

export default function MissionCard({ data }: MissionCardProps) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        boxShadow:
          "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
      }}
      className="w-[335px] min-h-[230px] rounded-[20px] bg-white/90 overflow-hidden"
    >
      <img src={`/mission/mission-${data.idx}.png`} alt="mission-image" />

      <div className="flex flex-col p-[16px]">
        <div className="flex justify-between mb-[3px]">
          <strong className="text-[16px] font-semibold text-[#1f2937]">
            {data.title}
          </strong>

          <div className="px-3 py-[7.5px] rounded-full bg-primary/10 text-primary">
            {"★".repeat(data.idx)}
          </div>
        </div>

        <p className="block text-[14px] font-normal text-[#4b5563]">
          {data.content}
        </p>

        <div className="flex justify-between items-center mt-[12px]">
          <div className="flex items-center gap-1">
            <MisisonPoint />
            <span>{data.idx * 20} 포인트</span>
          </div>

          <button
            className="w-[101px] h-9 text-[14px] font-medium text-white bg-primary rounded-[8px]"
            onClick={() => navigate("/mission/complete")}
          >
            완료하기
          </button>
        </div>
      </div>
    </div>
  );
}
