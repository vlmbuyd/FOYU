import { callOptions } from "../constants/call";
import OnCallLogo from "../assets/logo/oncall-logo.svg?react";
import Cancel from "../assets/logo/naver.svg?react";
import { useNavigate } from "react-router-dom";

export default function OnCallPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex flex-col items-center gap-1 mb-22">
        <strong className="text-[36px] font-medium text-[#1F2937]">
          통화 중
        </strong>
        <span className="text-[18px] font-normal text-gray-200">
          전화가 연결되었어요
        </span>
      </div>

      {/* 로고 */}
      <div className="flex justify-center items-center w-[160px] h-[160px] rounded-full mb-8 bg-white/80">
        <div className="flex justify-center items-center w-[128px] h-[128px] rounded-full bg-primary/20">
          <div className="opacity-70">
            <OnCallLogo />
          </div>
        </div>
      </div>

      {/* 통화 시간 */}
      <span className="mb-2 text-[24px] font-medium text-gray-200">00:06</span>

      {/* 이름 */}
      <span className="mb-8 text-[22px] font-medium text-white">릴리</span>

      <div className="flex justify-center items-center gap-6 w-[216px] mb-10">
        {callOptions.map((option, idx) => (
          <div key={idx}>
            <button className="flex justify-center items-center w-14 h-14 rounded-full bg-[#E5E7EB]/70">
              {option.icon}
            </button>
          </div>
        ))}
      </div>

      <button
        className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-primary"
        onClick={() => navigate("/summary")}
      >
        <Cancel width={24} height={24} />
      </button>
    </div>
  );
}
