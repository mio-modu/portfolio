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
    images: ["/img/hair-workflow.png"],
  },
};

const PIPELINE_STEPS = [
  {
    num: "01",
    label: "등록",
    src: "/img/asset-register.png",
    alt: "스타일 등록",
    aspectRatio: "448/1063",
    marginTop: 0,
    desc: "시술 사진 한 장과 스타일명을 넣으면 AI가 머리 구조를 읽어 태그를 자동 생성합니다.",
  },
  {
    num: "02",
    label: "모델화",
    src: "/img/asset-modeling.png",
    alt: "모델화",
    aspectRatio: "480/678",
    marginTop: 34,
    desc: "얼굴만 대표 모델로 바꾸고 헤어스타일은 원본 그대로 유지합니다. 연령대도 골라 생성합니다.",
  },
  {
    num: "03",
    label: "카드 완성",
    src: "/img/asset-card.png",
    alt: "스타일 카드",
    aspectRatio: "319/754",
    marginTop: 68,
    desc: "길이·펌·난이도 태그가 붙은 카드로 저장됩니다. 전면 노출 여부는 매장이 직접 켭니다.",
  },
  {
    num: "04",
    label: "카드 관리",
    src: "/img/hair-style-cards.png",
    alt: "카드 관리",
    aspectRatio: "849/1215",
    marginTop: 102,
    desc: "성별·길이별로 정리하고 손님 화면에 몇 칸을 띄울지 배치까지 정합니다.",
  },
];

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
            src="/img/hair-workflow.png"
            alt="히어로 이미지"
            fit="cover"
            containerStyle={{
              width: "100%",
              aspectRatio: "2521/1351",
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
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 80,
            }}
          >
            <ImageBox
              src="/img/hair-before-after.png"
              alt="Before · After 비교"
              fit="contain"
              containerStyle={{ width: "100%", aspectRatio: "1386/1011" }}
            />
            <div
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: ".18em",
                color: "#555555",
              }}
            >
              Before · After — 얼굴은 유지, 스타일만 교체
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "24px 12px",
              marginBottom: 80,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <ImageBox
                src="/img/hair-color-light.jpg"
                alt="라이트"
                fit="cover"
                containerStyle={{ aspectRatio: "3/4" }}
              />
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".18em",
                  color: "#555555",
                }}
              >
                염색 · 라이트 브라운
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <ImageBox
                src="/img/hair-color-red.jpg"
                alt="레드"
                fit="cover"
                containerStyle={{ aspectRatio: "3/4" }}
              />
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".18em",
                  color: "#555555",
                }}
              >
                염색 · 레드 브라운
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <ImageBox
                src="/img/hair-style-picker.png"
                alt="스타일 선택"
                fit="contain"
                containerStyle={{ width: "100%", aspectRatio: "900/1336" }}
              />
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".18em",
                  color: "#555555",
                }}
              >
                스타일 고르기 — 얼굴형 기반 추천
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: 20,
              borderTop: "1px solid #0A0A0A",
              marginBottom: 56,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "16px 40px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: ".42em",
                  textTransform: "uppercase",
                  color: "#8A8A8A",
                }}
              >
                Style Asset Pipeline
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: ".18em",
                  color: "#555555",
                  whiteSpace: "nowrap",
                }}
              >
                핵심 차별점
              </div>
            </div>
            <p
              style={{
                margin: "28px 0 0",
                fontWeight: 400,
                fontSize: "clamp(17px,2vw,22px)",
                lineHeight: 1.65,
                letterSpacing: "-.015em",
                color: "#1A1A1A",
                maxWidth: 660,
              }}
            >
              매장이 자기 시술 사진을 올리면, 그게 그 매장만의 스타일
              카드가 됩니다. 등록에서 손님 화면 노출까지 네 단계.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "28px 20px",
              alignItems: "flex-start",
              marginBottom: 96,
            }}
          >
            {PIPELINE_STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  flex: "1 1 190px",
                  minWidth: 170,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  marginTop: step.marginTop,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: 34,
                      lineHeight: 1,
                      letterSpacing: "-.04em",
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: ".18em",
                      color: "#555555",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                <ImageBox
                  src={step.src}
                  alt={step.alt}
                  fit="cover"
                  containerStyle={{
                    width: "100%",
                    aspectRatio: step.aspectRatio,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontWeight: 400,
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    color: "#222222",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
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
