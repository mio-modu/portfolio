import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

export default function DetailNav({
  prev,
  next,
}: {
  prev: NavLink;
  next: NavLink;
}) {
  return (
    <nav
      style={{
        marginTop: 120,
        paddingTop: 24,
        borderTop: "1px solid #DEDEDE",
        display: "flex",
        justifyContent: "space-between",
        gap: 24,
        flexWrap: "wrap",
      }}
    >
      <Link href={prev.href} style={{ fontSize: 15, fontWeight: 500 }}>
        {prev.label}
      </Link>
      <Link href={next.href} style={{ fontSize: 15, fontWeight: 500 }}>
        {next.label}
      </Link>
    </nav>
  );
}
