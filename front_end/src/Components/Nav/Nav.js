/* import { MenuItems } from "./MenuItems"; */
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faHome,
  faHistory,
  faUserCircle,
  faHeart,
  faSignOutAlt,
  faUserAlt,
  faTools,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ logo, openMobileMenu, handleMobileMenuOpen, user, logout }) => {
  const handleLogout = () => {
    if (user["user"]) {
      logout();
    } else {
      return false;
    }
  };
  return (
    <nav className="nav-wrapper">
      <div className="main-nav">
        <div
          className="brand-wrapper"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img className="brand-img" src={logo} alt="Lyriko Logo" />
          <span className="brand-name-nav">Lyriko</span>
        </div>

        <div className="nav-links-wrapper">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/watchlist" onClick={() => handleMobileMenuOpen()}>
                <span className="nav-link-item">
                  <FontAwesomeIcon className="nav-link-icon" icon={faHeart} />
                  Watchlist
                </span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/history" onClick={() => handleMobileMenuOpen()}>
                <span className="nav-link-item">
                  <FontAwesomeIcon className="nav-link-icon" icon={faHistory} />
                  History
                </span>
              </Link>
            </li>
            <li className="nav-account">
              <Link
                to={!user["user"] ? "/login" : ""}
                className="nav-account-item"
                onClick={() => handleMobileMenuOpen()}
              >
                <FontAwesomeIcon
                  className="nav-account-icon"
                  icon={faUserCircle}
                />
                {user["user"] ? ` ${user.user.username}` : "Login"}
              </Link>
              {user["user"] ? (
                <div className="sub-acct-menu">
                  <ul className="drop-sub-acct-menu">
                    <li onClick={() => logout()}>
                      <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </li>
                    <li>
                      <Link to="/user/account">
                        <FontAwesomeIcon icon={faTools} /> Account
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
          <div className="menu-bars">
            {openMobileMenu ? (
              <FontAwesomeIcon onClick={handleMobileMenuOpen} icon={faTimes} />
            ) : (
              <FontAwesomeIcon onClick={handleMobileMenuOpen} icon={faBars} />
            )}
          </div>
        </div>
      </div>

      <div
        className={openMobileMenu ? "mobile-menu open" : "mobile-menu close"}
      >
        <ul
          className={
            openMobileMenu ? "nav-links-mobile open" : "nav-links-mobile close"
          }
        >
          <li className="nav-link-mobile">
            <Link to="/watchlist" onClick={() => handleMobileMenuOpen()}>
              <span className="nav-link-item-mobile">
                <FontAwesomeIcon
                  className="nav-link-icon-mobile"
                  icon={faHeart}
                />
                Watchlist
              </span>
            </Link>
          </li>
          <li className="nav-link-mobile">
            <Link to="/history" onClick={() => handleMobileMenuOpen()}>
              <span className="nav-link-item-mobile">
                <FontAwesomeIcon
                  className="nav-link-icon-mobile"
                  icon={faHistory}
                />
                History
              </span>
            </Link>
          </li>
          {user["user"] ? (
            <li className="nav-link-mobile bottom">
              <Link
                to="/user/account"
                className="nav-link-item-mobile"
                onClick={() => handleMobileMenuOpen()}
              >
                <FontAwesomeIcon
                  className="nav-link-icon-mobile"
                  icon={faTools}
                />
                Account
              </Link>
            </li>
          ) : (
            ""
          )}

          <li className="nav-link-mobile bottom">
            <Link
              to={!user["user"] ? "/login" : ""}
              className="nav-link-item-mobile"
              onClick={() => {
                handleLogout();
                handleMobileMenuOpen();
              }}
            >
              <FontAwesomeIcon
                className="nav-link-icon-mobile"
                icon={faUserCircle}
              />
              {user["user"] ? `Logout ${user.user.username}` : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
