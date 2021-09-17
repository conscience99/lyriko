import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHistory,
  faHeart,
  faLink,
  faBookOpen,
  faFire,
  faInfo,
  faUser,
  faSignOutAlt,
  faSignInAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
const Footer = ({ logo, user, logout }) => {
  let text =
    " Lyriko is just another music lyrics\nprovider, but with little differnece.\nLyriko allows you to find lyrics of\nalmost any song, which is quite\nusual, but also allows you to add\nlyrics to your watchlist to view later,\nexport to pdf and also copy to\nclipboard very easily! Lyriko also logs\nyour history so you can get back\nto your viewed lyrics later with ease!";
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="about-brand">
          <div className="_brand">
            <div className="about-text">
              <div className="abt-brd-wrap">
                <img className="brand-logo" src={logo} />
                <span className="brand-name">Lyriko</span>
              </div>
              <p className="about-txt">
                {text} <span className="abt-txt-rdmr">Read more</span>
              </p>
            </div>
          </div>
        </div>
        <div className="useful-links">
          <h3 className="useful-link-txt">
            Useful Links <FontAwesomeIcon icon={faLink} />
          </h3>
          <div className="footer-links-wraper">
            <ul className="footer-link">
              <li className="footer-link-item">
                <Link to="/walkthrough">
                  <FontAwesomeIcon
                    className="footer-link-icon"
                    icon={faBookOpen}
                  />
                  Walk through
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/watchlist">
                  <FontAwesomeIcon
                    className="footer-link-icon"
                    icon={faHeart}
                  />
                  Watchlist
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/history">
                  <FontAwesomeIcon
                    className="footer-link-icon"
                    icon={faHistory}
                  />
                  History
                </Link>
              </li>

              <li className="footer-link-item">
                <Link to="/contact">
                  <FontAwesomeIcon className="footer-link-icon" icon={faUser} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">Lyrico 2021&copy;</p>
          <p className="maker">
            Made with{" "}
            <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> by
            Conscience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
