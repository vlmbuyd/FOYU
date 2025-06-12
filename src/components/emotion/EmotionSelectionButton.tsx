import type { PropsWithChildren } from "react";

interface EmotionSelectionButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export default function EmotionSelectionButton({
  children,
  ...props
}: PropsWithChildren<EmotionSelectionButtonProps>) {
  return (
    <button
      type="button"
      {...props}
      className="w-[96px] h-[96px] flex justify-center items-center rounded-full bg-white opacity-90"
    >
      {children}
    </button>
  );
}
