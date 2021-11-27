import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import {
  menuButton,
  responsive,
  icon,
  navLinks,
  navLinkItem,
  navLinkText,
  social_logos,
  footerText,
  logo,
  gatsby,
  footerStyle,
} from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ pageTitle, children }) => {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <title>{pageTitle}</title>
        <div className={icon}>
          <button className={menuButton} onClick={handleOnClick}>
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              style={{ color: "#21243D" }}
            />{" "}
          </button>
        </div>
      <nav>
        <ul
          className={`${navLinks} ${clicked ? responsive : ""}`}
          id="displayNav"
        >
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
      <div>{children}</div>
      <footer className={footerStyle}>
        <div>
          <div className={social_logos}>
            <a
              href="https://www.linkedin.com/in/sabri-trabelsi-43b181208/"
              className={logo}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/sabri.trabelsi.754703/"
              className={logo}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/home?lang=en" className={logo}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/" className={logo}>
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
