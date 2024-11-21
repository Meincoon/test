const Article = ({ category, date, title, text, type, image }) => {
  const baseClass = "article";

  const typeClass = type === "vertical" ? "article__vertical" : "";
  const imageClass = image ? "article__with-image" : "";

  const articleClass = `${baseClass} ${typeClass} ${imageClass}`.trim();

  const style = image && type === "vertical"
    ? { 
        backgroundImage: `url(${require(`../../img/images/${image}`)})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }
    : {};

  return (
    <article className={articleClass} style={style}>
      <p className="article__category">{category}</p>
      <p className="article__date">{date}</p>
      <h2 className="title article__title">{title}</h2>
      {text && <p className="article__txt">{text}</p>}
    </article>
  );
};

export default Article;