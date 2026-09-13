import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import CaseSection from "@/components/CaseSection";
import TechLinkRow from "@/components/TechLinkRow";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "루메인 헤어",
  openGraph: {
    title: "루메인 헤어",
    images: ["/img/hair-app.png"],
  },
};

export default function LumainHairPage() {
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
        <DetailHeader label="01 / SAAS" />

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
            루메인 헤어
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
            얼굴은 그대로 두고 스타일만 바꿔 보여주는 미용실 대상 AI
            헤어스타일 미리보기 SaaS.
          </p>

          <ImageBox
            src="/img/hair-app.png"
            alt="히어로 이미지"
            fit="cover"
            containerStyle={{
              width: "100%",
              aspectRatio: "16/9",
              marginBottom: 96,
            }}
          />

          <CaseSection
            rows={[
              {
                label: "문제",
                text: "시술 전 결과를 미리 확인할 방법이 없어, 상담이 말과 참고 사진에 의존한다.",
              },
              {
                label: "해결",
                text: "Gemini API 기반 얼굴 보존형 스타일 합성 엔진을 직접 설계·개발. 매장별 커스텀 스타일 자산 등록 기능이 핵심 차별점.",
              },
              {
                label: "결과",
                text: "약 1만 3천 행 규모 코드베이스 단독 개발. 프로그램 저작권 등록 완료 (C-2026-040756). 파일럿 매장 1곳 확보·운영 중.",
              },
            ]}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 12,
              marginBottom: 96,
            }}
          >
            <ImageBox
              alt="스타일 선택 화면"
              fit="cover"
              containerStyle={{ aspectRatio: "4/3" }}
            />
            <ImageBox
              alt="합성 결과 화면"
              fit="cover"
              containerStyle={{ aspectRatio: "4/3" }}
            />
            <ImageBox
              alt="매장 관리 화면"
              fit="cover"
              containerStyle={{ aspectRatio: "4/3" }}
            />
          </div>

          <TechLinkRow
            tech={["NEXT.JS", "FASTAPI", "SUPABASE", "GEMINI API", "VERCEL"]}
            href="https://aihaircut-lake.vercel.app/"
            label="aihaircut-lake.vercel.app"
          />
        </section>

        <DetailNav
          prev={{ href: "/", label: "← 전체 목록" }}
          next={{ href: "/work/modelcut", label: "다음 · 착용컷 생성기 →" }}
        />

        <Footer marginTop={140} />
      </div>
    </div>
  );
}
