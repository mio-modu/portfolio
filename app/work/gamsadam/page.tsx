import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import CaseSection from "@/components/CaseSection";
import TechLinkRow from "@/components/TechLinkRow";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "감사담",
  openGraph: {
    title: "감사담",
    images: ["/img/gamsadam-today.jpg"],
  },
};

const PHONE_SHOTS = [
  { src: "/img/gamsadam-splash.jpg", alt: "스플래시", marginTop: 0 },
  { src: "/img/gamsadam-today.jpg", alt: "오늘 기록", marginTop: 44 },
  { src: "/img/gamsadam-calendar.jpg", alt: "마음 캘린더", marginTop: 88 },
  { src: "/img/gamsadam-community.jpg", alt: "감사 나눔터", marginTop: 132 },
  {
    src: "/img/gamsadam-today-warmth.jpg",
    alt: "오늘의 온기",
    marginTop: 176,
  },
];

const FEEDBACK_SHOTS = [
  {
    src: "/img/gamsadam-feedback-open.jpg",
    alt: "마음 코치가 오늘의 감사 세 줄을 열어보는 화면",
  },
  {
    src: "/img/gamsadam-feedback-strength.jpg",
    alt: "오늘의 마음을 풀어내고 강점을 짚기 시작하는 편지",
  },
  {
    src: "/img/gamsadam-feedback-detail.jpg",
    alt: "성실함과 자기확신 같은 강점을 근거와 함께 서술하는 프리미엄 편지",
  },
  {
    src: "/img/gamsadam-feedback-message.jpg",
    alt: "마음이 건네는 말과 내일을 위한 질문, 편지 복사 버튼",
  },
  {
    src: "/img/gamsadam-feedback-2nd-reread.jpg",
    alt: "두 번째 편지가 첫 번째에서 짚은 내용을 다시 불러오는 장면",
  },
];

const FEEDBACK_POINTS = [
  {
    label: "짧은 기록도 놓치지 않는 AI",
    desc: "'맛있는 점심과 커피', '비염이 괜찮아짐' 같은 한 줄짜리 기록에서도 구체적인 맥락과 감정을 읽어내 답장합니다.",
  },
  {
    label: "프리미엄은 더 깊고 풍성하게",
    desc: "무료 편지보다 분량이 훨씬 길어져, 오늘의 마음 · 강점 · 마음이 건네는 말 · 내일을 위한 질문까지 네 단락으로 확장됩니다.",
  },
  {
    label: "매번 다르지 않고, 하루 딱 두 번",
    desc: "무작위로 다른 이야기를 던지는 여느 AI 피드백과 달리, 프리미엄 편지는 하루 딱 두 번만 옵니다. 두 번째 편지는 반드시 첫 번째에서 짚은 강점을 이어받아 더 깊이 파고들어, 매번 새 대화가 아니라 하나로 이어지는 대화가 됩니다.",
  },
];

export default function GamsadamPage() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#0A0A0A",
        fontFamily:
          "Inter,Pretendard,'Helvetica Neue',Helvetica,Arial,sans-serif",
        padding: "0 28px 160px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <DetailHeader label="03 / PWA" />

        <section style={{ paddingTop: 120 }}>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(46px,11vw,164px)",
              lineHeight: 0.88,
              letterSpacing: "-.05em",
              margin: "0 0 40px",
            }}
          >
            감사담
          </h1>
          <p
            style={{
              fontWeight: 400,
              fontSize: "clamp(19px,2.2vw,26px)",
              lineHeight: 1.6,
              letterSpacing: "-.015em",
              color: "#1A1A1A",
              margin: "0 0 64px",
              maxWidth: 720,
            }}
          >
            실명 없이 나만의 이름으로 감사를 기록하고, 그날의 마음에 답하는
            편지를 받는 AI 감사일기 PWA.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              alignItems: "flex-start",
              marginBottom: 96,
            }}
          >
            {PHONE_SHOTS.map((shot) => (
              <ImageBox
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                fit="cover"
                containerStyle={{
                  flex: "1 1 150px",
                  minWidth: 130,
                  aspectRatio: "9/19.5",
                  marginTop: shot.marginTop,
                }}
              />
            ))}
          </div>

          <CaseSection
            rows={[
              {
                label: "문제",
                text: "감사 기록은 혼자 쓰면 금방 끊기고, 실명 공간에서는 솔직해지기 어렵다.",
              },
              {
                label: "해결",
                text: "비폭력대화(NVC) 톤의 AI 마음 코치 편지 생성, 익명 닉네임 시스템, 감사 나눔터 커뮤니티를 함께 설계.",
              },
              {
                label: "결과",
                text: "소셜 로그인과 결제까지 연동한 PWA를 기획·개발·운영까지 단독 수행.",
              },
            ]}
          />

          <div
            style={{
              paddingTop: 20,
              borderTop: "1px solid #0A0A0A",
              marginBottom: 56,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".42em",
                textTransform: "uppercase",
                color: "#8A8A8A",
                marginBottom: 28,
              }}
            >
              Premium Feedback
            </div>
            <p
              style={{
                margin: 0,
                fontWeight: 400,
                fontSize: "clamp(17px,2vw,22px)",
                lineHeight: 1.65,
                letterSpacing: "-.015em",
                color: "#1A1A1A",
                maxWidth: 660,
              }}
            >
              짧은 감사 세 줄을 AI 마음 코치가 읽고, 그날의 마음과 강점을
              짚어주는 편지로 답합니다.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              alignItems: "flex-start",
              marginBottom: 40,
            }}
          >
            {FEEDBACK_SHOTS.map((shot) => (
              <ImageBox
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                fit="cover"
                containerStyle={{
                  flex: "1 1 150px",
                  minWidth: 130,
                  aspectRatio: "1080/2340",
                  border: "1px solid #E3E0DA",
                  borderRadius: 6,
                }}
              />
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 40,
              marginBottom: 96,
            }}
          >
            {FEEDBACK_POINTS.map((point) => (
              <div key={point.label} style={{ minWidth: 0 }}>
                <div
                  style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}
                >
                  {point.label}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "#57544F",
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          <TechLinkRow
            tech={["NEXT.JS", "SUPABASE", "CLAUDE API", "PWA"]}
            href="https://www.gamsadam.com/"
            label="gamsadam.com"
          />
        </section>

        <DetailNav
          prev={{ href: "/work/modelcut", label: "← 이전 · 착용컷 생성기" }}
          next={{ href: "/work/websites", label: "다음 · 웹사이트 제작 →" }}
        />

        <Footer marginTop={140} />
      </div>
    </div>
  );
}
