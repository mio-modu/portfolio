type CaseRow = {
  label: string;
  text: string;
};

export default function CaseSection({ rows }: { rows: CaseRow[] }) {
  return (
    <div
      className="stack-mobile"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)",
        gap: "48px 64px",
        marginBottom: 96,
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
        Case
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
        {rows.map((row) => (
          <div
            key={row.label}
            className="stack-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "88px minmax(0,1fr)",
              gap: 24,
              paddingTop: 14,
              borderTop: "1px solid #DEDEDE",
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
              {row.label}
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
              {row.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
