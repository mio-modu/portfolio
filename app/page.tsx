import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const PROJECTS = [
  {
    href: "/work/lumain-hair",
    label: "01 / SAAS",
    title: "루메인 헤어",
    desc: "미용실 대상 AI 헤어스타일 미리보기 SaaS",
    imgSrc: "/img/hair-app.png",
    imgAlt: "루메인 헤어 대표 화면",
  },
  {
    href: "/work/modelcut",
    label: "02 / COMMERCE",
    title: "착용컷 생성기",
    desc: "이커머스 셀러용 AI 모델 착용컷 생성기",
    imgSrc: "/img/modelcut-landing.png",
    imgAlt: "착용컷 생성기 대표 화면",
  },
  {
    href: "/work/gamsadam",
    label: "03 / PWA",
    title: "감사담",
    desc: "AI 감사일기 PWA",
    imgSrc: "/img/gamsadam-today.jpg",
    imgAlt: "감사담 대표 화면",
  },
  {
    href: "/work/websites",
    label: "04 / WEB",
    title: "웹사이트 제작",
    desc: "실제 운영 3종 · 비영리·공공기관 시안 4종",
    imgSrc: "/img/site-qsarang.png",
    imgAlt: "웹사이트 제작 대표 화면",
  },
];

export default function Home() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#0A0A0A",
        fontFamily:
          "Inter,Pretendard,'Helvetica Neue',Helvetica,Arial,sans-serif",
        padding: "0 28px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            paddingBottom: 24,
          }}
        >
          <header style={{ paddingTop: 28 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: 24,
                paddingBottom: 22,
                borderBottom: "1px solid #0A0A0A",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: ".34em",
                  textTransform: "uppercase",
                }}
              >
                Lumain
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: ".34em",
                  textTransform: "uppercase",
                  color: "#8A8A8A",
                }}
              >
                Portfolio — 2026
              </div>
            </div>
          </header>

          <div
            style={{
              flex: "1 1 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 32,
              paddingTop: 16,
            }}
          >
            <div
              className="stack-mobile"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,7fr) minmax(0,5fr)",
                gap: "24px 64px",
                alignItems: "end",
              }}
            >
              <h1
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(32px,5.2vw,68px)",
                  lineHeight: 0.95,
                  letterSpacing: "-.045em",
                  margin: 0,
                }}
              >
                AI 서비스를 혼자 끝까지 만듭니다
              </h1>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.6,
                    margin: 0,
                    color: "#1F1F1F",
                  }}
                >
                  AI 서비스 기획부터 개발, 배포까지 원스톱으로 해내는 1인
                  스타트업 대표 겸 웹 개발자입니다.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px 24px",
                    fontSize: 13,
                    fontWeight: 400,
                    letterSpacing: ".02em",
                    color: "#333333",
                  }}
                >
                  <span style={{ whiteSpace: "nowrap" }}>010-3943-9929</span>
                  <a
                    href="mailto:lumain747@gmail.com"
                    style={{ color: "#333333", whiteSpace: "nowrap" }}
                  >
                    lumain747@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div
              className="stack-mobile"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "24px 24px",
              }}
            >
              {PROJECTS.map((p) => (
                <ProjectCard key={p.href} {...p} />
              ))}
            </div>
          </div>
        </div>

        <section style={{ paddingTop: 160 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".42em",
              textTransform: "uppercase",
              color: "#8A8A8A",
              paddingBottom: 18,
              borderBottom: "1px solid #0A0A0A",
            }}
          >
            Also
          </div>
          <p
            style={{
              margin: "34px 0 0",
              fontWeight: 400,
              fontSize: "clamp(18px,2vw,24px)",
              lineHeight: 1.7,
              letterSpacing: "-.01em",
              color: "#1A1A1A",
              maxWidth: 800,
            }}
          >
            교육기관 모집요강 페이지 배열·표 처리 규칙·목차 구조 설계 (리뷰
            평점 5.0/5.0)
          </p>
        </section>

        <Footer marginTop={220} showName />
      </div>
    </div>
  );
}
