import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface EmotionSelectionButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function EmotionSelectionButton({
  className,
  children,
  ...props
}: PropsWithChildren<EmotionSelectionButtonProps>) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        `w-[96px] h-[96px] flex justify-center items-center rounded-full bg-white opacity-90`,
        className
      )}
    >
      {children}
    </button>
  );
}
