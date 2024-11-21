import ArticleRow from './ArticleRow';

const ArticlesSection = ({ data }) => {
  const rows = data.reduce((acc, article) => {
    acc[article.rowType] = acc[article.rowType] || [];
    acc[article.rowType].push(article);
    return acc;
  }, {});

  const filteredRows = Object.entries(rows).filter(([rowType]) => {
    if (window.innerWidth <= 1024) {
      return rowType === 'row1' || rowType === 'row2' || rowType === 'row3';
    }
    return true; 
  });

  return (
    <section className="container articles">
      {filteredRows.map(([rowType, articles]) => (
        <ArticleRow key={rowType} rowType={rowType} articles={articles} />
      ))}
    </section>
  );
};

export default ArticlesSection;