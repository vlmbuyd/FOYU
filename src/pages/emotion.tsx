import { useState } from "react";
import clsx from "clsx";
import Button from "../components/Button";
import EmotionSelectionButton from "../components/emotion/EmotionSelectionButton";
import { emotionSelectoins } from "../constants/emotion";
import { useNavigate } from "react-router-dom";

export default function EmotionPage() {
  const navigate = useNavigate();
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-col gap-2 w-[343px] h-[116px] p-4 rounded-[24px] mb-8 bg-white opacity-90">
        <h2 className="mb-2 text-[20px] font-medium text-[#1F2937]">
          오늘의 기분은 어떠신가요?
        </h2>
        <p className="mb-3 text-[14px] font-normal text-[#4B5563]">
          아래 이모티콘 중에서 지금 당신의 기분과 가장 가까운 것을 선택해
          주세요.
        </p>
      </div>

      <section className="flex flex-wrap justify-center gap-6 w-[343px] mb-[152px]">
        {emotionSelectoins.map((emotion, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-350 ease-in-out ${
              selectedEmotion === idx ? "scale-120" : "scale-100"
            }`}
            onClick={() => setSelectedEmotion(idx)}
          >
            <EmotionSelectionButton
              className={clsx(
                "transition-all",
                selectedEmotion === idx ? "opacity-100" : ""
              )}
            >
              {emotion.icon}
            </EmotionSelectionButton>
            <span
              className={`text-[15px] font-bold ${
                selectedEmotion === idx
                  ? "text-gray-600 bg-white"
                  : "text-white bg-black/30"
              } px-2 py-1 rounded-md drop-shadow-sm`}
            >
              {emotion.label}
            </span>
          </div>
        ))}
      </section>

      <Button
        className="w-[320px] h-13 bg-blue-500 text-white font-bold disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled={selectedEmotion === null}
        onClick={() => navigate("/communication")}
      >
        완료
      </Button>
    </div>
  );
}
