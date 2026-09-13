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
              margin: "0 0 64px",
              maxWidth: 720,
            }}
          >
            상품 사진만 올리면 AI가 모델·의상·배경을 자동 코디해 착용컷을
            생성합니다.
          </p>

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
                text: "상품마다 모델 촬영을 붙이면 비용과 일정이 감당되지 않는다.",
              },
              {
                label: "해결",
                text: "상품 사진 한 장을 입력으로 받아 모델·의상·배경을 자동 코디해 착용컷을 생성하는 파이프라인을 구성.",
              },
              {
                label: "결과",
                text: "이미지 1건당 생성 원가 70~80원 수준까지 최적화.",
              },
            ]}
          />

          <ImageBox
            src="/img/modelcut-workspace.png"
            alt="작업 화면"
            fit="cover"
            containerStyle={{
              width: "100%",
              aspectRatio: "16/9",
              marginBottom: 96,
            }}
          />

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
