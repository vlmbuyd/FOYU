import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { formatTime } from "../utils/formatTime";

export default function SummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between items-center h-[85%] pt-8">
      <div>
        <div
          style={{
            boxShadow:
              "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
          }}
          className="flex flex-col gap-1 w-[343px] h-[84px] bg-white/90 p-4 mb-6 rounded-[24px]"
        >
          <strong className="text-[20px] font-medium text-primary">
            통화 감정 요약
          </strong>
          <span className="text-[14px] font-normal text-[#4B5563]">
            은지님과의 {formatTime(location.state.callSeconds)} 통화
          </span>
        </div>

        <div
          style={{
            boxShadow:
              "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
          }}
          className="flex flex-col gap-1 w-[343px] bg-white/90 p-6 mb-6 rounded-[24px]"
        >
          <p className="text-[14px] font-normal text-[#374151]">
            {location.state.data.summary}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="w-[311px] h-[52px]"
          onClick={() => navigate("/main", { replace: true })}
        >
          확인했어요
        </Button>
        <Button
          variant="outlined"
          className="w-[311px] h-[52px]"
          onClick={() => navigate("/communication")}
        >
          다시 통화하기
        </Button>
      </div>
    </div>
  );
}
