import Link from "next/link";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export default function Home() {
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
        <header style={{ paddingTop: 120 }}>
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

          <div
            className="stack-mobile"
            style={{
              paddingTop: 120,
              display: "grid",
              gridTemplateColumns: "minmax(0,7fr) minmax(0,4fr)",
              gap: "56px 64px",
              alignItems: "end",
            }}
          >
            <h1
              style={{
                fontWeight: 800,
                fontSize: "clamp(44px,9.4vw,132px)",
                lineHeight: 0.92,
                letterSpacing: "-.045em",
                margin: 0,
              }}
            >
              AI 서비스를
              <br />
              혼자 끝까지
              <br />
              만듭니다
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <ImageBox
                src="/img/hero-slab.jpg"
                alt="히어로 이미지"
                fit="cover"
                containerStyle={{ width: "100%", aspectRatio: "3/4" }}
              />
              <p
                style={{
                  fontWeight: 400,
                  fontSize: 19,
                  lineHeight: 1.75,
                  margin: 0,
                  color: "#1F1F1F",
                }}
              >
                AI 서비스 기획부터 개발, 배포까지 원스톱으로 해내는 1인
                스타트업 대표 겸 웹 개발자입니다.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: 96,
              paddingTop: 20,
              borderTop: "1px solid #DEDEDE",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 48px",
              fontSize: 15,
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
            <span style={{ whiteSpace: "nowrap" }}>루메인 (Lumain)</span>
          </div>
        </header>

        <section style={{ paddingTop: 180 }}>
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
            Selected Work
          </div>

          <Link
            href="/work/lumain-hair"
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,2.1fr)",
              gap: "32px 48px",
              alignItems: "center",
              padding: "44px 0",
              borderBottom: "1px solid #DEDEDE",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: ".24em",
                  color: "#666666",
                  marginBottom: 18,
                }}
              >
                01 / SAAS
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(28px,4.2vw,54px)",
                  lineHeight: 1,
                  letterSpacing: "-.04em",
                  marginBottom: 16,
                }}
              >
                루메인 헤어
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#333333",
                  marginBottom: 20,
                }}
              >
                미용실 대상 AI 헤어스타일 미리보기 SaaS
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".18em",
                  color: "#0A0A0A",
                }}
              >
                자세히 보기 →
              </div>
            </div>
            <ImageBox
              src="/img/hair-app.png"
              alt="대표 화면"
              fit="cover"
              containerStyle={{ width: "100%", aspectRatio: "16/7" }}
            />
          </Link>

          <Link
            href="/work/modelcut"
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,2.1fr)",
              gap: "32px 48px",
              alignItems: "center",
              padding: "44px 0",
              borderBottom: "1px solid #DEDEDE",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: ".24em",
                  color: "#666666",
                  marginBottom: 18,
                }}
              >
                02 / COMMERCE
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(28px,4.2vw,54px)",
                  lineHeight: 1,
                  letterSpacing: "-.04em",
                  marginBottom: 16,
                }}
              >
                착용컷 생성기
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#333333",
                  marginBottom: 20,
                }}
              >
                이커머스 셀러용 AI 모델 착용컷 생성기
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".18em",
                  color: "#0A0A0A",
                }}
              >
                자세히 보기 →
              </div>
            </div>
            <ImageBox
              src="/img/modelcut-landing.png"
              alt="대표 화면"
              fit="cover"
              containerStyle={{ width: "100%", aspectRatio: "16/7" }}
            />
          </Link>

          <Link
            href="/work/gamsadam"
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,2.1fr)",
              gap: "32px 48px",
              alignItems: "center",
              padding: "44px 0",
              borderBottom: "1px solid #DEDEDE",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: ".24em",
                  color: "#666666",
                  marginBottom: 18,
                }}
              >
                03 / PWA
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(28px,4.2vw,54px)",
                  lineHeight: 1,
                  letterSpacing: "-.04em",
                  marginBottom: 16,
                }}
              >
                감사담
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#333333",
                  marginBottom: 20,
                }}
              >
                AI 감사일기 PWA
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".18em",
                  color: "#0A0A0A",
                }}
              >
                자세히 보기 →
              </div>
            </div>
            <div
              style={{
                width: "100%",
                aspectRatio: "16/7",
                background: "#F0F0F0",
                display: "flex",
                gap: 2,
                overflow: "hidden",
              }}
            >
              <img
                src="/img/gamsadam-splash.jpg"
                alt="감사담 스플래시"
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              <img
                src="/img/gamsadam-today.jpg"
                alt="감사담 오늘 기록"
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              <img
                src="/img/gamsadam-calendar.jpg"
                alt="감사담 마음 캘린더"
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              <img
                src="/img/gamsadam-community.jpg"
                alt="감사담 감사 나눔터"
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </Link>

          <Link
            href="/work/websites"
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,2.1fr)",
              gap: "32px 48px",
              alignItems: "center",
              padding: "44px 0",
              borderBottom: "1px solid #DEDEDE",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: ".24em",
                  color: "#666666",
                  marginBottom: 18,
                }}
              >
                04 / CLIENT WORK
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(28px,4.2vw,54px)",
                  lineHeight: 1,
                  letterSpacing: "-.04em",
                  marginBottom: 16,
                }}
              >
                홈페이지 제작
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#333333",
                  marginBottom: 20,
                }}
              >
                소규모 사업장 홈페이지 3종 · 운영 중
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".18em",
                  color: "#0A0A0A",
                }}
              >
                자세히 보기 →
              </div>
            </div>
            <ImageBox
              src="/img/site-qsarang.png"
              alt="큐사랑 · 우아한한복 · 그린브라우니"
              fit="cover"
              containerStyle={{ width: "100%", aspectRatio: "16/7" }}
            />
          </Link>

          <Link
            href="/work/foundation"
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,2.1fr)",
              gap: "32px 48px",
              alignItems: "center",
              padding: "44px 0",
              borderBottom: "1px solid #DEDEDE",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: ".24em",
                  color: "#666666",
                  marginBottom: 18,
                }}
              >
                05 / WEB
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(28px,4.2vw,54px)",
                  lineHeight: 1,
                  letterSpacing: "-.04em",
                  marginBottom: 16,
                }}
              >
                시안 4종
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#333333",
                  marginBottom: 20,
                }}
              >
                비영리·공공기관 웹사이트 시안
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".18em",
                  color: "#0A0A0A",
                }}
              >
                자세히 보기 →
              </div>
            </div>
            <div
              style={{
                width: "100%",
                aspectRatio: "16/7",
                background: "#F0F0F0",
                overflow: "hidden",
              }}
            >
              <img
                src="/img/found-c-nonprofit.png"
                alt="비영리단체 웹사이트 시안"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </Link>
        </section>

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
