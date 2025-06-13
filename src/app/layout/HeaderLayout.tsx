import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { backgroundImg } from "../../constants/background";

export default function HeaderLayout() {
  const location = useLocation();
  const imgSrc = backgroundImg[location.pathname.slice(1)];

  return (
    <div
      style={{
        // 라우팅 경로와 매핑하여 배경화면 설정
        backgroundImage: `url(${imgSrc})`,
      }}
      className="relative w-full h-screen bg-no-repeat bg-cover pt-[52px]"
    >
      {/* dimmed */}
      <div className="relative inset-0 bg-black opacity-40" />
      <Header />
      <Outlet />
    </div>
  );
}
