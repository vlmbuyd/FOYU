import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="min-w-[360px] max-w-[450px] h-screen pb-[75px] mx-auto">
      <Outlet />
    </div>
  );
}
