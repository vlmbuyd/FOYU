// 심플 로딩 애니메이션, 필요시 더 꾸며도 됨
export default function BouncingLoadingDots() {
  return (
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-primary rounded-full animate-bounce-strong" />
      <div
        className="w-3 h-3 bg-primary rounded-full animate-bounce-strong"
        style={{ animationDelay: "0.15s" }}
      />
      <div
        className="w-3 h-3 bg-primary rounded-full animate-bounce-strong"
        style={{ animationDelay: "0.25s" }}
      />
    </div>
  );
}
