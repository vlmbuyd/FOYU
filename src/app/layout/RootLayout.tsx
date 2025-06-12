import { Outlet } from "react-router-dom";
import TabBar from "../../components/TabBar";
import { useAtomValue } from "jotai";
import { isAuthAtom } from "../../atom/authAtom";

export default function RootLayout() {
  const isAuth = useAtomValue(isAuthAtom);

  return (
    <div className="min-w-[360px] max-w-[450px] h-screen pb-[75px] mx-auto">
      <Outlet />
      {isAuth && <TabBar />}
    </div>
  );
}
