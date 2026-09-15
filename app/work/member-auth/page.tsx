import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import CaseSection from "@/components/CaseSection";
import TechLinkRow from "@/components/TechLinkRow";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "자격 인증형 회원제 시스템",
  openGraph: {
    title: "자격 인증형 회원제 시스템",
  },
};

const STEPS = [
  {
    no: "01",
    file: "signup.html",
    title: "회원가입 — 인증 경로를 둘로 나눈 화면",
    desc: "사업자등록 보유 여부를 토글로 전환하는 UI부터 설계했습니다. 두 트랙이 서로 다른 값을 받고 서로 다른 처리 로직으로 이어지도록, 화면 단계에서부터 분기 구조를 만들었습니다.",
    points: [
      "보유 — 대표자 성명 · 사업자등록번호 · 개업일자",
      "미보유 — 이름 · 이메일 · 증빙 서류 이미지 업로드",
    ],
  },
  {
    no: "02",
    file: "국세청 API",
    title: "사업자등록 자동 인증",
    desc: "공공데이터포털에서 국세청 「사업자등록정보 진위확인 및 상태조회 서비스」를 직접 신청해 인증키를 발급받았습니다. 입력값을 국세청 서버로 실시간 조회해 실제 등록 정보와 일치하는지 즉시 확인하고, 일치하면 별도 승인 절차 없이 바로 승인 상태로 전환합니다.",
    points: [],
  },
  {
    no: "03",
    file: "Supabase",
    title: "면허증 수동 인증",
    desc: "의사 면허번호를 자동으로 검증하는 공개 정부 API는 존재하지 않는다는 것을 확인했습니다. 그래서 이 경로는 서류 업로드와 사람의 확인으로 설계했습니다.",
    points: [
      "서류 이미지를 Supabase Storage에 업로드",
      "누가 파일을 올릴 수 있는지 제어하는 접근 정책 직접 설계",
      "신청 정보를 데이터베이스에 승인 대기 상태로 저장",
    ],
  },
  {
    no: "04",
    file: "admin.html",
    title: "관리자 승인 화면",
    desc: "승인 대기 중인 신청자 목록을 조회하고, 업로드된 서류 이미지를 확인한 뒤 승인·거절로 처리하는 관리자 전용 화면. 승인을 누르면 해당 회원의 상태가 즉시 이용 가능으로 바뀝니다.",
    points: [],
  },
  {
    no: "05",
    file: "member.html",
    title: "회원 전용 화면",
    desc: "승인된 회원만 이메일로 접근할 수 있는 콘텐츠 화면을 만들어, 가입 → 인증 → 승인 → 열람의 전체 흐름이 실제로 끝까지 이어지는 것을 확인했습니다.",
    points: [],
  },
  {
    no: "06",
    file: "main.html",
    title: "메인 랜딩",
    desc: "「회원 인증은 이렇게 진행됩니다」 섹션에 두 인증 경로를 카드로 나란히 놓아, 방문자가 화면만 보고도 인증 구조를 바로 이해할 수 있게 했습니다.",
    points: [],
  },
  {
    no: "07",
    file: "index.html",
    title: "쇼케이스",
    desc: "만든 화면들을 순서대로 넘겨보며 전체 흐름을 한눈에 확인할 수 있는 요약 페이지.",
    points: [],
  },
];

const STATUS_NOTES = [
  "면허번호 자동 검증 — 현재 공개 API 부재",
  "로그인 보안 강화 — 비밀번호 · 2단계 인증",
  "Storage 접근 정책 고도화",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: ".42em",
        textTransform: "uppercase",
        color: "#8A8A8A",
        paddingBottom: 18,
        borderBottom: "1px solid #0A0A0A",
        marginBottom: 40,
      }}
    >
      {children}
    </div>
  );
}

export default function MemberAuthPage() {
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
        <DetailHeader label="05 / AUTH" />

        <section style={{ paddingTop: 120 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".34em",
              textTransform: "uppercase",
              color: "#8A8A8A",
              marginBottom: 24,
            }}
          >
            Demo Project
          </div>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(40px,8vw,116px)",
              lineHeight: 0.95,
              letterSpacing: "-.05em",
              margin: "0 0 40px",
            }}
          >
            자격 인증형
            <br />
            회원제 시스템
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
            회원 자격을 어떻게 검증할 것인가. 사업자등록이 있는 사람과 없는
            사람이 함께 있는 집단을 대상으로, 인증 경로를 둘로 나눠 직접
            구현한 연습 프로젝트입니다.
          </p>

          <ImageBox
            alt="회원가입 화면 — 인증 경로 선택"
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
                text: "전문직 대상 회원제 서비스를 제안받고 조사해보니, 자격 검증은 한 가지 방법으로 풀리지 않았습니다. 사업자등록이 있는 사람(개원의)과 없는 사람(봉직의)이 함께 존재하기 때문입니다. 인증 방식을 하나만 두면 절반은 가입 자체가 막힙니다.",
              },
              {
                label: "해결",
                text: "인증 경로를 두 갈래로 나눴습니다. 사업자등록이 있으면 국세청 공공데이터 API로 실시간 조회해 즉시 자동 승인하고, 없으면 증빙 서류를 올려 관리자가 확인하는 수동 경로로 보냅니다.",
              },
              {
                label: "결과",
                text: "가입 → 인증 → 승인 → 열람까지 전체 흐름이 끊기지 않고 이어지는 것을 화면으로 확인했습니다.",
              },
            ]}
          />

          <SectionLabel>01 — 구현 과정</SectionLabel>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              marginBottom: 96,
            }}
          >
            {STEPS.map((step) => (
              <div
                key={step.no}
                className="stack-mobile"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)",
                  gap: "12px 48px",
                  paddingTop: 16,
                  borderTop: "1px solid #DEDEDE",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: ".2em",
                      color: "#666666",
                      marginBottom: 8,
                    }}
                  >
                    {step.no}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: ".1em",
                      color: "#8A8A8A",
                    }}
                  >
                    {step.file}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(20px,2.2vw,26px)",
                      lineHeight: 1.3,
                      letterSpacing: "-.03em",
                      marginBottom: 14,
                    }}
                  >
                    {step.title}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 400,
                      fontSize: 16.5,
                      lineHeight: 1.8,
                      color: "#222222",
                      maxWidth: 720,
                    }}
                  >
                    {step.desc}
                  </p>
                  {step.points.length > 0 ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        marginTop: 18,
                      }}
                    >
                      {step.points.map((point) => (
                        <div
                          key={point}
                          style={{
                            fontWeight: 400,
                            fontSize: 15,
                            lineHeight: 1.7,
                            color: "#555555",
                          }}
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <ImageBox
            alt="관리자 승인 화면"
            fit="cover"
            containerStyle={{
              width: "100%",
              aspectRatio: "16/9",
              marginBottom: 96,
            }}
          />

          <SectionLabel>02 — 설계에서 다시 짚은 것</SectionLabel>
          <p
            style={{
              margin: "0 0 96px",
              fontWeight: 400,
              fontSize: 16.5,
              lineHeight: 1.8,
              color: "#222222",
              maxWidth: 720,
            }}
          >
            서류 업로드를 요구하는 인증은 기술적으로 어렵지 않지만, 실제로
            사람들이 자기 면허증 사진을 순순히 올릴지는 다른 문제였습니다.
            그래서 처음부터 서류를 요구하는 대신, 인증이 왜 필요한지 화면에서
            명확히 안내하고 자동화가 가능한 경로(사업자등록)는 자동으로
            처리해 진입 장벽을 낮추는 방향으로 설계를 조정했습니다.
          </p>

          <SectionLabel>03 — 현재 상태</SectionLabel>
          <p
            style={{
              margin: "0 0 28px",
              fontWeight: 400,
              fontSize: 16.5,
              lineHeight: 1.8,
              color: "#222222",
              maxWidth: 720,
            }}
          >
            연습·학습 목적의 데모입니다. 실제 서비스에 적용하려면 다음이
            추가로 필요합니다.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 96,
            }}
          >
            {STATUS_NOTES.map((note) => (
              <div
                key={note}
                style={{
                  paddingTop: 12,
                  borderTop: "1px solid #DEDEDE",
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#555555",
                  maxWidth: 720,
                }}
              >
                {note}
              </div>
            ))}
          </div>

          <TechLinkRow
            tech={[
              "HTML · CSS · JS",
              "SUPABASE",
              "공공데이터포털 국세청 API",
              "GITHUB",
              "VERCEL",
            ]}
            href="https://member-auth-demo.vercel.app/"
            label="member-auth-demo.vercel.app"
          />
        </section>

        <DetailNav
          prev={{ href: "/work/websites", label: "← 이전 · 웹사이트 제작" }}
          next={{ href: "/", label: "전체 목록 →" }}
        />

        <Footer marginTop={140} />
      </div>
    </div>
  );
}
