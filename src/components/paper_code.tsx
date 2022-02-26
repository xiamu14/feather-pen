import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";
import style from "./paper.module.css";

interface Props {
  lang: "jsx" | "tsx" | "json" | "css" | "javascript" | "typescript";
  code: string;
}

export default function Code(props: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.code);
  };
  return (
    <div style={{ position: "relative" }}>
      <Highlight
        {...defaultProps}
        code={props.code}
        language={props.lang}
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
