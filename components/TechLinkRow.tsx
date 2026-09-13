type TechLinkRowProps = {
  tech: string[];
  href: string;
  label: string;
};

export default function TechLinkRow({ tech, href, label }: TechLinkRowProps) {
  return (
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
        {tech.map((t) => (
          <span key={t} style={{ whiteSpace: "nowrap" }}>
            {t}
          </span>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        style={{
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: ".02em",
          whiteSpace: "nowrap",
        }}
      >
        {label} ↗
      </a>
    </div>
  );
}
