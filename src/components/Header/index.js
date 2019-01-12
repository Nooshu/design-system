import React from "react";

import logo from "./logo.svg";

import "./index.css";

const Header = ({ menu, search }) => (
  <header className="Header">
    <a href="#main" className="Header-skipLink">
      {`Skip to content`}
    </a>
    <a className="Header-logo" href="http://www.barnardos.org.uk/">
      <img
        alt="Believe in children Barnardo’s"
        className="Header-logoInner"
        src={logo}
      />
    </a>
    {search && <div className="Header-search">{search}</div>}
    {menu && <div className="Header-menu">{menu}</div>}
  </header>
);

export default Header;
