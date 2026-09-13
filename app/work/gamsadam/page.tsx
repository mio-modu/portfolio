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

          <TechLinkRow
            tech={["NEXT.JS", "SUPABASE", "CLAUDE API", "PWA"]}
            href="https://www.gamsadam.com/"
            label="gamsadam.com"
          />
        </section>

        <DetailNav
          prev={{ href: "/work/modelcut", label: "← 이전 · 착용컷 생성기" }}
          next={{ href: "/work/websites", label: "다음 · 홈페이지 제작 →" }}
        />

        <Footer marginTop={140} />
      </div>
    </div>
  );
}
