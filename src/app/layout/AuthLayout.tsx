import { Navigate, Outlet } from "react-router-dom";
import { useAtomValue } from "jotai";
import { isAuthAtom } from "../../atom/authAtom";
import { useEffect, useState } from "react";

export default function AuthLayout() {
  const isAuth = useAtomValue(isAuthAtom);

  // 컴포넌트가 스토리지 값을 읽었는지 확인
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // atomWithStorage가 스토리지에서 값을 읽어 isAuthAtom 상태를 업데이트 하는 시점
    // "초기화 완료"
    setIsInitialized(true);
  }, []);

  // 아직 초기화되지 않았을 때
  if (!isInitialized) return null;

  // 초기화가 완료된 후, 실제 인증 상태를 확인합니다.
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
