import { useState } from "react";
import { tabBarList } from "../constants/common";
import type { TabBarLabel } from "../types/common";

export default function TabBar() {
  const [activeTab, setActiveTab] = useState<TabBarLabel>("홈");

  return (
    <div className="fixed left-1/2 bottom-0 -translate-x-1/2 flex gap-1 justify-around items-center min-w-[360px] max-w-[450px] w-full h-[75px] rounded-t-[20px] bg-[white] opacity-80">
      {tabBarList.map((tab) => (
        <a href={tab.path} onClick={() => setActiveTab(tab.label)}>
          <div className="flex flex-col justify-between items-center gap-1 w-[64px] h-[43px]">
            <div className="flex justify-center items-center w-6 h-6">
              {tab.label === activeTab ? tab.activeIcon : tab.defaultIcon}
            </div>
            <span
              className={
                tab.label === activeTab ? "text-primary" : "text-gray-500"
              }
            >
              {tab.label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
