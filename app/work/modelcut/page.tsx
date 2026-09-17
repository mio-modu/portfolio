import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import CaseSection from "@/components/CaseSection";
import TechLinkRow from "@/components/TechLinkRow";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "착용컷 생성기",
  openGraph: {
    title: "착용컷 생성기",
    images: ["/img/modelcut-landing.png"],
  },
};

const STATS = [
  { value: "9.8초", label: "착용컷 1장 생성" },
  { value: "50~60원", label: "1컷당 생성 원가" },
  { value: "모델 12", label: "체형 · 톤별 프리셋" },
];

const FLOW_STEPS = [
  {
    num: "01",
    label: "상품 등록",
    desc: "사진 1장을 올리고 품목을 고릅니다. 옷이면 그대로 입히고, 가방·잡화면 어울리는 옷을 만듭니다.",
  },
  {
    num: "02",
    label: "코디 생성",
    desc: "의류 → 신발 → 액세서리 순으로 생성합니다. 항목마다 직접 만들기 · AI가 알아서 · 안 함을 고릅니다.",
  },
  {
    num: "03",
    label: "겹쳐보기",
    desc: "모델 위에 옷을 끌어다 놓고 위치와 크기를 맞춥니다. 조합을 눈으로 가늠하는 단계라 정확할 필요는 없습니다.",
  },
  {
    num: "04",
    label: "최종 연출",
    desc: "포즈 · 배경 · 앵글을 정해 착용컷을 뽑습니다. 포즈를 여러 개 고르면 그만큼 컷이 나옵니다.",
  },
];

const SCREENS = [
  {
    label: "기본 모드",
    src: "/img/modelcut-workspace.png",
    alt: "기본 모드 작업 화면 — 모델·상의·하의 슬롯",
    aspectRatio: "2538/1342",
    desc: "왼쪽은 모델·상의·하의·원피스·신발·액세서리 라이브러리, 가운데는 조합 무대입니다. 슬롯을 탭하면 라이브러리에서 바로 배치됩니다.",
  },
  {
    label: "스튜디오 결과",
    src: "/img/modelcut-ui-studio-result.png",
    alt: "완성된 착용컷과 생성 로그가 함께 표시되는 스튜디오 화면",
    aspectRatio: "2527/1354",
    desc: "결과마다 이걸로 쓸게요 · 못 쓰겠어요 피드백을 받고, 모델명·원가·소요 시간·검증 수치를 함께 기록합니다.",
  },
  {
    label: "고급 AI 모드",
    src: "/img/modelcut-ui-advanced.png",
    alt: "고급 AI 모드 — 상품 사진 한 장으로 의류부터 착용컷까지 자동 생성",
    aspectRatio: "2227/1336",
    desc: "스타일링을 맡기고 싶은 셀러를 위한 경로입니다. 상품 1장과 모델만 고르면 의류 → 신발 → 액세서리 → 착용컷이 한 번에 흘러갑니다.",
  },
  {
    label: "연출 컨트롤",
    src: "/img/modelcut-ui-options.png",
    alt: "포즈, 배경, 앵글을 조합하는 연출 컨트롤 화면",
    aspectRatio: "2502/1354",
    desc: "포즈 7종, 배경 6종, 촬영 대상·범위·카메라 높이를 조합합니다. 상품이 왜곡 없이 보여야 하는 컷은 아이레벨로 고정됩니다.",
  },
];

const QUALITY_GATES = [
  {
    label: "상품 품질 보존",
    desc: "셀러 상품 영역은 생성 대상에서 제외하고 원본을 그대로 합성합니다. 생성이 끝나면 상품 색 차이를 수치로 계산해 리포트합니다.",
  },
  {
    label: "마크 제거 검증",
    desc: "결과물 우측·상단 영역의 워터마크 잔존율을 검사해, 통과한 컷만 다운로드 가능한 상태로 넘깁니다.",
  },
  {
    label: "비용 계측",
    desc: "컷마다 모델명·소요 시간·원가를 기록합니다. 크레딧은 옷 1 + 착용컷 1 단위로 생성 전에 미리 노출됩니다.",
  },
];

export default function ModelcutPage() {
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
        <DetailHeader label="02 / COMMERCE" />

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
            착용컷 생성기
          </h1>
          <p
            style={{
              fontWeight: 400,
              fontSize: "clamp(19px,2.2vw,26px)",
              lineHeight: 1.6,
              letterSpacing: "-.015em",
              color: "#1A1A1A",
              margin: "0 0 40px",
              maxWidth: 720,
            }}
          >
            상품 사진 한 장만 올리면 AI가 의류·신발·액세서리를 순서대로
            코디하고, 모델·포즈·배경·앵글을 골라 착용컷을 생성합니다.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px 40px",
              paddingTop: 28,
              borderTop: "1px solid #0A0A0A",
              marginBottom: 96,
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: 27,
                    fontWeight: 700,
                    letterSpacing: "-.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontSize: 13, color: "#666666", marginTop: 6 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <ImageBox
            src="/img/modelcut-landing.png"
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
                text: "모델료·스튜디오·헤어메이크업·보정이 한 세트로 묶여, 상품 하나를 찍으려면 최소 수십만 원과 며칠의 리드타임이 필요하다.",
              },
              {
                label: "해결",
                text: "상품 사진 한 장을 입력으로 받아 모델·의상·배경을 자동 코디해 착용컷을 생성하는 체이닝 파이프라인을 구성. 각 단계의 출력이 다음 단계의 레퍼런스로 들어가 톤과 소재가 어긋나지 않는다.",
              },
              {
                label: "결과",
                text: "이미지 1건당 생성 원가 50~60원, 생성 시간 9.8초까지 최적화. 워터마크 잔존율과 상품 색상 차이를 수치로 검증해, 통과한 컷만 다운로드할 수 있도록 품질 게이트를 걸었다.",
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
                Core Flow
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
                네 단계 · 앞 단계 결과가 다음 단계의 레퍼런스
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
              각 단계를 하나씩 확인하며 진행하거나, 중간 확인 없이 끝까지
              자동으로 돌릴 수 있습니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 12,
              marginBottom: 80,
            }}
          >
            {FLOW_STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  border: "1px solid #E3E0DA",
                  borderRadius: 6,
                  padding: "32px 26px",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 30,
                    lineHeight: 1,
                    letterSpacing: "-.04em",
                    color: "#C9C5BD",
                    marginBottom: 20,
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {step.label}
                </div>
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

          <div
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 32,
              marginBottom: 96,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <ImageBox
                src="/img/modelcut-panel-direction.png"
                alt="최종 연출 패널 — 포즈, 배경, 앵글, 구성 선택"
                fit="contain"
                containerStyle={{
                  width: "100%",
                  aspectRatio: "1136/810",
                  background: "#FFFFFF",
                  border: "1px solid #E3E0DA",
                  borderRadius: 6,
                }}
              />
              <div style={{ fontSize: 13, color: "#666666", lineHeight: 1.7 }}>
                연출 선택은 전부 노출형 컨트롤입니다. 예상 크레딧이 버튼 위에서
                실시간으로 계산됩니다.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <ImageBox
                src="/img/modelcut-shot-street-stand.png"
                alt="생성된 착용컷 — 45도 측면 · 거리 · 전신 · 로우앵글"
                fit="cover"
                containerStyle={{
                  width: "100%",
                  aspectRatio: "926/1056",
                  borderRadius: 6,
                }}
              />
              <div style={{ fontSize: 13, color: "#666666", lineHeight: 1.7 }}>
                45도 측면 · 거리 · 전신 · 로우앵글. 상품(가방)은 원본 그대로
                합성되고 나머지는 생성됩니다.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 96,
            }}
          >
            <ImageBox
              src="/img/modelcut-shot-street-walk.png"
              alt="생성된 착용컷 — 워킹 · 거리"
              fit="cover"
              containerStyle={{
                width: "100%",
                aspectRatio: "629/862",
                maxWidth: 420,
                margin: "0 auto",
                borderRadius: 6,
              }}
            />
            <div
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: ".18em",
                color: "#555555",
                textAlign: "center",
              }}
            >
              같은 상품, 다른 포즈 · 배경 · 앵글 — 셀러 상품은 항상 원본 그대로
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
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".42em",
                textTransform: "uppercase",
                color: "#8A8A8A",
                marginBottom: 28,
              }}
            >
              Screens
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
              한 화면에서 재료를 고르고, 만들고, 내려받습니다.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 56,
              marginBottom: 96,
            }}
          >
            {SCREENS.map((screen) => (
              <div key={screen.label} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <ImageBox
                  src={screen.src}
                  alt={screen.alt}
                  fit="cover"
                  containerStyle={{
                    width: "100%",
                    aspectRatio: screen.aspectRatio,
                    border: "1px solid #E3E0DA",
                    borderRadius: 6,
                  }}
                />
                <div
                  className="stack-mobile"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px minmax(0,1fr)",
                    gap: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: ".2em",
                      color: "#666666",
                    }}
                  >
                    {screen.label}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 400,
                      fontSize: 14.5,
                      lineHeight: 1.8,
                      color: "#222222",
                    }}
                  >
                    {screen.desc}
                  </p>
                </div>
              </div>
            ))}
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
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".42em",
                textTransform: "uppercase",
                color: "#8A8A8A",
                marginBottom: 28,
              }}
            >
              Quality Gate
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
              생성만으로 끝내지 않고, 상품이 왜곡되지 않았는지를 수치로
              검증합니다.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 40,
              marginBottom: 40,
            }}
          >
            {QUALITY_GATES.map((gate) => (
              <div key={gate.label} style={{ minWidth: 0 }}>
                <div
                  style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}
                >
                  {gate.label}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "#57544F",
                  }}
                >
                  {gate.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              border: "1px solid #E3E0DA",
              borderRadius: 6,
              padding: "20px 22px",
              fontFamily: "'IBM Plex Mono',monospace",
              fontSize: 12.5,
              color: "#57544F",
              lineHeight: 1.9,
              overflowWrap: "anywhere",
              marginBottom: 96,
            }}
          >
            gemini-3.1-flash-lite-image · 54원 · 9.8초 · 마크 제거 확인 (우
            9.5% · 상 4.8%) · 상품 색 차이 1.8
          </div>

          <TechLinkRow
            tech={["NEXT.JS", "AI IMAGE API", "VERCEL"]}
            href="https://modelcut-umber.vercel.app/"
            label="modelcut-umber.vercel.app"
          />
        </section>

        <DetailNav
          prev={{ href: "/work/lumain-hair", label: "← 이전 · 루메인 헤어" }}
          next={{ href: "/work/gamsadam", label: "다음 · 감사담 →" }}
        />

        <Footer marginTop={140} />
      </div>
    </div>
  );
}
