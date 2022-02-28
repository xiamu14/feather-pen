import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  metadata: { w: number; h: number };
  border?: boolean;
  alt?: string;
}

export default function Picture(props: Props) {
  const { src, metadata, border = false, alt = "illustration" } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const [renderSize, setRenderSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (boxRef.current) {
      const width = Math.floor(boxRef.current.clientWidth * 0.96);
      const height = Math.floor((width * metadata.h) / metadata.w);

      setRenderSize({ width, height });
    }
  }, [metadata.h, metadata.w]);

  return (
    <div
      ref={boxRef}
      style={{
        width: "96%",
        marginLeft: "2%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: border ? "1px solid #ededed" : "none",
      }}
    >
      <NextImage src={src} alt={alt} {...renderSize} />
    </div>
  );
}
