import React from "react";
import { Link } from "gatsby";
import {
  navLinks,
  navLinkItem,
  navLinkText,
  footerStyle,
  social_logos,
  footerText,
  logo,
  gatsby,
} from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/works" className={navLinkText}>
              Works
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footerStyle}>
        <div>
          <div className={social_logos}>
            <a href="https://www.youtube.com/c/jamesqquick" className={logo}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/learnbuildteach/"
              className={logo}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className={logo}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/learnbuildteach"
              className={logo}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className={footerText}>
            © {new Date().getFullYear()}, Built with
            <span>
              <a href="https://www.gatsbyjs.org" className={gatsby}>
                Gatsby
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
