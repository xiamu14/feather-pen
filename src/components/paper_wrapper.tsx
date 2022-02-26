import React, { useEffect } from "react";
import pangu from "pangu";

export default function PaperWrapper(props: React.PropsWithChildren<{}>) {
  useEffect(() => {
    pangu.autoSpacingPage(); // 自动进行中西文混排美化
  }, []);
  return <main className="container paper-wrapper">{props.children}</main>;
}
