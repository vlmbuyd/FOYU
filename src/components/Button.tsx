import clsx from "clsx";
import type { PropsWithChildren } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined";
  className?: string;
}

export default function Button({
  variant = "filled",
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      className={clsx(
        "h-12 rounded-[20px] text-[16px] font-semibold",
        className,
        variant == "filled"
          ? "text-white bg-primary"
          : "text-primary bg-[#F4E7E7]"
      )}
    >
      {children}
    </button>
  );
}
