import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import CaseSection from "@/components/CaseSection";
import TechLinkRow from "@/components/TechLinkRow";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "웹디자인 스타일 시스템",
  openGraph: {
    title: "웹디자인 스타일 시스템",
    images: ["/img/ds-t09.jpg"],
  },
};

type Sample = {
  id: string;
  name: string;
  img: string;
  /** 움직임이 요점인 항목만. 있으면 정지 이미지 대신 이 영상을 재생한다 */
  video?: string;
  subject: string;
  rule: string;
  did: string;
};

/* 분류 기준은 취향이 아니라 명세다 — 각 유형이 쓸 수 있는 레이어 수.
   층을 쓸 수 있는 유형과 평면이 규칙인 유형은 애초에 다른 물건이다. */
const GROUPS: { layers: string; head: string; lede: string; items: Sample[] }[] =
  [
    {
      layers: "깊이 있는 화면",
      head: "앞뒤가 느껴지는 화면",
      lede: "사진처럼 가까운 것과 먼 것이 나뉘어 보이는 스타일입니다. 브랜드를 분위기로 기억시켜야 할 때 씁니다. 25가지 중 7가지가 여기에 해당합니다.",
      items: [
        {
          id: "T09",
          name: "영화 같은 한 장면",
          img: "/img/ds-t09.jpg",
          subject: "오늘 볶음 — 원두 정기 배송",
          rule: "화면 전체가 사진 한 장 · 빛은 뒤에서 · 따뜻한 조명",
          did: "창밖에서 들어오는 빛에 연기가 드러나고, 작업자 어깨 가장자리가 밝게 빛납니다. 이 스타일에서 가장 흔한 실패는 글자가 사진에 묻히는 것이라, 글자가 놓이는 아래쪽만 살짝 어둡게 깔고 필름 같은 입자감을 더했습니다.",
        },
        {
          id: "T09",
          name: "세 장면이 왼쪽으로 흐르는 화면",
          img: "/img/ds-t09b.jpg",
          video: "/img/ds-t09b",
          subject: "스민 — 신안 천일염",
          rule: "화면 전체가 사진 · 카드 없이 글자만 · 글자 뒤에 그라데이션 · 컷을 끊지 않는다",
          did: "처음에는 위 T24처럼 흰 카드에 글자를 넣었는데, 화면이 딱딱 끊기고 카드가 사진을 가렸습니다. 이 스타일은 규칙이 다릅니다 — 카드 없이 글자를 사진에 바로 얹고, 대신 글자 뒤를 어둡게 깔아 읽히게 합니다. 그리고 컷을 끊지 않습니다. 세 장면이 한 줄로 이어져 왼쪽으로 천천히 흐르고, 마지막에 첫 장면의 사본을 붙여 되돌아가는 순간이 보이지 않게 했습니다. 머무는 동안에는 카메라가 아주 천천히 다가갑니다.",
        },
        {
          id: "T23",
          name: "동화책 삽화",
          img: "/img/ds-t23.jpg",
          subject: "밤의 도서관 — 아이 이름으로 만드는 밤 이야기",
          rule: "화면 전체가 그림 · 주인공은 화면의 3분의 1 · 빛의 방향을 하나로",
          did: "처음에는 이 장면을 코드로 직접 그렸는데, 그게 화면이 밋밋해 보이던 이유였습니다. 그림이 곧 화면인 스타일에서는 그림이 주인공이어야 합니다. 생성한 그림을 배경으로 깔고 떠다니는 먼지만 코드로 얹었습니다.",
        },
        {
          id: "T13",
          name: "보송한 3D 사물",
          img: "/img/ds-t13.jpg",
          subject: "담다 — 사진으로 받는 이사 견적",
          rule: "반짝임 금지 · 표면은 보송하게",
          did: "아래 T22와 같은 3D인데 규칙이 정반대입니다. 여기서는 광택이 보이면 실패입니다. 상자와 머그, 접은 담요를 무광으로 만들어 살짝 떠 있게 놓고, 그림자만 반대로 움직이게 했습니다.",
        },
        {
          id: "T21",
          name: "화면 캡처 겹치기",
          img: "/img/ds-t21.jpg",
          subject: "채움 — 소규모 유통 재고관리",
          rule: "화면 세 장을 계단처럼 · 앞뒤 그림자 세기를 다르게 · 진짜 데이터만",
          did: "앞에 놓인 화면은 그림자를 진하게, 뒤는 옅게 넣는 값이 정해져 있어 그대로 썼습니다. 뒤 한 장만 어두운 색으로 바꿔 리듬을 만들었고, 표 안 숫자는 실제로 계산이 맞는 값만 넣었습니다. 꾸며낸 숫자를 쓰면 이 스타일은 바로 들통납니다.",
        },
        {
          id: "T18",
          name: "쇼핑몰 상세페이지",
          img: "/img/ds-t18.jpg",
          subject: "고기왕 — 정육점 단골 주문",
          rule: "휴대폰 화면이 주인공 · 인물은 실제 사용 연령대로",
          did: "화면 두 장을 겹쳐 앞뒤를 만들고, 강조하는 빨간색은 문장 안에서 딱 한 번만 썼습니다. 인물 사진은 실제로 이 앱을 쓸 40대 사장님으로 맞췄습니다.",
        },
      ],
    },
    {
      layers: "하나를 얹는 화면",
      head: "바탕 위에 주인공 하나",
      lede: "배경 한 겹 위에 주인공을 하나 올리는 스타일입니다. 무엇을 어떻게 올리느냐가 성격을 정합니다.",
      items: [
        {
          id: "T22",
          name: "이벤트 광고 배너",
          img: "/img/ds-t22.jpg",
          subject: "출석 코인 — 앱 이벤트 배너",
          rule: "반짝임 허용 · 화려한 효과는 세 가지까지",
          did: "위의 T13과 나란히 보시면 이 시스템이 재질까지 구분한다는 게 보입니다. 저쪽은 광택 금지, 여기는 광택이 규칙입니다. 다만 이 화려한 톤을 서비스 본문에 그대로 쓰면 앱을 열었을 때 화면이 달라 신뢰가 깎이기 때문에, 배너 두 장으로만 만들었습니다.",
        },
        {
          id: "T24",
          name: "차분한 사진 위 카드",
          img: "/img/ds-t24a.jpg",
          subject: "머문 — 고성 바닷가 스테이",
          rule: "사진이 화면 전체 · 글자는 흰 카드 안에만 · 채도를 낮춘 자연광",
          did: "이 스타일에서 가장 흔한 실패는 사진 위에 글자를 바로 얹어 안 읽히게 만드는 것입니다. 그래서 글자는 전부 흰 카드 안에 넣고, 카드는 사진 가장자리를 물지 않게 안쪽에 뒀습니다. 그림자는 카드 하나에만 아주 옅게 넣었습니다.",
        },
        {
          id: "T24",
          name: "차분한 사진 위 카드 — 같은 스타일, 다른 피사체",
          img: "/img/ds-t24b.jpg",
          subject: "순한결 — 성분을 줄인 스킨케어",
          rule: "같은 규칙 · 풍경 대신 정물",
          did: "바로 위와 규칙이 똑같습니다. 사진만 바닷가 풍경에서 창가 정물로 바꿨습니다. 스타일을 정해 두면 업종이 달라져도 같은 품질로 나온다는 것이 이 두 장의 요점입니다.",
        },
        {
          id: "T16",
          name: "손맛 나는 질감",
          img: "/img/ds-t16.jpg",
          subject: "결 — 손으로 매는 노트",
          rule: "가까이 찍은 사진 · 옆에서 빛을 줘 결이 드러나게 · 여백 60% 이상",
          did: "이 스타일에서 가장 흔한 실패는 사진에 필터만 씌워 놓고 질감이 있는 척하는 것입니다. 그래서 흉내 내지 않고 한지 단면을 옆빛으로 찍어 섬유 결이 실제로 보이게 했습니다.",
        },
        {
          id: "T10",
          name: "말랑한 캐릭터",
          img: "/img/ds-t10.jpg",
          subject: "곧은획 — 초등 저학년 손글씨",
          rule: "점토처럼 보송하게 · 금속·유리 금지 · 발끝까지 보이게",
          did: "만들어진 그림에 자체 배경이 붙어 나와 네모난 테두리가 보였습니다. 가장자리를 서서히 투명하게 처리해 페이지 배경에 녹였습니다. 배경색은 AI가 기본으로 내놓는 보라→파랑 조합을 피해 분홍·하늘·노랑을 벌려 놓았습니다.",
        },
        {
          id: "T05",
          name: "지도와 데이터",
          img: "/img/ds-t05.jpg",
          subject: "오간다 — 상권 유동 분석",
          rule: "지도가 화면을 채움 · 설명 상자에만 그림자 · 색은 한 계열 + 강조 하나",
          did: "이 스타일에서 절대 하면 안 되는 것이 숫자도 기준도 없는 가짜 그래프입니다. 그래서 역할을 나눴습니다. AI는 밤 도시 항공사진만 만들고, 그 위의 숫자·동선·범례·눈금은 전부 직접 그렸습니다. 어떤 자료를 어떻게 썼는지도 아래에 적었습니다.",
        },
        {
          id: "T07",
          name: "문서에 표시하기",
          img: "/img/ds-t07.jpg",
          subject: "관리비 읽기 — 아파트 관리비 명세",
          rule: "문서가 화면을 채움 · 메모는 오른쪽 한 줄에만 · 형광펜은 다섯 개까지",
          did: "이 스타일은 아무 숫자나 채워 넣으면 바로 티가 납니다. 그래서 실제 관리비 고지서 형식을 그대로 쓰고, 지난달·전년 같은 달과 비교해 유독 튀는 항목만 짚었습니다. 짚고 끝내지 않고 관리사무소에 무엇을 물어보면 되는지까지 붙였습니다.",
        },
        {
          id: "T11",
          name: "게임 배지",
          img: "/img/ds-t11.jpg",
          subject: "10K 클럽 — 12주 러닝 챌린지",
          rule: "그림자는 번지지 않게 딱 한 겹 · 배지가 카드 위로 올라타기 · 사방 간격 똑같이",
          did: "만들어진 그림이 배지 주변에 가짜 카드까지 그려 넣어 진짜 카드와 겹쳤습니다. 배지만 잘라 쓰고 남은 모서리는 지웠습니다. 배지가 위 카드를 가리지 않게 간격을 키우되 상하좌우를 같은 값으로 둬 대칭은 지켰습니다.",
        },
        {
          id: "T19",
          name: "캐릭터가 안내하기",
          img: "/img/ds-t19.jpg",
          subject: "한칸 — 무인 세탁소 사용 안내",
          rule: "왼쪽 캐릭터 / 오른쪽 화면 · 캐릭터가 화면을 가리지 않기 · 말풍선 두 개까지",
          did: "세탁소는 조명이 어둡고 손에는 빨래가 들려 있습니다. 쓰는 상황과 글씨 크기가 안 맞으면 안내가 소용없어서 글씨와 버튼을 키웠습니다. 캐릭터가 손으로 가리키는 곳에 실제 버튼이 오도록 맞췄습니다.",
        },
      ],
    },
    {
      layers: "일부러 납작한 화면",
      head: "꾸미지 않는 것이 규칙인 화면",
      lede: "여기에 입체감을 넣으면 그 스타일이 아니게 됩니다. 밀도는 그림자가 아니라 글자 크기 차이와 정확한 간격, 진짜 내용으로 만듭니다.",
      items: [
        {
          id: "T25",
          name: "잡지 펼침면 같은 글 배치",
          img: "/img/ds-t25.jpg",
          subject: "징후 — 설비 예지보전",
          rule: "그림자 없음 · 선 하나로만 나누기 · 가운데 정렬 금지 · 글 덩어리 세 개까지",
          did: "카드나 상자를 쓰지 않고 얇은 선 하나로만 구역을 나눴습니다. 글 덩어리 길이를 일부러 다르게 해서 긴 것 다음에 짧은 것이 오게 했고, 전부 왼쪽 끝을 맞췄습니다. 가운데 정렬은 이 스타일에서 금지입니다.",
        },
        {
          id: "T14",
          name: "처리 흐름도",
          img: "/img/ds-t14.jpg",
          subject: "정산봇 — 프리랜서 종합소득세",
          rule: "그림자 없음 · 상자는 얇은 선으로만 · 사진 금지 · 단계 여덟 개 미만",
          did: "왼쪽에서 오른쪽으로 한 방향, 갈림길은 위아래 대칭, 점선은 사람이 답한 것이 앞 단계로 되돌아가는 길입니다. 보기 좋으라고 그린 그림이 아니라 실제 처리 순서 그대로입니다.",
        },
        {
          id: "T06",
          name: "심볼 하나만",
          img: "/img/ds-t06.jpg",
          subject: "KOEUL — 수제화 공방",
          rule: "여백 70% 이상 · 심볼은 화면 짧은 쪽의 55~70% · 그림자 절대 금지",
          did: "심볼이 규정보다 작게 나오고 있었습니다. 크기를 제대로 지정했는데도 그림 자체가 자기 영역을 다 안 채워서였습니다. 실제로 재 보고 나서야 잡혔습니다. 눈으로는 안 보이고 자로 재야 보이는 종류의 어긋남입니다.",
        },
        {
          id: "T17",
          name: "형광색 포스터",
          img: "/img/ds-t17.jpg",
          subject: "PUNCH — 성수동 복싱장",
          rule: "형광 한 색 + 검정 · 실루엣만 · 그라데이션 금지",
          did: "설명을 덜어내고 숫자와 문장 하나로 화면을 채웠습니다.",
        },
        {
          id: "T20",
          name: "숫자로 증명하기",
          img: "/img/ds-t20.jpg",
          subject: "루트핏 — 물류 배차 최적화",
          rule: "숫자가 주인공 · 이미지는 오히려 방해 · 출처를 같이 적기",
          did: "숫자 옆에 언제, 몇 곳에서, 어떤 조건으로 나온 값인지를 붙였습니다. 근거 없는 숫자는 이 스타일에서 가장 빨리 신뢰를 깎습니다.",
        },
      ],
    },
  ];

const FACTS = [
  { n: "25", u: "가지 스타일", d: "스타일마다 쓸 색, 요소를 놓을 자리, 그림자 세기, 사진 쓰는 법이 숫자로 정해져 있습니다" },
  { n: "1,538", u: "곳 분석", d: "AI 서비스 833곳과 기업 사이트 705곳. 화면을 하나씩 직접 보고 분류했습니다" },
  { n: "8", u: "가지 지면", d: "홈페이지 · 상세페이지 · 앱 · 관리자 화면 · 제안서 · 썸네일 · SNS · 대표 이미지" },
  { n: "20", u: "벌 제작", d: "아래가 같은 시스템에서 스타일만 바꿔 만든 결과입니다" },
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
            {g.layers}
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
            {s.video ? (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/10",
                  background: "#F0F0F0",
                  overflow: "hidden",
                }}
              >
                {/* 움직임이 요점인 항목이라 정지 이미지로는 전달되지 않는다.
                    소리 없이 반복 재생하고, 재생이 막히면 포스터가 남는다. */}
                <video
                  poster={s.img}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${s.id} ${s.name} — ${s.subject}. 세 컷이 스크롤에 맞춰 넘어가는 화면 녹화`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                >
                  <source src={`${s.video}.webm`} type="video/webm" />
                  <source src={`${s.video}.mp4`} type="video/mp4" />
                </video>
              </div>
            ) : (
              <ImageBox
                src={s.img}
                alt={`${s.id} ${s.name} — ${s.subject}`}
                fit="cover"
                containerStyle={{ width: "100%", aspectRatio: "16/10" }}
              />
            )}
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
                  이 스타일의 규칙 — {s.rule}
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
        <DetailHeader label="04 / SYSTEM" />

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
            디자인은 보통 “이번엔 어떤 느낌으로 갈까”부터 시작합니다. 그러면
            결과가 그날 컨디션에 따라 달라지고, 왜 이렇게 만들었는지 설명하기도
            어렵습니다. 그래서 실제로 운영 중인 서비스와 기업 사이트 1,538곳의
            화면을 직접 보고 25가지 스타일로 나눈 뒤, 스타일마다 색·배치·그림자·
            사진 쓰는 법을
            숫자로 정해 뒀습니다. 작업을 시작하기 전에 스타일을 먼저 정하고,
            끝나면 그대로 지켰는지 다시 검사합니다.
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
              text: "일을 받으면 가장 오래 걸리는 건 만드는 시간이 아니라 방향을 정하는 시간이었습니다. 참고할 화면을 모으고 고르는 일을 매번 처음부터 다시 했습니다.",
            },
            {
              label: "한 일",
              text: "실제로 운영 중인 서비스와 기업 사이트 1,538곳을 화면으로 하나씩 열어 보며 분류했습니다. 설명만 읽고 분류하면 기록이 틀어지기 때문입니다. 스타일마다 쓸 색, 요소를 놓을 자리, 그림자 세기, 사진 찍는 법, 그리고 하면 안 되는 것까지 숫자와 문장으로 적어 뒀습니다.",
            },
            {
              label: "결과",
              text: "스타일을 정하면 그 규칙대로 화면이 나옵니다. 아래 20벌은 전부 같은 시스템에서 스타일만 바꿔 만든 것입니다. 색만 바꾼 것이 아니라 깊이감, 그림자 세기, 여백 비율, 사진 쓰는 법이 전부 다릅니다.",
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
                아래 20벌을 <strong>화면에 깊이를 얼마나 줄 수 있는지</strong>로
                묶었습니다. 제 취향대로 고른 순서가 아니라 각 스타일의 규칙이
                정한 순서입니다.
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
                깊이를 줄 수 있는 스타일과, 일부러 납작하게 두는 것이 규칙인
                스타일은 애초에 다른 물건입니다. 전부 화려하게 만들면 스타일을
                정한 의미가 사라집니다. 화려하게 못 하는 것이 아니라 그 화면에서는
                하지 않는 것이 맞기 때문입니다.
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
              만들고 끝이 아니라
              <br />
              검사까지 합니다
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              {[
                [
                  "글씨가 읽히는지 자동으로 잽니다",
                  "배경색과 글자색 차이가 기준에 못 미치면 아예 만들어지지 않게 막아 뒀습니다. 색을 바꿔 가며 1,080가지 경우를 전부 검사했습니다. 예쁘지만 안 읽히는 화면은 나올 수 없습니다.",
                ],
                [
                  "만든 화면을 실제로 열어 봅니다",
                  "휴대폰 크기에서 화면이 옆으로 넘치지 않는지, 어두운 모드를 쓰는 분에게도 색이 그대로 나오는지, 움직임을 꺼 둔 분에게도 내용이 보이는지 확인합니다. 파일만 봐서는 절대 안 잡히는 것들입니다.",
                ],
                [
                  "이렇게 잡았습니다",
                  "떠다녀야 할 요소들이 전부 화면 밖으로 밀려나 있었고, 막대그래프가 선으로 찌그러져 있었고, 로고가 정한 크기보다 작게 나오고 있었습니다. 셋 다 코드만 봐서는 멀쩡해 보였고, 열어 보고 나서야 찾았습니다.",
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
          prev={{ href: "/work/gamsadam", label: "← 이전 · 감사담" }}
          next={{
            href: "/work/member-auth",
            label: "다음 · 자격 인증형 회원제 시스템 →",
          }}
        />
        <Footer marginTop={140} />
      </div>
    </div>
  );
}
