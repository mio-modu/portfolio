import type { ReactNode } from "react";
import Link from "next/link";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

const TECH_STACK = [
  "NEXT.JS",
  "TYPESCRIPT",
  "FASTAPI",
  "SUPABASE",
  "GEMINI API",
  "CLAUDE API",
  "PWA",
  "VERCEL",
];

const ALSO_ITEMS = [
  ["교육기관 모집요강 페이지 배열·표 처리 규칙·목차 구조 설계 (리뷰 평점 5.0/5.0)"],
  ["ERP·전표 시스템 API 연동,", "Python 스케줄러 기반 업무 자동화 설계"],
  ["스마트공장 IoT 콜드체인 관제 시스템", "웹·서버 파트 구축 제안"],
  ["Airtable·구글시트 연동 재고·발주 자동화,", "바코드 라벨 파이프라인 설계"],
  ["위시켓·원티드긱스에 포트폴리오 등록해 프로젝트 진행 중", "숨고·크몽 등록"],
];

function ScreenSection({
  children,
  gap,
}: {
  children: ReactNode;
  gap?: number;
}) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap,
      }}
    >
      {children}
    </div>
  );
}

function WorkItem({
  href,
  label,
  title,
  desc,
  image,
}: {
  href: string;
  label: string;
  title: string;
  desc: string;
  image: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="stack-mobile"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,2.1fr)",
        gap: "32px 48px",
        alignItems: "center",
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
          {label}
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
          {title}
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
          {desc}
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
      {image}
    </Link>
  );
}

export default function Home() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#0A0A0A",
        fontFamily:
          "Inter,Pretendard,'Helvetica Neue',Helvetica,Arial,sans-serif",
        height: "100dvh",
        overflowY: "auto",
        overflowX: "hidden",
        scrollSnapType: "y mandatory",
        padding: "0 28px",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Screen 1 — Hero */}
        <ScreenSection>
          <section
            style={{
              position: "relative",
              left: "50%",
              width: "100vw",
              transform: "translateX(-50%)",
              minHeight: "100dvh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "120px 28px 40px",
              overflow: "hidden",
              background: "#08080A",
              color: "#F5F5F7",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                padding: "22px 28px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 24,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".34em",
                  textTransform: "uppercase",
                  color: "#F5F5F7",
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
                  color: "#8A8A92",
                }}
              >
                Portfolio — 2026
              </div>
            </div>

            <div style={{ position: "absolute", inset: "-12% 0", zIndex: 0 }}>
              <img
                src="/img/hero-slab.jpg"
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "grayscale(1) brightness(.3) blur(7px)",
                  transform: "scale(1.08)",
                }}
              />
              <div
                className="home-hero-reveal"
                style={{ position: "absolute", inset: 0, overflow: "hidden" }}
              >
                <img
                  src="/img/hero-slab.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "grayscale(1) contrast(1.08) brightness(.56)",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg,rgba(8,8,10,.82) 0%,rgba(8,8,10,.34) 42%,rgba(8,8,10,.94) 100%)",
                }}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: 1320,
                margin: "0 auto",
                width: "100%",
              }}
            >
              <div style={{ overflow: "hidden", marginBottom: 10 }}>
                <div
                  className="home-hero-eyebrow"
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: ".42em",
                    textTransform: "uppercase",
                    color: "#9A9AA2",
                  }}
                >
                  Planning · Development · Deployment
                </div>
              </div>
              <h1
                style={{
                  margin: "0 0 40px",
                  fontWeight: 800,
                  fontSize: "clamp(42px,8.6vw,124px)",
                  lineHeight: 0.96,
                  letterSpacing: "-.05em",
                }}
              >
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span
                    className="home-hero-line home-hero-line-1"
                    style={{ display: "block" }}
                  >
                    AI 서비스를
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span
                    className="home-hero-line home-hero-line-2"
                    style={{ display: "block" }}
                  >
                    혼자 끝까지
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span
                    className="home-hero-line home-hero-line-3"
                    style={{ display: "block" }}
                  >
                    만듭니다
                  </span>
                </span>
              </h1>
              <div
                className="stack-mobile"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                  gap: "24px 64px",
                  alignItems: "end",
                  paddingTop: 24,
                  borderTop: "1px solid rgba(245,245,247,.18)",
                }}
              >
                <p
                  className="home-hero-lede"
                  style={{
                    margin: 0,
                    fontWeight: 400,
                    fontSize: 17,
                    lineHeight: 1.8,
                    color: "#C9C9D0",
                    maxWidth: 460,
                  }}
                >
                  AI 서비스 기획부터 개발, 배포까지 원스톱으로 해내는 1인
                  스타트업 대표 겸 웹 개발자입니다.
                </p>
                <div
                  className="home-hero-contact"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px 28px",
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: ".02em",
                    color: "#C9C9D0",
                  }}
                >
                  <span style={{ whiteSpace: "nowrap" }}>050-007-3713</span>
                  <a
                    href="mailto:lumain747@gmail.com"
                    style={{ color: "#C9C9D0", whiteSpace: "nowrap" }}
                  >
                    lumain747@gmail.com
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: ".28em",
                    color: "#8A8A92",
                  }}
                >
                  <span style={{ whiteSpace: "nowrap" }}>SCROLL</span>
                  <span
                    className="home-hero-cue-bar"
                    style={{
                      display: "block",
                      width: 1,
                      height: 34,
                      background: "linear-gradient(180deg,#8A8A92,transparent)",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <div
            style={{
              position: "relative",
              left: "50%",
              width: "100vw",
              transform: "translateX(-50%)",
              borderBottom: "1px solid #DEDEDE",
              padding: "16px 0",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <div
              className="home-ticker-track"
              style={{
                display: "inline-flex",
                gap: 56,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: ".24em",
                color: "#555555",
              }}
            >
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <span key={i} style={{ whiteSpace: "nowrap" }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScreenSection>

        {/* Screen 2 — Work 01 */}
        <ScreenSection gap={40}>
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
          <WorkItem
            href="/work/lumain-hair"
            label="01 / SAAS"
            title="루메인 헤어"
            desc="미용실 대상 AI 헤어스타일 미리보기 SaaS"
            image={
              <ImageBox
                src="/img/hair-app.png"
                alt="대표 화면"
                fit="cover"
                containerStyle={{ width: "100%", aspectRatio: "16/7" }}
              />
            }
          />
        </ScreenSection>

        {/* Screen 3 — Work 02 */}
        <ScreenSection>
          <WorkItem
            href="/work/modelcut"
            label="02 / COMMERCE"
            title="착용컷 생성기"
            desc="이커머스 셀러용 AI 모델 착용컷 생성기"
            image={
              <ImageBox
                src="/img/modelcut-landing.png"
                alt="대표 화면"
                fit="cover"
                containerStyle={{ width: "100%", aspectRatio: "16/7" }}
              />
            }
          />
        </ScreenSection>

        {/* Screen 4 — Work 03 */}
        <ScreenSection>
          <WorkItem
            href="/work/gamsadam"
            label="03 / PWA"
            title="감사담"
            desc="AI 감사일기 PWA"
            image={
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
            }
          />
        </ScreenSection>

        {/* Screen 5 — Work 04 */}
        <ScreenSection>
          <WorkItem
            href="/work/websites"
            label="04 / WEB"
            title="웹사이트 제작"
            desc="실제 운영 3종 · 비영리·공공기관 시안 4종"
            image={
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
                  src="/img/site-qsarang.png"
                  alt="큐사랑"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
                <img
                  src="/img/site-hanbok.png"
                  alt="우아한한복대여점"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
                <img
                  src="/img/site-brownie.png"
                  alt="그린브라우니"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
            }
          />
        </ScreenSection>

        {/* Screen 6 — Work 05 */}
        <ScreenSection>
          <WorkItem
            href="/work/member-auth"
            label="05 / AUTH"
            title="자격 인증형 회원제 시스템"
            desc="면허·자격 보유자 회원제의 자격 검증을 두 갈래 인증 경로로 구현한 데모"
            image={
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
                {[
                  ["/img/auth-main-hero.jpg", "메인 화면"],
                  ["/img/auth-signup.jpg", "회원가입 — 두 인증 경로"],
                  ["/img/auth-main-tracks.jpg", "인증 경로 안내"],
                  ["/img/auth-member.jpg", "회원 전용 화면"],
                ].map(([src, alt]) => (
                  <img
                    key={src}
                    src={src}
                    alt={alt}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                ))}
              </div>
            }
          />
        </ScreenSection>

        {/* Screen 7 — Also + Footer */}
        <ScreenSection gap={64}>
          <section>
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
                margin: "28px 0 24px",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.7,
                letterSpacing: "-.01em",
                color: "#555555",
                maxWidth: 800,
              }}
            >
              수학교육을 전공하고,
              <br />
              AI 서비스 기획·개발자로 방향을 잡았습니다.
              <br />
              포트폴리오에 프로젝트로 담지 않은 영역도
              <br />
              함께 진행하고 있습니다.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {ALSO_ITEMS.map((lines) => (
                <p
                  key={lines[0]}
                  style={{
                    margin: 0,
                    fontWeight: 400,
                    fontSize: "clamp(16px,1.6vw,20px)",
                    lineHeight: 1.7,
                    letterSpacing: "-.01em",
                    color: "#1A1A1A",
                    maxWidth: 800,
                  }}
                >
                  {lines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </section>

          <Footer marginTop={0} showName />
        </ScreenSection>
      </div>
    </div>
  );
}
