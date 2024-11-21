import ArticlesSection from './ArticlesSection'
import Pagination from './Pagination'
import rectangle from '../../img/images/Rectangle2.jpg'

const articleData = [
  {
    id: 1,
    category: "Категория 1",
    date: "13 дек 2020",
    title: "Управление ИТ-активами – скучная рутина или творческая задача?",
    text: "Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. ",
    rowType: "row1",
    type: "full",
    image: null,
  },
  {
    id: 2,
    category: "Категория 1",
    date: "13 дек 2020",
    title: "Управление ИТ-активами – скучная рутина или творческая задача?",
    text: 'Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. ',
    rowType: "row2",
    type: "full",
    image: null,
  },
  {
    id: 3,
    category: "Категория 1",
    date: "13 дек 2020",
    title: "ITAM&SAMDay – самая настоящая удача!",
    text: null,
    rowType: "row2",
    type: "vertical",
    image: null,
  },
  {
    id: 4,
    category: "Очень длинная категория 2",
    date: "13 дек 2020",
    title: "Управление ИТ-активами – скучная рутина или творческая задача?",
    text: null,
    rowType: "row3",
    type: "vertical",
    image: "Rectangle1.jpg",
  },
  {
    id: 5,
    category: "Категория 1",
    date: "13 дек 2020",
    title: "Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ...",
    text: null,
    rowType: "row3",
    type: "dual",
    image: null,
  },
  {
    id: 6,
    category: "Категория 1",
    date: "13 дек 2020",
    title: "ITAM&SAMDay – самая настоящая удача!",
    text: null,
    rowType: "row3",
    type: "dual",
    image: null,
  },
  {
    id: 7,
    category: "Категория 1",
    date: "13 дек 2020",
    title: "Управление ИТ-активами – скучная рутина или творческая задача?",
    text: 'Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. ',
    rowType: "row4",
    type: "full",
    image: null,
  },
  {
    id: 8,
    category: "Очень длинная категория 2",
    date: "13 дек 2020",
    title: "ITAM&SAMDay – самая настоящая удача!",
    text: null,
    rowType: "row4",
    type: "vertical",
    image: null,
  },
  {
    id: 9,
    category: "Категория 1",
    date: "13 дек 2020",
    title: "ITAM&SAMDay – самая настоящая удача!",
    text: null,
    rowType: "row5",
    type: "vertical",
    image: "Rectangle2.jpg",
  },
  {
    id: 10,
    category: "Категория 1",
    date: "13 дек 2020",
    title: "Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ...",
    text: null,
    rowType: "row5",
    type: "dual",
    image: null,
  },
  {
    id: 11,
    category: "Очень длинная категория 2",
    date: "13 дек 2020",
    title: "ITAM&SAMDay – самая настоящая удача!",
    text: null,
    rowType: "row5",
    type: "dual",
    image: null,
  },
];

function Main() {
  return (
    <main className="main">
      <ArticlesSection data={articleData} />
      <Pagination />
    </main>
  );
}

export default Main;
