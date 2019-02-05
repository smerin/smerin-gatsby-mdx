import React from "react";
import { Link } from "gatsby";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContent}>
          <div className={style.headerLogo}>
            <Link to="/">
              <img
                src="/gs-logo.png"
                alt="George Smerin"
                width="170"
                height="170"
              />
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
