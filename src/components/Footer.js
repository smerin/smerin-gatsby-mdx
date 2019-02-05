import React from "react";
import { Link } from "gatsby";
import MainMenu from "./main-menu";
import MobileMenu from "./mobile-menu";
import {
  EmailButton,
  LinkedinButton,
  InstagramButton,
  YoutubeButton,
  FacebookButton,
  TwitterButton
} from "../shared/buttons";
import style from "./footer.module.scss";

const Footer = ({ hideDigital, hideMusic }) => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <h2>Keep in touch</h2>

        {/* {!hideMusic && (
          <div className={style.buttons}>
            <h3>Music videos and updates</h3>
            <YoutubeButton />
            <FacebookButton />
            <InstagramButton />
          </div>
        )} */}
        {!hideDigital && (
          <div className={style.buttons}>
            {/* <h3>Web development enquiries</h3> */}
            <h3>Call me on 07887 868522 or try one of these:</h3>
            <EmailButton />
            <LinkedinButton />
            <TwitterButton />
          </div>
        )}
        <div className={style.credits}>
          This website built with ❤️ in <a href="https://reactjs.org/">React</a>
          , <a href="https://www.gatsbyjs.org/">Gatsby</a> and{" "}
          <a href="https://www.contentful.com/">Contentful</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
