import type { CSSProperties } from "react";

type ImageBoxProps = {
  src?: string;
  alt: string;
  fit?: "cover" | "contain";
  containerStyle: CSSProperties;
};

export default function ImageBox({
  src,
  alt,
  fit = "cover",
  containerStyle,
}: ImageBoxProps) {
  return (
    <div style={{ background: "#F0F0F0", ...containerStyle }}>
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
