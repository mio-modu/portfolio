import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_TITLE } from "@/components/brand";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lumain-portfolio.vercel.app"
  ),
  title: SITE_TITLE,
  description:
    "AI 서비스 기획부터 개발, 배포까지 원스톱으로 해내는 1인 스타트업 대표 겸 웹 개발자",
  openGraph: {
    title: SITE_TITLE,
    description:
      "AI 서비스 기획부터 개발, 배포까지 원스톱으로 해내는 1인 스타트업 대표 겸 웹 개발자",
    images: ["/img/hero-slab.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
