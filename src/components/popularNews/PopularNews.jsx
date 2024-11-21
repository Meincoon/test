
function PopularNews() {
  return (
    <div className="container popularNews">
      <h2 className="title popularNews__title">Популярные новости</h2>
      <div className="popularNews__wrapper">
        <div className="popularNews__news">
          <p className="popularNews__txt">ITAM&SAMDay – самая настоящая удача!</p>
          <p className="popularNews__date popularNews__date-active">13 дек 2020</p>
        </div>
        <hr className="popularNews__hr"/>
        <div className="popularNews__news">
          <p className="popularNews__txt">Секреты лицензирования. Всё, что вы хотели знать про Microsoft, SAP и Oracle, но не знали, у кого спросить ...</p>
          <p className="popularNews__date">10 дек 2020</p>
        </div>
        <hr className="popularNews__hr"/>
        <div className="popularNews__news">
          <p className="popularNews__txt">Менеджмент XXI века. Надо ли готовиться к изменениям или мы давно уже должны были измениться?</p>
          <p className="popularNews__date">5 дек 2020</p>
        </div>
      </div>
    </div>
  );
}

export default PopularNews;
