import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import CaseSection from "@/components/CaseSection";
import TechLinkRow from "@/components/TechLinkRow";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "웹디자인 유형 시스템",
  openGraph: {
    title: "웹디자인 유형 시스템",
    images: ["/img/ds-t23.jpg"],
  },
};

type Sample = {
  id: string;
  name: string;
  img: string;
  subject: string;
  rule: string;
  did: string;
};

/* 분류 기준은 취향이 아니라 명세다 — 각 유형이 쓸 수 있는 레이어 수.
   층을 쓸 수 있는 유형과 평면이 규칙인 유형은 애초에 다른 물건이다. */
const GROUPS: { layers: string; head: string; lede: string; items: Sample[] }[] =
  [
    {
      layers: "3겹",
      head: "층으로 공간을 만드는 유형",
      lede: "전경·중경·배경을 분리하고 층마다 그림자 단계와 선명도를 다르게 준다. 23유형 중 7개만 여기에 해당한다.",
      items: [
        {
          id: "T23",
          name: "판타지 일러스트 렌더",
          img: "/img/ds-t23.jpg",
          subject: "밤의 도서관 — 심야 서점·도서관 찾기",
          rule: "전경이 프레임을 감싸 깊이를 만든다 · 배경은 채도 −40%",
          did: "13겹으로 쌓고 거리에 따라 채도를 떨어뜨렸다. 초점면 밖은 흐리고, 광원 하나에 모든 그림자 방향을 맞췄다. 먼지는 세 가지 속도로 따로 떠다닌다.",
        },
        {
          id: "T21",
          name: "웹 UI 패널 캡처",
          img: "/img/ds-t21.jpg",
          subject: "채움 — 소규모 유통 재고관리",
          rule: "앞 y18/blur44/16% · 뒤 y8/blur20/10% · 겹침 오프셋 = 패널 폭의 12%",
          did: "그림자 값을 명세 그대로 썼다. 패널 세 장을 좌상→우하로 계단처럼 놓고, 뒤 한 장만 다크로 바꿔 리듬을 만들었다. 표 안은 실제로 계산이 되는 값만 넣었다.",
        },
        {
          id: "T18",
          name: "K-커머스 상세페이지",
          img: "/img/ds-t18.jpg",
          subject: "고기왕 — 정육점 단골 주문",
          rule: "흰 배경 / 뒤 목업 / 앞 목업 · 국문 굵은 타이포",
          did: "화면 두 장을 겹쳐 앞뒤를 만들고, 붉은 강조를 문장 안에서 한 번만 썼다.",
        },
      ],
    },
    {
      layers: "2겹",
      head: "하나를 얹는 유형",
      lede: "바닥 한 장 위에 주제 한 장. 얹는 규칙과 그림자 한 단계가 유형의 성격을 정한다.",
      items: [
        {
          id: "T10",
          name: "그라데이션 마스코트",
          img: "/img/ds-t10.jpg",
          subject: "또박 — 7–9세 한글 받아쓰기",
          rule: "오브젝트가 마스코트 뒤로 지나간다 · 무광 클레이, 금속·유리 금지",
          did: "자모 블록이 머리 뒤로 물리게 배치하고, 멀수록 흐리고 옅게 했다. 앞쪽 블록은 프레임 밖으로 잘려 나가 더 가깝게 읽힌다. 광택이 생기면 클레이가 아니라서 빛은 선이 아니라 흐린 얼룩으로 넣었다.",
        },
        {
          id: "T07",
          name: "문서·리포트 캡처",
          img: "/img/ds-t07.jpg",
          subject: "조항 — 용역계약서 검토",
          rule: "주석은 우측 한 열에만 · 본문을 덮지 않는다 · 하이라이트 5개 이하",
          did: "로렘입숨 금지가 이 유형의 핵심이라 실제 계약 조항을 썼다. 검수·대금·지식재산권에서 반복적으로 문제가 되는 문장 네 곳만 짚고, 지적에서 끝나지 않게 바꿔 넣을 문장을 같이 붙였다.",
        },
        {
          id: "T11",
          name: "게임 배지",
          img: "/img/ds-t11.jpg",
          subject: "10K 클럽 — 12주 러닝 챌린지",
          rule: "그림자는 y3/blur0 하드섀도우 한 겹 · 엠블럼이 카드 위에 올라탄다",
          did: "엠블럼이 카드 위로 걸치게 하고, 스탯 카드 네 장을 상하좌우 등거리로 놓았다. 진입은 한 번 튀고 멈춘다 — 상시 반짝임은 이 유형의 금지 사항이다.",
        },
      ],
    },
    {
      layers: "1겹",
      head: "평면이 규칙인 유형",
      lede: "여기에 입체를 넣으면 그 유형이 아니게 된다. 밀도는 층이 아니라 타이포 위계·등간격·실제 내용으로 만든다.",
      items: [
        {
          id: "T14",
          name: "프로세스 다이어그램",
          img: "/img/ds-t14.jpg",
          subject: "정산봇 — 프리랜서 종합소득세",
          rule: "그림자 없음 · 노드는 1px 테두리로만 구분 · 노드 8개 미만",
          did: "좌→우 단방향, 분기는 위아래 대칭, 점선 루프가 사람이 답한 건을 대조 단계로 되돌린다. 장식용 다이어그램이 아니라 실제 처리 순서 그대로다.",
        },
        {
          id: "T06",
          name: "모노 심볼",
          img: "/img/ds-t06.jpg",
          subject: "KOEUL — 수제화 공방",
          rule: "여백 70% 이상 · 심볼은 단변의 55~70% · 그림자 절대 금지",
          did: "심볼이 단변의 33.8%로 렌더되고 있었다. 선언한 크기는 맞는데 그림이 자기 viewBox의 57%만 채워서였다. 경계를 재서 다시 맞추니 62%가 됐다.",
        },
        {
          id: "T17",
          name: "하이비즈 형광",
          img: "/img/ds-t17.jpg",
          subject: "PUNCH — 성수동 복싱장",
          rule: "형광 한 색 + 검정 · 국문 초대형 타이포",
          did: "설명을 줄이고 숫자와 문장 하나로 화면을 채웠다.",
        },
        {
          id: "T20",
          name: "스탯 프루프",
          img: "/img/ds-t20.jpg",
          subject: "루트핏 — 물류 배차 최적화",
          rule: "수치가 주인공 · 출처와 표본을 같이 적는다",
          did: "숫자 옆에 언제·몇 개사·어떤 조건인지를 붙였다. 근거 없는 수치는 이 유형에서 가장 빠르게 신뢰를 깎는다.",
        },
      ],
    },
  ];

const FACTS = [
  { n: "23", u: "유형", d: "팔레트 7토큰 · 구도 5항목 · 입체 4항목 · 이미지 4항목" },
  { n: "833", u: "건 분석", d: "전부 서로 다른 서비스. 한 건이 시각 유형과 아이디어 축을 동시에 가진다" },
  { n: "8", u: "지면", d: "랜딩 · 상세 · 앱 · 대시보드 · 덱 · 썸네일 · 소셜 · 키비주얼" },
  { n: "138,240", u: "아이디어 조합", d: "문제 12 × 메커니즘 12 × 입력 10 × 대상 12 × 가치 8" },
];

function GroupBlock({ g }: { g: (typeof GROUPS)[number] }) {
  return (
    <section style={{ marginBottom: 108 }}>
      <div
        className="stack-mobile"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)",
          gap: "20px 64px",
          alignItems: "baseline",
          paddingTop: 16,
          borderTop: "1px solid #0A0A0A",
          marginBottom: 44,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".42em",
              textTransform: "uppercase",
              color: "#8A8A8A",
              marginBottom: 12,
            }}
          >
            Depth · {g.layers}
          </div>
          <h2
            style={{
              margin: 0,
              fontWeight: 800,
              fontSize: "clamp(22px,2.6vw,32px)",
              lineHeight: 1.22,
              letterSpacing: "-.035em",
            }}
          >
            {g.head}
          </h2>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.85,
            color: "#333333",
            maxWidth: 620,
          }}
        >
          {g.lede}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {g.items.map((s) => (
          <article key={s.id}>
            <ImageBox
              src={s.img}
              alt={`${s.id} ${s.name} — ${s.subject}`}
              fit="cover"
              containerStyle={{ width: "100%", aspectRatio: "16/10" }}
            />
            <div
              className="stack-mobile"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)",
                gap: "18px 64px",
                marginTop: 20,
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 19,
                    letterSpacing: "-.035em",
                    marginBottom: 7,
                  }}
                >
                  <span style={{ color: "#8A8A8A", marginRight: 9 }}>{s.id}</span>
                  {s.name}
                </div>
                <div
                  style={{ fontSize: 14, lineHeight: 1.7, color: "#666666" }}
                >
                  {s.subject}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.75,
                    color: "#8A8A8A",
                    letterSpacing: "-.005em",
                    paddingBottom: 12,
                    marginBottom: 12,
                    borderBottom: "1px solid #E4E4E4",
                  }}
                >
                  명세 — {s.rule}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15.5,
                    lineHeight: 1.85,
                    color: "#222222",
                  }}
                >
                  {s.did}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function DesignSystemPage() {
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
        <DetailHeader label="07 / SYSTEM" />

        <section style={{ padding: "72px 0 0" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: ".24em",
              color: "#666666",
              marginBottom: 20,
            }}
          >
            자체 도구
          </div>
          <h1
            style={{
              margin: 0,
              fontWeight: 800,
              fontSize: "clamp(34px,5.4vw,68px)",
              lineHeight: 1.08,
              letterSpacing: "-.045em",
            }}
          >
            디자인을 고르는 일을
            <br />
            시스템으로 옮겼다
          </h1>
          <p
            style={{
              margin: "28px 0 0",
              maxWidth: 680,
              fontSize: 17,
              lineHeight: 1.9,
              color: "#333333",
            }}
          >
            매번 “이번엔 어떤 느낌으로 갈까”부터 시작하면 결과가 사람과 컨디션에
            따라 흔들립니다. 그래서 실제 서비스 833건을 시각 유형으로 분류하고,
            유형마다 팔레트·구도·입체·이미지 처리를 수치로 고정했습니다.
            작업을 시작하기 전에 유형을 먼저 못 박고, 끝나면 그 명세를 지켰는지
            다시 검사합니다.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(215px,1fr))",
            gap: "36px 32px",
            margin: "72px 0 104px",
            paddingTop: 30,
            borderTop: "1px solid #0A0A0A",
          }}
        >
          {FACTS.map((f) => (
            <div key={f.u}>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(30px,3.6vw,44px)",
                  lineHeight: 1,
                  letterSpacing: "-.045em",
                }}
              >
                {f.n}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "-.02em",
                    color: "#666666",
                    marginLeft: 7,
                  }}
                >
                  {f.u}
                </span>
              </div>
              <div
                style={{
                  marginTop: 12,
                  fontSize: 13.5,
                  lineHeight: 1.75,
                  color: "#666666",
                }}
              >
                {f.d}
              </div>
            </div>
          ))}
        </section>

        <CaseSection
          rows={[
            {
              label: "배경",
              text: "외주 작업에서 가장 오래 걸리는 구간은 만드는 시간이 아니라 방향을 정하는 시간이었습니다. 레퍼런스를 모으고 고르는 과정이 매번 처음부터 반복됐습니다.",
            },
            {
              label: "한 일",
              text: "실제 서비스 833건을 화면으로 직접 보면서 시각 유형과 아이디어 축을 동시에 붙였습니다. 텍스트만 읽고 분류하면 데이터가 오염되기 때문입니다. 유형마다 팔레트 7토큰, 구도 5항목, 입체 4항목, 이미지 4항목과 안티패턴을 수치로 적었습니다.",
            },
            {
              label: "결과",
              text: "유형을 지정하면 그 명세대로 페이지가 나옵니다. 아래 10벌은 전부 같은 시스템에서, 서로 다른 유형을 지정해 만든 것입니다. 색만 바꾼 것이 아니라 층 수·그림자 값·여백 비율·이미지 처리가 유형마다 다릅니다.",
            },
          ]}
        />

        <section style={{ marginBottom: 96 }}>
          <div
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)",
              gap: "24px 64px",
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
              분류 기준
            </div>
            <div>
              <p
                style={{
                  margin: "0 0 18px",
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: "#222222",
                  maxWidth: 640,
                }}
              >
                아래 10벌을 <strong>쓸 수 있는 레이어 수</strong>로 묶었습니다.
                보기 좋은 순서가 아니라 명세가 정한 순서입니다.
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 15.5,
                  lineHeight: 1.9,
                  color: "#666666",
                  maxWidth: 640,
                }}
              >
                층을 쓸 수 있는 유형과 평면이 규칙인 유형은 애초에 다른 물건입니다.
                전부에 입체를 넣으면 유형을 지정한 의미가 사라집니다. 23유형 중
                3겹은 7개, 2겹은 9개, 1겹은 6개입니다.
              </p>
            </div>
          </div>
        </section>

        {GROUPS.map((g) => (
          <GroupBlock key={g.layers} g={g} />
        ))}

        <section style={{ marginBottom: 96 }}>
          <div
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)",
              gap: "24px 64px",
              paddingTop: 16,
              borderTop: "1px solid #0A0A0A",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontWeight: 800,
                fontSize: "clamp(22px,2.6vw,32px)",
                lineHeight: 1.22,
                letterSpacing: "-.035em",
              }}
            >
              지켰는지는
              <br />
              도구가 검사한다
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {[
                [
                  "데이터 검사",
                  "팔레트가 대비 4.5를 통과하지 못하면 빌드가 멈춥니다. 23유형 × 24각도 = 1,080건의 색상환 회전에 대해 검사를 통과시켰습니다.",
                ],
                [
                  "브라우저 검사",
                  "생성된 페이지를 실제로 열어 봅니다. 반대 테마 OS에서 팔레트가 뒤집히지 않는지, 모션을 끈 환경에서 콘텐츠가 보이는지, 휴대폰 폭에서 가로로 넘치지 않는지. 데이터만 봐서는 안 잡힙니다.",
                ],
                [
                  "실제로 잡힌 것",
                  "CSS 키프레임이 SVG의 transform 속성을 덮어써 부유 오브젝트가 전부 화면 밖으로 끌려가 있었습니다. inline span에 height가 먹지 않아 막대가 선으로 찌그러져 있었습니다. 심볼이 자기 viewBox를 다 채우지 않아 선언한 크기가 거짓이었습니다. 셋 다 열어 보지 않으면 안 보입니다.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  style={{ paddingTop: 14, borderTop: "1px solid #DEDEDE" }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                      letterSpacing: "-.03em",
                      marginBottom: 8,
                    }}
                  >
                    {t}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 15.5,
                      lineHeight: 1.85,
                      color: "#333333",
                      maxWidth: 640,
                    }}
                  >
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TechLinkRow
          tech={[
            "Python",
            "JSON 스키마",
            "SVG",
            "Playwright",
            "WCAG 대비 검사",
            "prefers-reduced-motion",
          ]}
        />

        <DetailNav
          prev={{ href: "/work/mungspot", label: "06 / 멍스팟" }}
          next={{ href: "/work/modelcut", label: "01 / 모델 착용컷 생성기" }}
        />
        <Footer marginTop={140} />
      </div>
    </div>
  );
}
