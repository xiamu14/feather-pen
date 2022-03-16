import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  metadata?: { w: number; h: number };
  width?: string;
  height?: string;
  border?: boolean | string;
  alt?: string;
  scale?: string;
}

export default function Picture(props: Props) {
  const { src, border = false, alt = "illustration", scale = "0.96" } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const [renderSize, setRenderSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (boxRef.current) {
      const originalWidth =
        props.metadata?.w ?? parseInt(props.width ?? "", 10);
      const originalHeight =
        props.metadata?.h ?? parseInt(props.height ?? "", 10);
      const width = Math.floor(boxRef.current.clientWidth * parseFloat(scale));
      const height = Math.floor(
        (width * (originalHeight as number)) / (originalWidth as number)
      );

      setRenderSize({ width, height });
    }
  }, [props, scale]);

  return (
    <div
      ref={boxRef}
      style={{
        width: "96%",
        marginLeft: "2%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: border && border !== "false" ? "1px solid #ededed" : "none",
      }}
    >
      <NextImage src={src} alt={alt} {...renderSize} />
    </div>
  );
}
