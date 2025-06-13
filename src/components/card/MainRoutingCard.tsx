import clsx from "clsx";

interface MainRoutingCardProps {
  to: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  size?: "small" | "large";
}

export default function MainRoutingCard({
  to,
  title,
  description,
  icon,
  size = "large",
}: MainRoutingCardProps) {
  return (
    <a href={to} className="min-w-[164px] max-w-[343px]">
      <div className="flex flex-col gap-3 items-start min-h-[110px] h-fit p-4 rounded-[24px] bg-white/90">
        <div
          className={clsx(
            "flex gap-3",
            size === "small" ? "flex-col" : "items-center"
          )}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15">
            {icon}
          </div>
          <strong className="text-[14px] font-medium text-[#1F2937]">
            {title}
          </strong>
        </div>

        <p>{description}</p>
      </div>
    </a>
  );
}
