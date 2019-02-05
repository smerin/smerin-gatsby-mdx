import React from "react";
import { Link } from "gatsby";
import style from "./main-menu.module.scss";
import { menuItems } from "../../utils/menuItems";

const MainMenu = () => (
  <nav role="navigation">
    <ul className={style.mainMenu}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default MainMenu;
