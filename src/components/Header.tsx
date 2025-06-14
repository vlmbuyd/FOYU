import AlarmIcon from "../assets/icons/alarm.svg?react";
import Logo from "../assets/logo/logo.svg?react";

export default function Header() {
  return (
    <header className="fixed left-1/2 top-0 -translate-x-1/2 flex justify-end min-w-[360px] max-w-[450px] w-full h-[52px] pr-[20px] bg-white opacity-80">
      <div className="flex items-center gap-[6px]">
        <AlarmIcon />
        <Logo width={24} height={24} />
      </div>
    </header>
  );
}
