import Highlight, { defaultProps } from "prism-react-renderer";
//@ts-ignore
import Prism from "prism-react-renderer/prism";
import theme from "prism-react-renderer/themes/github";
import React from "react";
import style from "./paper.module.css";
//@ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-dart");

interface Props {
  lang: "jsx" | "tsx" | "json" | "css" | "javascript" | "typescript" | "dart";
  code: string;
}

export default function Code(props: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.code);
  };
  return (
    <div className={style["paperCodeBox"]}>
      <Highlight
        {...defaultProps}
        code={props.code}
        language={props.lang as any}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
      <button className={style["btnCopy"]} onClick={handleCopy}>
        复制
      </button>
    </div>
  );
}
