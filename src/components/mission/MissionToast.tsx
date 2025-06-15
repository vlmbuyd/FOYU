import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MissionToast() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[343px] py-4 px-6 rounded-[24px] bg-white/95 text-center shadow-lg z-50"
        >
          <h2 className="text-[20px] font-bold text-primary mb-1">
            축하합니다! 🎉
          </h2>
          <p className="text-[14px] font-medium text-[#4b5563]">
            오늘의 미션을 성공적으로 완료했어요!
            <br />
            새로운 보상이 도착했습니다
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
