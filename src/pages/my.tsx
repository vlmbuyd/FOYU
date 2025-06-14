import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        className="w-[165px] h-[48px]"
        onClick={() => navigate("/login", { replace: true })}
      >
        로그아웃
      </Button>
    </div>
  );
}
