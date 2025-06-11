import { tabBarList } from "../constants/common";
import { useLocation, useNavigate } from "react-router-dom";

export default function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (toPath: string) => {
    navigate(toPath);
  };

  return (
    <div className="fixed left-1/2 bottom-0 -translate-x-1/2 flex gap-1 justify-around items-center min-w-[360px] max-w-[450px] w-full h-[75px] rounded-t-[20px] bg-[white] opacity-80">
      {tabBarList.map((tab) => {
        const active = tab.isActive(location.pathname);

        return (
          <a
            href={tab.path}
            onClick={() => handleNavigate(tab.path)}
            key={tab.path}
          >
            <div className="flex flex-col justify-between items-center gap-1 w-[64px] h-[43px]">
              <div className="flex justify-center items-center w-6 h-6">
                {active ? tab.activeIcon : tab.defaultIcon}
              </div>
              <span className={active ? "text-primary" : "text-gray-500"}>
                {tab.label}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
