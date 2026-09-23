import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import CaseSection from "@/components/CaseSection";
import TechLinkRow from "@/components/TechLinkRow";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "멍스팟",
  openGraph: {
    title: "멍스팟",
    images: ["/img/mungspot-home.jpg"],
  },
};

const FLOW_SHOTS = [
  { src: "/img/mungspot-home.jpg", alt: "홈 — 사진 한 장으로 견종 찾기", marginTop: 0 },
  { src: "/img/mungspot-breed.jpg", alt: "견종 카드 — 성격·털·건강", marginTop: 44 },
  { src: "/img/mungspot-pet.jpg", alt: "우리 아이 — 미용·검진 D-day", marginTop: 88 },
];

const BIZ_SHOTS = [
  {
    src: "/img/mungspot-shoplist.jpg",
    alt: "지도 — 근처 샵 목록과 업종 필터",
    marginTop: 0,
  },
  {
    src: "/img/mungspot-shop.jpg",
    alt: "업체 상세 — 예약 요청 보내기",
    marginTop: 44,
  },
  { src: "/img/mungspot-dressup.jpg", alt: "AI 댕댕이 착용기", marginTop: 88 },
  {
    src: "/img/mungspot-pricing.jpg",
    alt: "요금제 — 견주·샵 구분",
    marginTop: 132,
  },
];

const PILLARS = [
  {
    no: "01",
    tag: "판별",
    title: "견종 판별을 브라우저 안에서",
    desc: "TensorFlow.js(MobileNet)로 사진을 브라우저에서 바로 추론해 상위 3개 품종을 냅니다. 사진이 서버로 올라가지 않아 개인정보 부담이 없고, 추론 서버 비용도 들지 않습니다.",
    points: [
      "국내 흔한 30종 + 견종 그룹 기본 문구로 정보 카드 5장 구성",
      "모델이 모르는 품종(진돗개·시바견·믹스 등)은 목록에 명시해 두고 오답을 만들지 않음",
    ],
  },
  {
    no: "02",
    tag: "연결",
    title: "견종을 알면 필요한 샵 순서가 바뀐다",
    desc: "판별 결과에 따라 지도 탭 순서를 다시 매기고 왜 그 순서인지 이유를 함께 보여줍니다. 샵이 등록한 강점 태그와 자동으로 이어 붙습니다.",
    points: [
      "이중모 견종이면 미용샵을, 노령견이면 동물병원을 먼저",
      "업종 필터(동물병원·미용샵·호텔·용품점)와 목록·지도 연동",
      "지도·검색·업체 상세는 로그인 없이 공개",
    ],
  },
  {
    no: "03",
    tag: "수익",
    title: "샵에 필요한 건 통계가 아니라 손님",
    desc: "조회수·전화 통계는 네이버도 무료로 줍니다. 멍스팟만 줄 수 있는 것은 지금 예약을 원하는 손님이라고 보고, 예약 요청 기능을 수익 구조의 중심에 뒀습니다.",
    points: [
      "견주 — 서비스·희망 일시·견종·몸무게·털 상태·입질 여부를 담아 요청",
      "사장님 — 수락 / 다른 날짜 제안 / 거절, 수락한 요청에서만 연락처 공개",
      "확정 예약이 아니라 요청이라 사장님 쪽 부담이 적음",
    ],
  },
  {
    no: "04",
    tag: "재방문",
    title: "지도는 진입점이 아니라 결과 화면",
    desc: "다음 미용·검진 D-day를 견종별 주기로 계산해 먼저 알리고, 그 시점에 맞는 샵으로 연결합니다. 지도를 첫 화면이 아니라 관리 시점의 도착지로 뒀습니다.",
    points: [
      "미용 6·8·10주, 검진 1년(7살부터 6개월) 주기",
      "몸무게가 기간 내 10% 이상 변하면 병원 확인을 권함",
    ],
  },
];

const STATUS_NOTES = [
  "Supabase 프로젝트 연결 — 코드·마이그레이션 완료, 키 발급 후 연결",
  "포트원 실결제 — 코드 완료, 가입·심사 후 테스트 키로 검증 필요",
  "카카오 로그인 — 코드 완료, 콘솔 설정 후 실제 로그인 검증 필요",
  "약관·개인정보처리방침 — 초안, 법률 검토 후 확정",
];

function PhoneRow({
  shots,
}: {
  shots: { src: string; alt: string; marginTop: number }[];
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        alignItems: "flex-start",
        marginBottom: 96,
      }}
    >
      {shots.map((shot) => (
        <ImageBox
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          fit="cover"
          containerStyle={{
            flex: "1 1 200px",
            minWidth: 150,
            aspectRatio: "810/1480",
            marginTop: shot.marginTop,
          }}
        />
      ))}
    </div>
  );
}

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

export default function MungspotPage() {
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
        <DetailHeader label="06 / PETCARE" />

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
            멍스팟
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
            사진 한 장으로 우리 아이 견종을 알아보고, 그 아이에게 지금 필요한
            동물병원·미용샵·호텔을 지도에서 찾는 반려견 케어 플랫폼.
          </p>

          <PhoneRow shots={FLOW_SHOTS} />

          <CaseSection
            rows={[
              {
                label: "문제",
                text: "견주는 우리 아이에게 지금 뭐가 필요한지 모르고, 샵은 지도에 등록해 둬도 손님이 오는지 알 수 없습니다. 양쪽을 잇는 축이 없었습니다.",
              },
              {
                label: "해결",
                text: "견종을 축으로 잡았습니다. 사진으로 견종을 판별하면 필요한 관리가 정해지고, 관리 시점이 정해지면 갈 샵이 정해집니다. 그 끝에 예약 요청을 붙여 샵에 실제 손님이 도착하게 했습니다.",
              },
              {
                label: "결과",
                text: "권한·요금제 한도를 데이터베이스가 강제하도록 설계하고, 실제 PostgreSQL에 비로그인·타인 세션을 재현해 139개 항목을 자동 검증했습니다.",
              },
            ]}
          />

          <SectionLabel>01 — 설계의 네 축</SectionLabel>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              marginBottom: 96,
            }}
          >
            {PILLARS.map((p) => (
              <div
                key={p.no}
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
                    {p.no}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: ".1em",
                      color: "#8A8A8A",
                    }}
                  >
                    {p.tag}
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
                    {p.title}
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
                    {p.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      marginTop: 18,
                    }}
                  >
                    {p.points.map((point) => (
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
                </div>
              </div>
            ))}
          </div>

          <PhoneRow shots={BIZ_SHOTS} />

          <SectionLabel>02 — 권한을 코드가 아니라 DB가 지킨다</SectionLabel>
          <div
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)",
              gap: "24px 64px",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: "clamp(40px,6vw,88px)",
                lineHeight: 0.95,
                letterSpacing: "-.045em",
              }}
            >
              139 / 139
            </div>
            <p
              style={{
                margin: 0,
                fontWeight: 400,
                fontSize: 16.5,
                lineHeight: 1.8,
                color: "#222222",
              }}
            >
              결제·개인정보·요금제 한도를 화면 코드로 막으면 개발자 도구로
              뚫립니다. 그래서 역할·요금제·검증 표시·소유자는 컬럼 권한 자체를
              주지 않고, 한도는 DB 트리거와 함수가 검사하게 했습니다.
              <br />
              <br />
              검증은 PGlite(실제 PostgreSQL)에 Supabase와 같은 역할을 재현하고
              마이그레이션을 적용한 뒤, 비로그인 세션과 다른 회원 세션으로 직접
              SQL을 보내 확인합니다. 검사 자체가 구멍을 잡아내는지도 확인했습니다
              — 일부러 역할 변경 권한을 열었을 때 해당 항목이 실패로 바뀌는지
              봤습니다.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 20px",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.7,
              color: "#555555",
              marginBottom: 96,
              maxWidth: 900,
            }}
          >
            {[
              "비로그인 — 회원 정보·결제·빌링키 조회 차단",
              "회원 — 자기 역할·요금제 변경 불가",
              "사장님 — 남의 가게 수정·통계 조회 불가",
              "요금제별 사진 장수·강점 태그·통계 단위 제한",
              "결제 ID 중복 기록 불가 (멱등 처리)",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <SectionLabel>03 — 키가 없어도 앱은 돌아간다</SectionLabel>
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
            외부 키가 하나도 없는 상태에서도 앱이 뜨고, 없는 기능만 꺼지거나
            데모로 바뀌도록 설계했습니다. Supabase가 없으면 로그인·결제·사장님
            기능이 숨겨지고 스캔·지도·착용기 미리보기는 그대로 동작합니다. 이미지
            생성 키가 없으면 착용기는 옷을 끌어서 맞춰 보는 합성 미리보기로
            내려가고 화면에 &quot;AI 생성 아님&quot;을 표시합니다. 덕분에 키 발급을
            기다리는 동안에도 나머지를 계속 만들 수 있었습니다.
          </p>

          <SectionLabel>04 — 현재 상태</SectionLabel>
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
            기능 구현과 권한 검증은 끝났고, 외부 계정 연동과 심사가 남아 있습니다.
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
              "NEXT.JS 16",
              "TYPESCRIPT",
              "TAILWIND V4",
              "SUPABASE",
              "TENSORFLOW.JS",
              "KAKAO MAP",
              "PORTONE V2",
              "PWA",
            ]}
            href="https://meongspot.com"
            label="meongspot.com"
          />
        </section>

        <DetailNav
          prev={{
            href: "/work/member-auth",
            label: "← 이전 · 자격 인증형 회원제 시스템",
          }}
          next={{ href: "/work/websites", label: "다음 · 웹사이트 제작 →" }}
        />

        <Footer marginTop={140} />
      </div>
    </div>
  );
}
