import Article from './Article'

const ArticleRow = ({ rowType, articles }) => {
  const rowClass = `articles__row ${rowType === "vertical" ? "articles__row-vertical" : ""}`;

  const groupedArticles = [];
  let dualsGroup = [];

  articles.forEach((article, index) => {
    if (article.type === "dual") {
      if (dualsGroup.length === 1) {
        dualsGroup.push(article);
        groupedArticles.push(dualsGroup); 
        dualsGroup = []; 
      } else {
        dualsGroup.push(article); 
      }
    } else {
      if (dualsGroup.length > 0) {
        groupedArticles.push(dualsGroup); 
        dualsGroup = [];
      }
      groupedArticles.push([article]);
    }
  });

  if (dualsGroup.length > 0) {
    groupedArticles.push(dualsGroup);
  }

  return (
    <div className={rowClass}>
      {groupedArticles.map((group, idx) => (
        group.length === 1 ? (
          <Article key={group[0].id} {...group[0]} />
        ) : (
          <div key={group[0].id} className="articles__row-dual-container">
            {group.map((article) => (
              <Article key={article.id} {...article} />
            ))}
          </div>
        )
      ))}
    </div>
  );
};


export default ArticleRow;