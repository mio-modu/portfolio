import { WORDMARK, BRAND_KO } from "./brand";

type FooterProps = {
  marginTop: number;
  showName?: boolean;
};

export default function Footer({ marginTop, showName = false }: FooterProps) {
  return (
    <footer
      className="stack-mobile"
      style={{
        marginTop,
        paddingTop: 24,
        borderTop: "1px solid #0A0A0A",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: 40,
      }}
    >
      <div
        style={{
          fontWeight: 800,
          fontSize: "clamp(30px,6vw,76px)",
          lineHeight: 0.94,
          letterSpacing: "-.045em",
        }}
      >
        {WORDMARK}
      </div>
      {showName && BRAND_KO ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 15,
            fontWeight: 400,
            letterSpacing: ".02em",
            color: "#333333",
            alignSelf: "end",
          }}
        >
          <span style={{ whiteSpace: "nowrap" }}>{BRAND_KO}</span>
        </div>
      ) : null}
    </footer>
  );
}
