import React from "react";
import { Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import style from "./Header.module.scss";

const Header = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gs-logo.png" }) {
        childImageSharp {
          fixed(width: 170, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContent}>
          <div className={style.headerLogo}>
            <Link to="/">
              <Img
                fixed={logo.childImageSharp.fixed}
                alt="George Smerin logo"
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
