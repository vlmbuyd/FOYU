import { instruction } from "../constants/call";

function promptUpdate(dc: RTCDataChannel) {
  const prompt = instruction.trim();

  if (dc.readyState !== "open") {
    console.warn(
      "DataChannel이 아직 open 상태가 아니므로 프롬프트 전송을 생략합니다."
    );
    return;
  }

  try {
    dc.send(JSON.stringify({ type: "session.update", session: { prompt } }));
  } catch (e) {
    console.error("❌ session.update 전송 오류:", e);
  }
}

export { promptUpdate };
