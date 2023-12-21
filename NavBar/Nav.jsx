import React from "react";
import style from "./nav.module.css";
import Logo from "./Logo"
import Menu from "./Menu"
const Nav = () => {
  return (
    <nav className={style.nav}>
      <Logo />
      <Menu />
    </nav>
  );
};

export default Nav;
