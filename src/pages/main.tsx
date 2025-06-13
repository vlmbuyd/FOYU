import MainRoutingCard from "../components/card/MainRoutingCard";
import { mainRoutingCards } from "../constants/main";
import MessageIcon from "../assets/main/message.svg?react";
import AlarmIcon from "../assets/main/alarm.svg?react";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center w-full pt-7">
      <div className="flex flex-col items-start gap-1 w-[343px] mb-6">
        <strong className="text-[28px] font-medium text-gray-200">
          안녕하세요, 은지님!
        </strong>
        <span className="text-[16px] font-normal text-gray-300">
          오늘도 행복한 하루 보내세요 🌿
        </span>
      </div>

      <div className="w-[343px] mb-6">
        <MainRoutingCard
          to="/challenge"
          title="오늘의 메시지"
          description="오늘은 특별한 날이에요! 새로운 챌린지가 시작되었습니다. 함께 참여해볼까요?"
          icon={<MessageIcon />}
        />
      </div>

      <div className="flex flex-wrap gap-4 w-[343px] mb-8">
        {mainRoutingCards.map((card, idx) => (
          <MainRoutingCard
            key={idx}
            to={card.to}
            title={card.title}
            description={card.description}
            icon={card.icon}
            size="small"
          />
        ))}
      </div>

      <div className="w-[343px] mb-6">
        <MainRoutingCard
          to="/habit"
          title="습관 리마인더"
          description="매일 기록하는 습관을 만들어보세요"
          icon={<AlarmIcon />}
        />
      </div>
    </div>
  );
}
