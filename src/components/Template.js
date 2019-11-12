import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import base from "../styles/style.scss";
import Header from "./Header";
import Footer from "./Footer";
import { menuItems } from "../utils/menuItems";
import "typeface-merriweather";
import "typeface-muli";

export const Template = ({ children }) => {
  return (
    <div>
      <Menu width={300} right>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.title}
          </Link>
        ))}
      </Menu>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Template;
