import dayjs from "dayjs";
import articles from "./article_list.json";

const publishedArticles = articles
  .filter((it) => it.published)
  .sort((a, b) => {
    return dayjs(b.updatedAt).diff(a.updatedAt, "day");
  });

export default publishedArticles;
