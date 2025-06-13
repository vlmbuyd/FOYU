import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo/logo.svg?react";
import Cancel from "../assets/logo/naver.svg?react";
import Call from "../assets/icons/call.svg?react";

export default function CommunicationPage() {
  const navigate = useNavigate();

  const handleStartCall = () => {
    navigate("/oncall");
  };

  return (
    // 전화 대기 중
    <div className="flex flex-col items-center pt-5">
      <div className="flex flex-col items-center gap-1 mb-22">
        <strong className="text-[36px] font-medium text-[#1F2937]">
          숲속 친구
        </strong>
        <span className="text-[16px] font-normal text-[#4B5563]">
          전화가 왔어요
        </span>
      </div>

      <div className="flex justify-center items-center w-[192px] h-[192px] rounded-full mb-8 bg-white/70 animate-wiggle">
        <Logo width={108} height={108} />
      </div>

      <button className="w-[157px] h-12 bg-[#F3F4F6]/80 rounded-full mb-[86px]">
        텍스트로 전화 받기
      </button>

      <div className="flex justify-between w-[215px]">
        <button
          className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-primary"
          onClick={() => navigate("/emotion")}
        >
          <Cancel width={24} height={24} />
        </button>
        <button
          className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-[#61bf6e]"
          onClick={handleStartCall}
        >
          <Call />
        </button>
      </div>
    </div>
  );
}
