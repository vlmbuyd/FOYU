import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SurveyAnswer from "../components/phq/SurveyAnswer";
import { surveyAnswerOptions, surveyQuestions } from "../constants/phq9";
import Progressbar from "../components/Progressbar";

export default function PHQPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    // 마지막 질문에 도달했을 때
    if (progress === surveyQuestions.length - 1) {
      navigate("/emotion");
    } else {
      // 다음 질문으로 진행
      setProgress((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-col items-center gap-2 w-[343px] h-[106px] p-4 rounded-[24px] mb-3 bg-white opacity-90">
        <h2 className="mb-2 text-[20px] font-medium text-[#1F2937]">
          은지님의 마음을 알아볼게요
        </h2>
        <p className="mb-3 text-[14px] font-normal text-[#4B5563]">
          편안한 마음으로 답변해주세요
        </p>

        <Progressbar progress={progress} />
      </div>

      {/* 질문 */}
      <div className="flex items-center justify-center w-[343px] h-[82px] p-5 rounded-[24px] mb-6 text-[15px] font-normal text-[#1F2937] bg-white opacity-90">
        {surveyQuestions[progress]}
      </div>

      {/* 설문 응답  */}
      <div className="flex flex-wrap w-[311px] h-[196px] gap-3">
        {surveyAnswerOptions.map((option, idx) => (
          <SurveyAnswer key={idx} option={option} onClick={handleNext} />
        ))}
      </div>
    </div>
  );
}
