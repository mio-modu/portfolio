import type { CSSProperties } from "react";

type ImageBoxProps = {
  src?: string;
  alt: string;
  fit?: "cover" | "contain";
  containerStyle: CSSProperties;
  className?: string;
};

export default function ImageBox({
  src,
  alt,
  fit = "cover",
  containerStyle,
  className,
}: ImageBoxProps) {
  return (
    <div
      className={className}
      style={{ background: "#F0F0F0", overflow: "hidden", ...containerStyle }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: fit,
            display: "block",
          }}
        />
      ) : null}
    </div>
  );
}
