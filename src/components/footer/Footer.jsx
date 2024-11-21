import logoImg from '../../img/icons/logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <img className="logo footer__logo" src={logoImg} alt="Logo" />
      <ul className="footer__items" >
        <li><a href="0">О нас</a></li>
        <li><a href="0">Галерея</a></li>
        <li><a href="0">Новости</a></li>
        <li><a href="0">Контакты</a></li>
      </ul>
      <small className="footer__copy" >ООО “Организация” 2020. Все права защищены</small>
    </footer>
  );
}

export default Footer;
