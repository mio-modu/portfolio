import type { CSSProperties, ReactNode } from "react";
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

const APPROACH_STATS = [
  { value: "3", label: "직접 만들어 운영 중인 서비스" },
  { value: "13K+", label: "단독 개발 코드베이스 규모 (행)" },
  { value: "2", label: "프로그램 저작권 등록" },
  { value: "5.0", label: "외주 프로젝트 리뷰 평점 (만점)" },
];

const REVEAL_STYLE: CSSProperties = {
  animation: "om-fade-up .9s cubic-bezier(.16,1,.3,1) both",
  animationTimeline: "view()",
  animationRange: "entry 0% cover 26%",
} as CSSProperties;

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

        {/* Screen 1.5 — Approach */}
        <ScreenSection>
          <section style={{ padding: "180px 28px", maxWidth: 1320, margin: "0 auto" }}>
            <div data-reveal style={REVEAL_STYLE}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: ".42em",
                  textTransform: "uppercase",
                  color: "#8A8A92",
                  paddingBottom: 18,
                  borderBottom: "1px solid #0A0A0A",
                  marginBottom: 56,
                }}
              >
                Approach
              </div>
              <p
                style={
                  {
                    margin: 0,
                    fontWeight: 500,
                    fontSize: "clamp(24px,4.2vw,58px)",
                    lineHeight: 1.28,
                    letterSpacing: "-.035em",
                    maxWidth: 1000,
                    textWrap: "pretty",
                  } as CSSProperties
                }
              >
                기획서에서 멈추지 않습니다. 화면을 그리고, 코드를 쓰고,
                배포해서{" "}
                <span style={{ color: "#9A9AA2" }}>
                  실제로 돌아가는 서비스
                </span>
                까지 혼자 만듭니다.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: "40px 24px",
                marginTop: 96,
              }}
            >
              {APPROACH_STATS.map((stat) => (
                <div
                  key={stat.label}
                  data-reveal
                  style={{
                    ...REVEAL_STYLE,
                    paddingTop: 20,
                    borderTop: "1px solid #DEDEDE",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(34px,4vw,52px)",
                      lineHeight: 1,
                      letterSpacing: "-.04em",
                      marginBottom: 14,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "#555555",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
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

        {/* Screen 7 — Work 06 */}
        <ScreenSection>
          <WorkItem
            href="/work/mungspot"
            label="06 / PETCARE"
            title="멍스팟"
            desc="사진으로 견종을 알아보고 필요한 병원·미용샵으로 잇는 반려견 케어 플랫폼"
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
                  ["/img/mungspot-home.jpg", "홈 — 견종 찾기"],
                  ["/img/mungspot-breed.jpg", "견종 카드"],
                  ["/img/mungspot-shoplist.jpg", "근처 샵 목록"],
                  ["/img/mungspot-shop.jpg", "업체 상세 — 예약 요청"],
                  ["/img/mungspot-dressup.jpg", "AI 착용기"],
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

        <ScreenSection>
          <WorkItem
            href="/work/design-system"
            label="07 / SYSTEM"
            title="웹디자인 스타일 시스템"
            desc="실제 사이트 1,538곳의 화면을 보고 25가지 스타일로 나눈 뒤, 스타일마다 색·배치·그림자를 숫자로 정해 둔 자체 도구. 아래는 같은 시스템에서 스타일만 바꿔 만든 19벌"
            image={
              <img
                src="/img/ds-strip.jpg"
                alt="16개 유형을 각각 다른 서비스에 적용한 결과 — 시네마틱 씬, 판타지 일러스트, 하이프 배너, 무광 3D 정물, 클레이 마스코트, 아날로그 접사, 데이터 지도, 게임 배지, 커머스 상세, 캐릭터 안내, UI 패널 캡처, 문서 캡처, 형광 타이포, 프로세스 다이어그램, 스탯, 모노 심볼"
                style={{
                  width: "100%",
                  aspectRatio: "16/7",
                  objectFit: "cover",
                  display: "block",
                  background: "#F0F0F0",
                }}
              />
            }
          />
        </ScreenSection>

        {/* Screen 9 — Also + Footer */}
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
