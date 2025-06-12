import { useSetAtom } from "jotai";
import Button from "../components/Button";
import { isAuthAtom } from "../atom/authAtom";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();
  const setIsAuth = useSetAtom(isAuthAtom);

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <Button className="w-[165px] h-[48px]" onClick={handleLogout}>
        로그아웃
      </Button>
    </div>
  );
}
