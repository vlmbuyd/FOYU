import { callOptions } from "../constants/call";
import OnCallLogo from "../assets/logo/oncall-logo.svg?react";
import Cancel from "../assets/logo/naver.svg?react";
import { useNavigate } from "react-router-dom";
import { useCallTimer } from "../hooks/useCallTimer";
import { formatTime } from "../utils/formatTime";
import apiRequest from "../api/apiRequest";
import { useRef, useState, useEffect } from "react";
import { MODEL } from "../constants/call";

export default function OnCallPage() {
  const navigate = useNavigate();
  const callSeconds = useCallTimer();

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const dcRef = useRef<RTCDataChannel | null>(null);
  const audioTrackRef = useRef<MediaStreamTrack | null>(null);

  const [messages, setMessages] = useState<string[]>([]);

  const handleDataChannelMessage = (event: MessageEvent) => {
    const newMessage = event.data;
    console.log("📩 Message received:", newMessage);
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleStartTranslate = async () => {
    try {
      const data = await apiRequest({
        url: `/session`,
        method: "POST",
      });

      const EPHEMERAL_KEY = data.data.client_secret.value; //임시 키 발급

      const newPc = new RTCPeerConnection();
      pcRef.current = newPc; // 마이크 오디오 트랙 추가

      // 마이크 트랙 가져와서 우선
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const newAudioTrack = mediaStream.getAudioTracks()[0];
      newAudioTrack.enabled = false; // 초기에는 음소거 상태로 설정
      audioTrackRef.current = newAudioTrack;
      newPc.addTrack(newAudioTrack, mediaStream); // 응답 오디오 출력 설정

      // (기존) 오디오 출력 설정
      const audioEl = document.createElement("audio");
      audioEl.autoplay = true;
      newPc.ontrack = (event) => {
        audioEl.srcObject = event.streams[0];
      };

      // DataChannel 생성
      const newDc = newPc.createDataChannel("oai-events");
      dcRef.current = newDc;

      newDc.onmessage = handleDataChannelMessage; // Attach message handler

      // DataChannel open 시점에 "준비 완료"
      newDc.onopen = () => {
        console.log("▶️ DataChannel open");

        // 첫 문장 정확도를 위해 3초 로딩 더 주기
        setTimeout(() => {
          // 마이크 트랙을 활성화해서 음성이 전송되도록 함
          if (audioTrackRef.current) {
            audioTrackRef.current.enabled = true;
          }
        }, 3000);
      };

      newDc.onclose = () => {
        console.log("▶️ DataChannel closed");
      };

      newDc.onerror = (err) => {
        console.error("❌ DataChannel error:", err);
      };

      // SDP Offer 생성 및 전송
      const offer = await newPc.createOffer();
      await newPc.setLocalDescription(offer);

      const sdpResponse = await fetch(
        `${import.meta.env.VITE_OPEN_API_URL}?${MODEL}`,
        {
          method: "POST",
          body: offer.sdp,
          headers: {
            Authorization: `Bearer ${EPHEMERAL_KEY}`,
            "Content-Type": "application/sdp",
            "OpenAI-Beta": "realtime=v1",
          },
        }
      );

      if (!sdpResponse.ok) {
        throw new Error(
          `SDP exchange failed: ${
            sdpResponse.status
          } ${await sdpResponse.text()}`
        );
      }

      const answerSdp = await sdpResponse.text();
      if (!answerSdp) {
        throw new Error("SDP answer was empty.");
      }
      const answer: RTCSessionDescriptionInit = {
        type: "answer",
        sdp: answerSdp,
      };
      await newPc.setRemoteDescription(answer);
      console.log("✅ WebRTC 연결 완료"); // 상태 저장
    } catch (error) {
      console.error("❌ 시작 오류:", error);
      // alert(
      //   `Failed to start translation: ${
      //     error instanceof Error ? error.message : String(error)
      //   }`
      // );
      // 실패 시 클린업
      if (audioTrackRef.current) audioTrackRef.current.stop();
      if (pcRef.current) pcRef.current.close();
      if (dcRef.current) dcRef.current.close();
    }
  };

  useEffect(() => {
    handleStartTranslate();
  }, []);

  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex flex-col items-center gap-1 mb-22">
        <strong className="text-[36px] font-medium text-[#1F2937]">
          통화 중
        </strong>
        <span className="text-[18px] font-normal text-gray-200">
          전화가 연결되었어요
        </span>
      </div>

      {/* 로고 */}
      <div className="flex justify-center items-center w-[160px] h-[160px] rounded-full mb-8 bg-white/80">
        <div className="flex justify-center items-center w-[128px] h-[128px] rounded-full bg-primary/20">
          <div className="opacity-70">
            <OnCallLogo />
          </div>
        </div>
      </div>

      {/* 통화 시간 */}
      <span className="mb-2 text-[24px] font-medium text-gray-200">
        {formatTime(callSeconds)}
      </span>

      {/* 이름 */}
      <span className="mb-8 text-[22px] font-medium text-white">릴리</span>

      <div className="flex justify-center items-center gap-6 w-[216px] mb-10">
        {callOptions.map((option, idx) => (
          <div key={idx}>
            <button className="flex justify-center items-center w-14 h-14 rounded-full bg-[#E5E7EB]/70">
              {option.icon}
            </button>
          </div>
        ))}
      </div>

      <button
        className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-primary"
        onClick={() =>
          navigate("/summary", { state: { messages, callSeconds } })
        }
      >
        <Cancel width={24} height={24} />
      </button>
    </div>
  );
}
