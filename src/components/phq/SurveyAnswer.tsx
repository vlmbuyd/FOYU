interface SurveyAnswerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option: { emoji: string; label: string };
}

export default function SurveyAnswer({ option, ...props }: SurveyAnswerProps) {
  return (
    <button
      type="button"
      {...props}
      style={{
        boxShadow:
          "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
      }}
      className="min-w-[150px] h-[92px] rounded-[8px] bg-white opacity-90 active:scale-95 active:opacity-100"
    >
      <div className="text-3xl">{option.emoji}</div>
      <span className="text-[14px] font-normal text-[#1F2937]">
        {option.label}
      </span>
    </button>
  );
}
