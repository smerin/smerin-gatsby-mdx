import React from "react";
import { Link } from "gatsby";
import MainMenu from "./main-menu";
import MobileMenu from "./mobile-menu";
import style from "./header.module.scss";

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
