import Modal from "../Modal";
import BouncingLoadingDots from "./BouncingLoadingDots";

interface LoadingModalProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function LoadingModal({ isOpen, toggle }: LoadingModalProps) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="relative flex flex-col items-center justify-center gap-4 w-[220px] h-[150px] bg-white/95 rounded-xl shadow">
        <p className="max-w-full text-[18px] font-normal text-center text-gray-400">
          전화 연결 중입니다...
        </p>
        <BouncingLoadingDots />
      </div>
    </Modal>
  );
}
