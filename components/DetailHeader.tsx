import Link from "next/link";
import { HOME_LABEL } from "./brand";

export default function DetailHeader({ label }: { label: string }) {
  return (
    <header style={{ paddingTop: 40 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 24,
          paddingBottom: 22,
          borderBottom: "1px solid #0A0A0A",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: ".34em",
            textTransform: "uppercase",
          }}
        >
          {HOME_LABEL}
        </Link>
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: ".34em",
            textTransform: "uppercase",
            color: "#8A8A8A",
          }}
        >
          {label}
        </div>
      </div>
    </header>
  );
}
