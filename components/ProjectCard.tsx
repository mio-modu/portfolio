import Link from "next/link";
import ImageBox from "@/components/ImageBox";

type ProjectCardProps = {
  href: string;
  label: string;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  fit?: "cover" | "contain";
};

export default function ProjectCard({
  href,
  label,
  title,
  desc,
  imgSrc,
  imgAlt,
  fit = "cover",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <ImageBox
        src={imgSrc}
        alt={imgAlt}
        fit={fit}
        containerStyle={{ width: "100%", aspectRatio: "4/3" }}
      />
      <div
        style={{
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: ".2em",
          color: "#666666",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontWeight: 800,
          fontSize: "clamp(20px,2.2vw,30px)",
          lineHeight: 1.05,
          letterSpacing: "-.03em",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.6,
          color: "#333333",
        }}
      >
        {desc}
      </div>
    </Link>
  );
}
