import { useState } from "react";
import Burger from "./Burger";
import MenuHeader from "./MenuHeader";

import logoImg from '../../img/icons/logo.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <img src={logoImg} alt="Logo" className="logo" />
          <Burger onClick={toggleMenu} />
          <MenuHeader isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;