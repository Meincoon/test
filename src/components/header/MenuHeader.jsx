import phoneImg from '../../img/icons/phone.svg';

function MenuHeader({ isMenuOpen }) {
  const menuClass = isMenuOpen ? "header__nav header__nav--open" : "header__nav";

  return (
    <nav className={menuClass}>
      <ul className="header__list">
        <li>
          <a className="header__link active" href="0">Главная</a>
        </li>
        <li>
          <a className="header__link" href="0">О нас</a>
        </li>
        <li>
          <a className="header__link" href="0">Контакты</a>
        </li>
        <li>
          <a className="header__link" href="0">Поиск</a>
        </li>
        <li>
          <a className="header__link header__link-number" href="0">
            <img className="header__link-phone" src={phoneImg} alt="phone" />+7 (987) 887-87
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MenuHeader;
