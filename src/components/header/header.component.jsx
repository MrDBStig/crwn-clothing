import "./header.styles.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </header>
);

export default Header;
