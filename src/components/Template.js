import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import base from "../../styles/style.scss";
import Header from "./header";
import Footer from "./footer";
import { menuItems } from "../../utils/menuItems";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = "/";
    if (typeof __PREFIX_PATHS__ !== "undefined" && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + "/";
    }

    const hideMusic = location.pathname === "/websites";
    const hideDigital = location.pathname === "/music";

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
        <Footer hideDigital={hideDigital} hideMusic={hideMusic} />
      </div>
    );
  }
}

export default Template;
