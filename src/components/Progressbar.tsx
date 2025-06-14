export default function Progressbar({
  progress,
  total,
}: {
  progress: number;
  total: number;
}) {
  return (
    <div className="w-full h-2 bg-[#E5E7EB] rounded-full">
      <div
        style={{ width: `${(progress / total) * 100}% ` }}
        className="h-full rounded-full bg-primary transition-all duration-400 ease-in-out"
      />
    </div>
  );
}
