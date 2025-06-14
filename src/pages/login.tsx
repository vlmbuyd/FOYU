import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../assets/logo/logo.svg?react";
import KakaoLogo from "../assets/logo/kakao.svg?react";
import GoogleLogo from "../assets/logo/google.svg?react";
import NaverLogo from "../assets/logo/naver.svg?react";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/phq");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* 로고 */}
      <div className="flex flex-col gap-3 items-center mb-12 ">
        <LogoIcon />
        <strong className="text-2xl font-semibold text-primary">FOYU</strong>
      </div>

      <form
        className="flex flex-col items-center gap-3 w-[320px] mb-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-[6px] w-full">
          <label
            htmlFor="email"
            className="text-[14px] font-medium text-[#111]"
          >
            이메일
          </label>
          <input
            type="text"
            id="email"
            placeholder="이메일을 입력해주세요"
            className="w-full h-[48px] p-4 border border-[#E5E5EC] rounded-[20px] text-[#111] placeholder:text-[#767676]"
          />
        </div>

        <div className="flex flex-col gap-[6px] w-full mb-15">
          <label
            htmlFor="password"
            className="text-[14px] font-medium text-[#111]"
          >
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            className="w-full h-[48px] p-4 border border-[#E5E5EC] rounded-[20px] text-[#111] placeholder:text-[#767676]"
          />
        </div>

        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>

      <div className="flex items-center gap-3 mb-9">
        <span className="text-[13px] font-medium text-[#4B5563] underline cursor-pointer">
          회원가입
        </span>
        <div className="w-[1px] h-[12px] bg-[#E5E5EC]" />
        <span className="text-[13px] font-medium text-[#4B5563] underline cursor-pointer">
          이메일 찾기
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6 ">
        <hr className="w-[122px] border-0.5 border-solid border-[#E5E5EC]" />
        <span className="text-[12px] font-medium text-[#767676] cursor-pointer">
          간편 로그인
        </span>
        <hr className="w-[122px] border-0.5 border-solid border-[#E5E5EC]" />
      </div>

      <div className="flex gap-3">
        <div className="flex justify-center items-center w-10 h-10 bg-[#FEE500] rounded-[100px]">
          <KakaoLogo />
        </div>
        <div className="flex justify-center items-center w-10 h-10 bg-white border border-solid border-[#E5E5EC] rounded-[100px]">
          <GoogleLogo />
        </div>
        <div className="flex justify-center items-center w-10 h-10 bg-[#03C75A] rounded-[100px]">
          <NaverLogo />
        </div>
      </div>
    </div>
  );
}
