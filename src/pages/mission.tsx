import dayjs from "dayjs";
import Progressbar from "../components/Progressbar";
import { useEffect, useState } from "react";
import apiRequest from "../api/apiRequest";
import MissionCard from "../components/mission/MissionCard";

export default function MissionPage() {
  const [missions, setMissions] = useState<
    { title: string; content: string }[]
  >([]);

  const getMissionList = async () => {
    const { data } = await apiRequest({
      url: "/mission",
    });

    // 가장 최신 미션으로 업데이트
    setMissions(data[data.length - 1]);
  };

  useEffect(() => {
    getMissionList();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center w-full pt-3 bg-[#F8EEEE]">
      <div className="flex gap-3 mb-3">
        <button className="w-[161px] h-[54px] rounded-[24px] text-[16px] font-medium text-white bg-primary">
          오늘의 미션
        </button>
        <button className="w-[161px] h-[54px] rounded-[24px] text-[16px] font-medium text-[#374151] bg-white/80">
          캐릭터 미션
        </button>
      </div>

      {/* 미션 현황 */}
      <section className="flex flex-col mb-6">
        <div
          style={{
            boxShadow:
              "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
          }}
          className="flex flex-col justify-between w-[335px] h-[99px] p-[17px] rounded-[20px] bg-white/90"
        >
          <div className="flex justify-between">
            <div>
              <h2 className="text-[14px] font-medium text-[#1f2937]">
                미션 현황
              </h2>
              <span className="text-[14px] font-medium text-[#4b5563]">
                {dayjs().format("YYYY년 M월 D일")}
              </span>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col items-center">
                <strong className="text-[18px] font-bold text-primary">
                  1
                </strong>
                <span className="text-[12px] font-normal text-[#6b7280]">
                  완료
                </span>
              </div>
              <div className="w-[1px] h-8 bg-[#E5E7EB]" />
              <div className="flex flex-col items-center">
                <strong className="text-[18px] font-bold text-[#4b5563]">
                  3
                </strong>
                <span className="text-[12px] font-normal text-[#6b7280]">
                  진행 중
                </span>
              </div>
            </div>
          </div>

          <Progressbar progress={1} total={3} />
        </div>
      </section>

      <div className="flex flex-col items-center gap-5 mb-30">
        {missions.length > 0 ? (
          missions.map((mission, idx) => (
            <MissionCard key={idx} data={{ idx: idx + 1, ...mission }} />
          ))
        ) : (
          <p className="text-[16px] font-medium text-[#6b7280] pt-20">
            미션을 불러오는 중입니다..
          </p>
        )}
      </div>
    </div>
  );
}
