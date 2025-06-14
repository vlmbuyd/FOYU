import { Outlet } from "react-router-dom";
import MissionHeader from "../../components/mission/MissionHeader";

export default function MissionLayout() {
  return (
    <div className="flex flex-col h-screen pt-[52px]">
      <MissionHeader />
      <Outlet />
    </div>
  );
}
