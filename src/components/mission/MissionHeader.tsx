import MissionHeaderIcon from "../../assets/mission/mission-header.svg?react";

export default function MissionHeader() {
  return (
    <header className="fixed left-1/2 top-0 -translate-x-1/2 flex justify-center items-center min-w-[360px] max-w-[450px] w-full h-[52px] pr-[5%] bg-white opacity-80">
      <h1 className="text-[16px] font-medium text-[#1f2937]">미션</h1>
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 flex items-center justify-center ">
        <MissionHeaderIcon />
      </div>
    </header>
  );
}
