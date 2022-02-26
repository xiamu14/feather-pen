export interface Nav {
  key: string;
  title: string;
  children?: { key: string; title: string }[];
}

interface Props {
  title: string;
  description?: JSX.Element;
  blockquote?: JSX.Element;
  nav?: Nav[];
}

export default function PaperArticle(props: React.PropsWithChildren<Props>) {
  const { title, blockquote, nav, description } = props;

  return (
    <article className="article heti heti--classic">
      <h1 className="article__title">{title}</h1>
      {blockquote && <blockquote>{blockquote}</blockquote>}
      {nav && (
        <nav className="article__nav heti-skip">
          <details open>
            <summary>目录</summary>
            <ol>
              {nav.map((item) => {
                return (
                  <li key={item.key}>
                    <a href={`#${item.key}`}>{item.title}</a>
                    {item.children && (
                      <ul>
                        {item.children.map((it) => {
                          return (
                            <li key={it.key}>
                              <a href={`#${it.key}`}>{it.title}</a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ol>
          </details>
        </nav>
      )}
      {description}
      <hr></hr>
      {props.children}
    </article>
  );
}
