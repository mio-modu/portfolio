import type { Metadata } from "next";
import DetailHeader from "@/components/DetailHeader";
import DetailNav from "@/components/DetailNav";
import ImageBox from "@/components/ImageBox";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "홈페이지 제작",
  openGraph: {
    title: "홈페이지 제작",
    images: ["/img/site-qsarang.png"],
  },
};

const SITES = [
  {
    src: "/img/site-qsarang.png",
    alt: "큐사랑 메인 화면",
    label: "01 — 미용실 · 염색전문점",
    name: "큐사랑",
    desc: "시술 메뉴와 가격, 예약 연락처를 한 화면에서 확인할 수 있게 구성했습니다.",
    href: "https://qsarang-sangdae.vercel.app/",
    linkLabel: "qsarang-sangdae.vercel.app",
  },
  {
    src: "/img/site-hanbok.png",
    alt: "우아한한복 메인 화면",
    label: "02 — 한복 대여",
    name: "우아한한복대여점",
    desc: "대여 품목을 눈으로 먼저 고르는 업종이라, 의상 이미지를 크게 쓰고 대여 절차를 그 아래에 붙였습니다.",
    href: "https://wooahan-hanbok.vercel.app/",
    linkLabel: "wooahan-hanbok.vercel.app",
  },
  {
    src: "/img/site-brownie.png",
    alt: "그린브라우니 메인 화면",
    label: "03 — 카페",
    name: "그린브라우니",
    desc: "메뉴와 매장 분위기, 위치·영업시간을 중심으로 방문을 유도하는 구성.",
    href: "https://green-brownie.vercel.app/",
    linkLabel: "green-brownie.vercel.app",
  },
];

export default function WebsitesPage() {
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
        <DetailHeader label="04 / CLIENT WORK" />

        <section style={{ paddingTop: 120 }}>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(40px,9vw,140px)",
              lineHeight: 0.9,
              letterSpacing: "-.05em",
              margin: "0 0 40px",
            }}
          >
            홈페이지 제작
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
            소규모 사업장을 대상으로 홈페이지를 기획·제작해 납품했습니다.
            업종에 맞춰 첫 화면에서 무엇을 보여줄지부터 다르게 설계했습니다.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 96,
              marginBottom: 96,
            }}
          >
            {SITES.map((site) => (
              <div
                key={site.name}
                className="stack-mobile"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,7fr) minmax(0,5fr)",
                  gap: "32px 48px",
                  alignItems: "start",
                }}
              >
                <ImageBox
                  src={site.src}
                  alt={site.alt}
                  fit="cover"
                  containerStyle={{ width: "100%", aspectRatio: "16/10" }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: ".24em",
                      color: "#666666",
                      marginBottom: 16,
                    }}
                  >
                    {site.label}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(26px,3.4vw,40px)",
                      lineHeight: 1.05,
                      letterSpacing: "-.035em",
                      marginBottom: 20,
                    }}
                  >
                    {site.name}
                  </div>
                  <p
                    style={{
                      margin: "0 0 24px",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1.8,
                      color: "#222222",
                    }}
                  >
                    {site.desc}
                  </p>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener"
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {site.linkLabel} ↗
                  </a>
                </div>
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
              <span>VERCEL</span>
              <span>기획 · 제작 · 납품</span>
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
              3 SITES · 운영 중
            </div>
          </div>
        </section>

        <DetailNav
          prev={{ href: "/work/gamsadam", label: "← 이전 · 감사담" }}
          next={{ href: "/work/foundation", label: "다음 · 시안 4종 →" }}
        />

        <Footer marginTop={140} />
      </div>
    </div>
  );
}
