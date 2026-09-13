import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "시안 4종",
  openGraph: {
    title: "시안 4종",
    images: ["/img/found-c-nonprofit.png"],
  },
};

const CONCEPTS = [
  {
    src: "/img/found-a-public.png",
    alt: "공공기관",
    label: "A — 공공기관",
    desc: "민원·공고 중심. 자주 찾는 서비스와 대표전화를 상단 가까이 올린 구성.",
  },
  {
    src: "/img/found-b-foundation.png",
    alt: "문화재단",
    label: "B — 문화재단",
    desc: "지원 실적을 수치로 먼저 보여주고, 지원사업을 사례 단위로 펼친 구성.",
  },
  {
    src: "/img/found-c-nonprofit.png",
    alt: "비영리단체",
    label: "C — 비영리단체",
    desc: "후원 전환이 목적. 모금 현황과 후원금 사용처를 같은 화면에서 확인.",
  },
  {
    src: "/img/found-d-culture.png",
    alt: "공공문화재단",
    label: "D — 공공문화재단",
    desc: "전시·공연 편집 콘텐츠를 전면에 둔 다크 톤 매거진형 구성.",
  },
];

export default function FoundationPage() {
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
        <DetailHeader label="05 / WEB" />

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
            시안 4종
          </h1>
          <p
            style={{
              fontWeight: 400,
              fontSize: "clamp(19px,2.2vw,26px)",
              lineHeight: 1.6,
              letterSpacing: "-.015em",
              color: "#1A1A1A",
              margin: "0 0 96px",
              maxWidth: 720,
            }}
          >
            비영리단체·공공기관을 대상으로 웹사이트 메인 시안 4종을 자체
            기획·제작했습니다. 기관 성격에 따라 톤과 정보 구조를 다르게
            설계했습니다.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "48px 24px",
              marginBottom: 96,
            }}
          >
            {CONCEPTS.map((c) => (
              <div
                key={c.label}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <ImageBox
                  src={c.src}
                  alt={c.alt}
                  fit="contain"
                  containerStyle={{ width: "100%", aspectRatio: "3/5" }}
                />
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: ".18em",
                    color: "#555555",
                  }}
                >
                  {c.label}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#222222",
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px 40px",
              paddingTop: 18,
              borderTop: "1px solid #0A0A0A",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px 20px",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: ".18em",
                color: "#555555",
              }}
            >
              <span>NEXT.JS</span>
            </div>
            <a
              href="https://foundation-site-eight.vercel.app/"
              target="_blank"
              rel="noopener"
              style={{
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: ".02em",
                whiteSpace: "nowrap",
              }}
            >
              foundation-site-eight.vercel.app ↗
            </a>
          </div>
        </section>

        <DetailNav
          prev={{ href: "/work/websites", label: "← 이전 · 홈페이지 제작" }}
          next={{ href: "/", label: "전체 목록 →" }}
        />

        <Footer marginTop={140} />
      </div>
    </div>
  );
}
