/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var url_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(43);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(44);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(152);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _Nav_Nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var _RequestForm_RequestForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);
/* harmony import */ var _Lyrics_Lyrics_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63);
/* harmony import */ var _Recent_Recent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(141);
/* harmony import */ var _Trending_Trending_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(142);
/* harmony import */ var _Auth_Account_AccountSettings_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(143);
/* harmony import */ var _Auth_Account_ForgotPassword_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(144);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64);
/* harmony import */ var _Auth_Login_Login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(145);
/* harmony import */ var _Auth_SignUp_SignUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(146);
/* harmony import */ var _History_History_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(147);
/* harmony import */ var _Watchlist_Watchlist_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(148);
/* harmony import */ var _Lyrics_Lyrics1_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(149);
/* harmony import */ var _Auth_Verify_Verify_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(150);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59);
/* harmony import */ var _Auth_Account_ChangePassword_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(151);


























function App() {
  const [openMobileMenu, setOpenMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lyrics, setLyrics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [trending, setTrending] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [recent, setRecent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [notFound, setNotFound] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [token, setToken, removeToken] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_21__["default"])(["auth"]);
  const [user, setUser, removeUser] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_21__["default"])(["user"]);
  const [is_athenticated, setIs_authenticated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [is_verified, setIs_verified] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [watchlist, setWatchlist] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [watchlisted, setWatchlisted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lyricsLoading, setLyricsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [historyLoading, setHistoryLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [watchlistLoading, setWatchlistLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [trendingLoading, setTrendingLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const logo = "https://i.ibb.co/4jqQHc2/logo.png";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    checkUserVerified();
    getTrending();
    getRecent();
    getRandomLyrics();
    checkAuth();
    getHistory();
    requestUser();
  }, [token["token"]]);

  const requestUser = () => {
    if (token["auth"] !== undefined) {
      fetch("https://lyrik0.herokuapp.com/api/user", {
        headers: {
          Authorization: `Token ${token["auth"]}`
        }
      }).then(res => res.json()).then(res => {
        setUser("user", res["user"]);
      });
    }
  };

  const checkAuth = () => {
    if (token["auth"] !== undefined || user["user"] !== undefined) {
      setIs_authenticated(true);
    } else {
      setIs_authenticated(false);
    }
  };

  const checkUserVerified = () => {
    if (user["user"]) {
      if (user["user"].is_verified) {
        if (user["user"].is_verified === true) {
          setIs_verified(true);
        } else if (user["user"].is_verified === false) {
          setIs_verified(false);
        }
      }
    }
  };

  const handleVerify = () => {
    setIs_verified(true);
  };

  const checkWatchlist = () => {
    if (lyrics) {
      if (is_athenticated) {
        fetch("https://lyrik0.herokuapp.com/api/checksavelist/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token["auth"]}`
          },
          body: JSON.stringify({
            lyrics_id: lyrics["id"]
          })
        }).then(res => res.json()).then(res => {
          setWatchlisted(res.watchlisted);
        });
      } else {
        return false;
      }
    }
  };

  checkWatchlist();

  const getRecent = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://lyrik0.herokuapp.com/api/recent", {
        method: "GET"
      }).then(recent => recent.json()).then(recent => {
        setRecent(recent.recent);
        setLoading(false);
      });
    }, 2000);
  };

  const getTrending = () => {
    setTrendingLoading(true);
    setTimeout(() => {
      fetch("https://lyrik0.herokuapp.com/api/trending", {
        method: "GET"
      }).then(trending => trending.json()).then(trending => {
        setTrending(trending.top);
        setLoading(false);
        setTrendingLoading(false);
      });
    }, 3000);
  };

  const getRandomLyrics = () => {
    setLyricsLoading(true);
    setTimeout(() => {
      fetch("https://lyrik0.herokuapp.com/api/random", {
        method: "get"
      }).then(lyrics => lyrics.json()).then(lyrics => {
        setLyrics(lyrics.lyrics);
        document.title = `${lyrics.lyrics.title} - ${lyrics.lyrics.artist} - Lyriko`;
        setNotFound(false);
        setLyricsLoading(false);
      });
    }, 1000);
  };

  const getLyrics = (artist, title) => {
    const artistSlug = (0,url_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(artist);
    const titleSlug = (0,url_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
    setLyricsLoading(true);
    setTimeout(() => {
      fetch(`https://lyrik0.herokuapp.com/api/lyrics/${artistSlug}/${titleSlug}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          artist: artist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
          title: title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
          username: user["user"] ? user["user"].username : ""
        })
      }).then(res => res.json()).then(res => {
        if (res.error) {
          setNotFound(true);
          setLyrics();
        } else {
          setLyrics(res.lyrics);
          document.title = `${res.lyrics.title} - ${res.lyrics.artist} - Lyriko`;
          setNotFound(false);
          setLyricsLoading(false);
        }
      });
    }, 1000);
  };

  const logoutHandler = () => {
    removeUser("user");
    removeToken("auth");
    setIs_authenticated(false);
    window.location.href = "/login";
  };

  const getHistory = () => {
    setHistoryLoading(true);
    setTimeout(() => {
      if (token["auth"] !== undefined) {
        fetch(`https://lyrik0.herokuapp.com/api/search-history`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token["auth"]}`
          }
        }).then(res => res.json()).then(res => {
          setHistory(res.search_history);
          setHistoryLoading(false);
        });
      } else {
        setHistoryLoading(false);
        return false;
      }
    }, 1000);
  };

  const getWatchlist = () => {
    setWatchlistLoading(true);
    setTimeout(() => {
      if (token["auth"] !== undefined) {
        fetch("https://lyrik0.herokuapp.com/api/lyrics/savelist/", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token["auth"]}`
          }
        }).then(lyrics => lyrics.json()).then(lyrics => {
          setWatchlist(lyrics.lyrics);
          console.log(lyrics.lyrics);
          setWatchlistLoading(false);
        });
      } else {
        setWatchlistLoading(false);
        return false;
      }
    }, 1000);
  };

  const addWatchList = lyrics_id => {
    if (is_athenticated) {
      fetch("https://lyrik0.herokuapp.com/api/lyrics/savelist/add/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token["auth"]}`
        },
        body: JSON.stringify({
          lyrics_id: lyrics_id
        })
      }).then(res => res.json()).then(res => {
        if (!res.Error) {
          setWatchlist(res.save_list);
        }
      });
    } else {
      window.location.href = "/login";
    }
  };

  const removeWatchlist = lyrics_id => {
    if (is_athenticated) {
      fetch("https://lyrik0.herokuapp.com/api/lyrics/savelist/remove/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token["auth"]}`
        },
        body: JSON.stringify({
          lyrics_id: lyrics_id
        })
      }).then(res => res.json()).then(res => {
        if (!res.Error) {
          setWatchlist(res.save_list);
        }
      });
    } else {
      window.location.href = "/login";
    }
  };

  const handleMobileMenuOpen = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toast_notifications__WEBPACK_IMPORTED_MODULE_12__.ToastProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Nav_Nav_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleMobileMenuOpen: handleMobileMenuOpen,
    openMobileMenu: openMobileMenu,
    logo: logo,
    is_athenticated: is_athenticated,
    user: user,
    logout: logoutHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "middle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    path: "/",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "middle-wrap"
    }, token["auth"] !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, user["user"].is_verified === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "_alert_not_verified"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_24__.faExclamationTriangle
    }), " ", "Your email is not yet verified.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
      to: "/user/auth/verify"
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "vlink"
    }, " ", "Click to verify")))) : "") : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "request-form-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RequestForm_RequestForm_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      openMobileMenu: openMobileMenu,
      getLyrics: getLyrics,
      random: getRandomLyrics,
      token: token
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "main"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "m-l-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Lyrics_Lyrics_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      lyrics: lyrics,
      notFound: notFound,
      random: getRandomLyrics,
      removeWatchlist: removeWatchlist,
      addWatchlist: addWatchList,
      watchlisted: watchlisted,
      lyricsLoading: lyricsLoading
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "m-t-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trending_Trending_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      getLyrics: getLyrics,
      trending: trending,
      loading: trendingLoading
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "m-r-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Recent_Recent_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      getLyrics: getLyrics,
      recent: recent,
      loading: loading
    }))))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    path: "/signup",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Auth_SignUp_SignUp__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setToken: setToken,
      setUser: setUser,
      token: token,
      handleVerify: handleVerify
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    path: "/history",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_History_History_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      history: history,
      user: user,
      getLyrics: getLyrics,
      getHistory: getHistory,
      loading: historyLoading
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    path: "/watchlist",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Watchlist_Watchlist_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      watchlist: watchlist,
      user: user,
      getLyrics: getLyrics,
      removeWatchlist: removeWatchlist,
      loading: watchlistLoading,
      getWatchlist: getWatchlist
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    path: "/login",
    exact: true,
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Auth_Login_Login__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setToken: setToken,
      setUser: setUser
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    path: "/lyrics/:artist/:title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Lyrics_Lyrics1_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    lyrics: lyrics,
    removeWatchlist: removeWatchlist,
    addWatchlist: addWatchList,
    watchlisted: watchlisted,
    token: token,
    user: user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    exact: true,
    path: "/user/auth/verify"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Auth_Verify_Verify_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    user: user,
    token: token,
    is_authenticated: is_athenticated,
    is_verified: is_verified,
    requestUser: requestUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    path: "/user/account",
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Auth_Account_AccountSettings_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: user,
    token: token["auth"],
    setUser: setUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    exact: true,
    path: "/user/account/change-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Auth_Account_ChangePassword_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    token: token["auth"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.Route, {
    exact: true,
    path: "/auth/user/forgot-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Auth_Account_ForgotPassword_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    token: token["auth"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    logout: logoutHandler,
    user: user,
    logo: logo
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
const rootDiv = document.getElementById("root");
(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), rootDiv);

/***/ }),

/***/ 143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);








const AccountSettings = ({
  user,
  token,
  setUser
}) => {
  const [fullName, setFullName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [emailValid, setEmailValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [usernameValid, setUsernameValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    addToast
  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__.useToasts)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    autoSet();
  }, []);

  const autoSet = () => {
    if (user["user"]) {
      const fn = `${user["user"].first_name} ${user["user"].last_name}`;
      setFullName(fn);
      setLastName(user["user"].last_name);
      setFirstName(user["user"].first_name);
      setUsername(user["user"].username);
      setEmail(user["user"].email);
    }
  };

  const flashInputs = className => {
    document.querySelector(`#${className}`).style.borderColor = "red";
    setTimeout(() => {
      document.querySelector(`#${className}`).style.borderColor = "#001a63";
    }, 2000);
  };

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!username.match(re)) {
      setEmailValid(false);
    }

    if (email.indexOf("@") < 3 || email.lastIndexOf(".") < email.indexOf("@") + 2 || email.lastIndexOf(".") + 2 >= email.length || email.lastIndexOf(".") - email.indexOf("@") <= 2 || email.substring(0, 1).match(/[0-9]/) || email.includes(" ")) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const validateUsername = () => {
    if (!username.match(/^[a-z0-9_-]{4,16}$/)) {
      setUsernameValid(false);
    } else {
      setUsernameValid(true);
    }
  };

  const makeChanges = () => {
    if (email.length < 1) {
      flashInputs("e-editing");
      return false;
    }

    if (!emailValid) {
      flashInputs("e-editing");
      return false;
    }

    if (username.length < 1) {
      flashInputs("u-editing");
      return false;
    }

    if (!usernameValid) {
      flashInputs("u-editing");
      return false;
    } else {
      setLoading(true);
      setTimeout(() => {
        fetch("https://lyrik0.herokuapp.com/api/user/acct/modify/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`
          },
          body: JSON.stringify({
            email: email,
            first_name: firstName,
            last_name: lastName,
            username: username
          })
        }).then(res => res.json()).then(res => {
          console.log(res);

          if (res["user"]) {
            setLoading(false);
            setUser("user", res["user"]);
            addToast("Changes made!", {
              appearance: "success",
              autoDismiss: true
            });
            setEditing(false);
            const fn = `${res["user"].first_name} ${res["user"].last_name}`;
            setFullName(fn);
            setLastName(res["user"].last_name);
            setFirstName(res["user"].first_name);
            setUsername(res["user"].username);
            setEmail(res["user"].email);
          } else {
            setLoading(false);
            addToast("Unknown Error", {
              appearance: "error",
              autoDismiss: true
            });
          }
        });
      }, 1000);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "account-set-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "account-set-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "account-set"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-container"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "acct-title"
  }, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "acc-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_3__.ScaleLoader, {
    color: "#e9042a",
    loading: loading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "top-right-acct"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: () => {
      editing ? makeChanges() : setEditing(true);
    }
  }, editing ? "Save" : "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "account-set-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "account-set-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ava-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ava"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "r-va"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "user-icon-o"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "user--icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUserCircle
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-wrapper"
  }, editing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "editing-name-wr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "i-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "editing-name",
    type: "name",
    placeholder: "First Name",
    value: firstName,
    onChange: evt => setFirstName(evt.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "i-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "editing-name",
    type: "name",
    placeholder: "Last Name",
    value: lastName,
    onChange: evt => setLastName(evt.target.value)
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name"
  }, fullName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "email-details"
  }, editing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "e-editing",
    className: "editing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "e-i-w"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEnvelope
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "e-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "editing-input",
    type: "email",
    value: email,
    onChange: evt => setEmail(evt.target.value),
    onKeyUp: () => validateEmail()
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEnvelope
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, user["user"].email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "username-details"
  }, editing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "u-editing",
    className: "editing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "e-i-w"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUserAlt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "u-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "editing-input",
    type: "name",
    value: username,
    onChange: evt => setUsername(evt.target.value),
    onKeyUp: () => {
      validateUsername();
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUserAlt
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, user["user"].username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pass-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/user/account/change-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faKey
  }), " ", "Change password")))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountSettings);

/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);







const ChangePassword = ({
  token
}) => {
  const [currentPassword, setCurrentPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [currentPasswordError, setCurrentPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [currentPasswordMsg, setCurrentwordPassMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newPassword1, setNewPassword1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newPassword2, setNewPassword2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newPasswordValid, setNewPasswordValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPasswordError, setNewPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPasswordErrorMsg, setNewPasswordErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPasswordMatch, setNewPasswordMatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPasswordMatchMsg, setNewPasswordMatchMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    addToast
  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__.useToasts)();

  const flashInputs = className => {
    document.querySelector(`#${className}`).style.borderColor = "red";
    setTimeout(() => {
      document.querySelector(`#${className}`).style.borderColor = "#706d6d";
    }, 2000);
  };

  const changePasswordHandler = () => {
    if (currentPassword === "") {
      flashInputs("cr-pass");
      return false;
    }

    if (!newPasswordValid) {
      flashInputs("pass");
      return false;
    }

    if (!newPasswordMatch) {
      flashInputs("cpass");
      return false;
    } else {
      fetch("https://lyrik0.herokuapp.com/api/user/change-password/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`
        },
        body: JSON.stringify({
          access: "current_password",
          current_password: currentPassword,
          new_password: newPassword1
        })
      }).then(res => res.json()).then(res => {
        if (res.error) {
          flashInputs("cr-pass");
          setCurrentPasswordError(true);
          setCurrentwordPassMsg("Incorrect password");
        } else {
          addToast("Password changed!", {
            appearance: "success",
            autoDismiss: true
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
      });
    }
  };

  const checkPasswordMatch = () => {
    if (newPassword1 !== newPassword2) {
      setNewPasswordMatch(false);
    } else {
      setNewPasswordMatch(true);
    }
  };

  const validateNewPassword = () => {
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;

    if (!newPassword1.match(lowerCaseLetters) || !newPassword1.match(numbers) || newPassword1.length < 6) {
      setNewPasswordValid(false);
    } else {
      setNewPasswordValid(true);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "signup-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Change your password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/auth/user/forgot-password",
    className: "login-link"
  }, "Forgot your password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Current Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "cr-pass",
    type: "password",
    value: currentPassword,
    onChange: evt => setCurrentPassword(evt.target.value),
    className: "form-control"
  }), currentPasswordError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faExclamationTriangle
  }), " ", currentPasswordMsg) : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "email-pass-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "email-pass-inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "New Password", " ", newPassword1 !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: newPasswordValid ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheckCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle,
    className: newPasswordValid ? "check" : "times"
  }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "pass",
    value: newPassword1,
    type: "password",
    className: "form-control",
    onKeyUp: () => {
      validateNewPassword();
      checkPasswordMatch();
    },
    onChange: evt => {
      setNewPassword1(evt.target.value);
    }
  }), newPasswordError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faExclamationTriangle
  }), " ", newPasswordErrorMsg) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Retype New Password", " ", newPassword2 != "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: newPasswordMatch ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheckCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle,
    className: newPasswordMatch ? "check" : "times"
  }) : "", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "cpass",
    value: newPassword2,
    type: "password",
    className: "form-control",
    onKeyUp: () => checkPasswordMatch(),
    onChange: evt => setNewPassword2(evt.target.value)
  }), newPasswordMatchMsg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faExclamationTriangle
  }), newPasswordMatchMsg) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sign-up-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-primary",
    onClick: () => {
      changePasswordHandler();
    }
  }, "Change Password"))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePassword);

/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);







const ForgotPassword = ({
  token
}) => {
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newPasswordMatch, setNewPasswordMatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPasswordMatchMsg, setNewPasswordMatchMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPasswordValid, setNewPasswordValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPasswordError, setNewPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPasswordErrorMsg, setNewPasswordErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [newPassword1, setNewPassword1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [newPassword2, setNewPassword2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [sendingCode, setSendingCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [Verifying, setVerifying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [changingPassword, setChangingPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [vError, setVerror] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [vErrorMsg, setVErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    addToast
  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_1__.useToasts)();

  const flashInputs = className => {
    document.querySelector(`#${className}`).style.borderColor = "red";
    setTimeout(() => {
      document.querySelector(`#${className}`).style.borderColor = "#706d6d";
    }, 2000);
  };

  const checkPassword = () => {
    if (newPassword1 !== newPassword2) {
      setNewPasswordMatch(false);
    } else {
      setNewPasswordMatch(true);
    }
  };

  const validatePassword = () => {
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;

    if (!newPassword1.match(lowerCaseLetters) || !newPassword1.match(numbers) || newPassword1.length < 6) {
      setNewPasswordValid(false);
    } else {
      setNewPasswordValid(true);
    }
  };

  const sendCode = () => {
    if (email === "") {
      flashInputs("email");
      return false;
    } else {
      fetch("https://lyrik0.herokuapp.com/api/sendcode", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email: email
        })
      }).then(resp => resp.json()).then(resp => {
        if (resp["success"]) {
          addToast(`Email sent to ${email}`, {
            appearance: "success",
            autoDismiss: true
          });
          setSendingCode(false);
          setVerifying(true);
        } else if (resp["error"] === "User not found.") {
          flashInputs("email");
          setVErrorMsg("User doesn't exist");
          return false;
        } else {
          addToast("Error occured", {
            appearance: "error",
            autoDismiss: true
          });
          setSendingCode(false);
          setVerifying(true);
        }
      });
    }
  };

  const CodeVerification = () => {
    if (code.length < 1) {
      setVerror(true);
      setVErrorMsg("This field is required.");
      flashInputs("code");
      return false;
    } else {
      fetch("https://lyrik0.herokuapp.com/api/user/acct/verify/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          code: code,
          email: email
        })
      }).then(resp => resp.json()).then(resp => {
        if (resp["msg"]) {
          setVerifying(false);
          setChangingPassword(true);
          addToast("Confirmed!", {
            appearance: "success",
            autoDismiss: true
          });
        } else if (resp["error"]) {
          flashInputs("code");
          setVErrorMsg("Invalid code");
          return false;
        }
      });
    }
  };

  const submitPassword = () => {
    if (!newPasswordValid) {
      flashInputs("pass");
      return false;
    }

    if (!newPasswordMatch) {
      flashInputs("pass");
      flashInputs("cpass");
      return false;
    } else {
      fetch("https://lyrik0.herokuapp.com/api/user/change-password/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          access: "code",
          new_password: newPassword1,
          email: email
        })
      }).then(res => res.json()).then(res => {
        if (res["msg"]) {
          addToast("Password changed!", {
            appearance: "success",
            autoDismiss: true
          });
          window.location.href = "/";
        }
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "signup-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Account Recovery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs-wrapper"
  }, sendingCode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "f-hint"
  }, "Enter the email on your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "email",
    type: "email",
    value: email,
    onChange: evt => setEmail(evt.target.value),
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sign-up-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-primary",
    onClick: () => sendCode()
  }, "Confirm"))) : "", Verifying ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "f-hint"
  }, "Enter the six digits code sent to ", email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Verification Code:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "code",
    type: "text",
    value: code,
    onChange: evt => setCode(evt.target.value),
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sign-up-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-primary",
    onClick: () => CodeVerification()
  }, "Verify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "resent-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Didn't get any code?", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "r-link",
    onClick: () => {
      sendCode();
    }
  }, "Retry"), "."))) : "", changingPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "f-hint"
  }, "Create new password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "New Password", " ", newPassword1 !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: newPasswordValid ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheckCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimesCircle,
    className: newPasswordValid ? "check" : "times"
  }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "pass",
    value: newPassword1,
    placeholder: "Min len: six chars",
    type: "password",
    className: "form-control",
    onChange: evt => setNewPassword1(evt.target.value),
    onKeyUp: () => {
      validatePassword();
      checkPassword();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Re-type Password", " ", newPassword2 != "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: newPasswordMatch ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCheckCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimesCircle,
    className: newPasswordMatch ? "check" : "times"
  }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "cpass",
    type: "password",
    value: newPassword2,
    className: "form-control",
    onChange: evt => setNewPassword2(evt.target.value),
    onKeyUp: () => checkPassword()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sign-up-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-primary",
    onClick: () => submitPassword()
  }, "Submit"))) : "")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);

/***/ }),

/***/ 145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);






const Login = ({
  setToken,
  setUser
}) => {
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [usernameError, setUsernameError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [passError, setPassError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [usernameErrorMsg, setUsernameErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [passErrorMsg, setPassErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  document.title = "Login - Lyriko";

  const flashInputs = className => {
    document.querySelector(`#${className}`).style.borderColor = "red";
    setTimeout(() => {
      document.querySelector(`#${className}`).style.borderColor = "#706d6d";
    }, 2000);
  };

  const login = () => {
    setUsernameError(false);
    setPassError(false);

    if (username === "") {
      flashInputs("username");
      setUsernameError(true);
      setUsernameErrorMsg("Required");
    }

    if (password === "") {
      flashInputs("pass");
      setPassError(true);
      setPassErrorMsg("Required");
    } else {
      fetch("https://lyrik0.herokuapp.com/api/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email_username: username,
          password: password
        })
      }).then(reps => reps.json()).then(resp => {
        if (resp.error) {
          if (resp.error === "Incorrect password") {
            setPassError(true);
            setPassErrorMsg(resp.error);
          }

          if (resp.error === "User not found.") {
            flashInputs("username");
            setUsernameError(true);
            setUsernameErrorMsg(resp.error);
          }
        } else {
          setToken("auth", resp["token"]);
          setUser("user", resp["user"]);
          window.location.href = "/";
        }
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "signup-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Don't have an account?", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/signup",
    className: "login-link"
  }, "Sign up."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Username or Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "username",
    type: "name",
    value: username,
    onChange: evt => setUsername(evt.target.value),
    className: "form-control"
  }), usernameError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faExclamationTriangle
  }), " ", usernameErrorMsg) : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "email-pass-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "email-pass-inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "pass",
    value: password,
    type: "password",
    className: "form-control",
    onChange: evt => setPassword(evt.target.value)
  }), passError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faExclamationTriangle
  }), " ", passErrorMsg) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sign-up-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-primary",
    onClick: () => {
      login();
    }
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/auth/user/forgot-password",
    className: "login-link"
  }, "Forgot your password?")))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);







const SignUp = ({
  setToken,
  setUser,
  token
}) => {
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [usernameValid, setUsernameValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [emailValid, setEmailValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [passwordValid, setPasswordValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [passwordMatch, setPasswordMatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [usernameError, setUsernameError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [usernameErrorMsg, setUsernameErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [emailErrorMsg, setEmailErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [vError, setVerror] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [vErrorMsg, setVErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [verifying, setVerifying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    addToast
  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__.useToasts)();
  document.title = "Join - Lyriko";

  const validatePassword = () => {
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;

    if (!password.match(lowerCaseLetters) || !password.match(numbers) || password.length < 6) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  const validateUsername = () => {
    if (!username.match(/^[a-z0-9_-]{4,16}$/)) {
      setUsernameValid(false);
    } else {
      setUsernameValid(true);
    }
  };

  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!username.match(re)) {
      setEmailValid(false);
    }

    if (email.indexOf("@") < 3 || email.lastIndexOf(".") < email.indexOf("@") + 2 || email.lastIndexOf(".") + 2 >= email.length || email.lastIndexOf(".") - email.indexOf("@") <= 2 || email.substring(0, 1).match(/[0-9]/) || email.includes(" ")) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const checkPassword = () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const flashInputs = className => {
    document.querySelector(`#${className}`).style.borderColor = "red";
    setTimeout(() => {
      document.querySelector(`#${className}`).style.borderColor = "#706d6d";
    }, 2000);
  };

  const sendCode = () => {
    fetch("https://lyrik0.herokuapp.com/api/sendcode", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token["auth"]}`
      },
      body: JSON.stringify({
        email: email
      })
    }).then(resp => resp.json()).then(resp => {
      if (resp["success"]) {
        addToast(`Email sent to${email}`, {
          appearance: "success",
          autoDismiss: true
        });
      } else {
        addToast("Faild. Try again", {
          appearance: "error",
          autoDismiss: true
        });
        return false;
      }
    });
  };

  const CodeVerification = () => {
    if (code.length < 1) {
      setVerror(true);
      setVErrorMsg("This field is required.");
      flashInputs("code");
      return false;
    } else {
      fetch("https://lyrik0.herokuapp.com/api/verifycode", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token["auth"]}`
        },
        body: JSON.stringify({
          code: code
        })
      }).then(resp => resp.json()).then(resp => {
        if (resp["msg"]) {
          addToast("Verified!", {
            appearance: "success",
            autoDismiss: true
          });
          window.location.href = "/";
        } else {
          flashInputs("code");
          setVErrorMsg("Invalid code");
          return false;
        }
      });
    }
  };

  const handleSignUp = () => {
    if (email === "" || !emailValid) {
      flashInputs("email");
      return false;
    }

    if (username === "" || !usernameValid) {
      flashInputs("username");
      return false;
    }

    if (password === "" || !passwordValid) {
      flashInputs("pass");
      return false;
    }

    if (confirmPassword !== password) {
      flashInputs("pass");
      flashInputs("cpass");
      return false;
    }

    if (!checked) {
      document.querySelector("#t-c-txt").style.color = "#db0226";
      setTimeout(() => {
        document.querySelector("#t-c-txt").style.color = "#b6b6b6";
      }, 2000);
      return false;
    } else {
      fetch("https://lyrik0.herokuapp.com/api/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username: username,
          email: email,
          password: password,
          email_username: email
        })
      }).then(resp => resp.json()).then(resp => {
        if (resp["username"]) {
          setUsernameError(true);
          setUsernameErrorMsg("Username already taken");
          flashInputs("username");
        }

        if (resp["email"]) {
          setEmailError(true);
          setEmailErrorMsg("Email already taken");
          flashInputs("email");
        } else {
          setToken("auth", resp["token"]);
          setUser("user", resp["user"]);
          addToast("One more step! Enter code to continue", {
            appearance: "success",
            autoDismiss: true
          });
          setToken("auth", resp["token"]);
          setUser("user", resp["user"]);
          setVerifying(true);
        }
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "signup-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "form"
  }, !verifying ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Already have an account?", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login",
    className: "login-link"
  }, "Login."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "name-inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "first-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    placeholder: "John",
    value: firstName,
    type: "name",
    className: "form-control",
    id: "first-name",
    onChange: evt => setFirstName(evt.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "last-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "last-name",
    placeholder: "Doe",
    value: lastName,
    type: "name",
    className: "form-control",
    onChange: evt => setLastName(evt.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Choose Username*", " ", username != "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: usernameValid ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheckCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle,
    className: usernameValid ? "check" : "times"
  }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "username",
    type: "name",
    value: username,
    onChange: evt => setUsername(evt.target.value),
    onKeyUp: () => {
      validateUsername();
    },
    className: "form-control"
  }), usernameError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faExclamationTriangle
  }), " ", usernameErrorMsg) : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "email-pass-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "email-pass-inputs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Email Address*", " ", email !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: emailValid ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheckCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle,
    className: emailValid ? "check" : "times"
  }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "email",
    value: email,
    placeholder: "email@example.com",
    type: "email",
    className: "form-control",
    onChange: evt => setEmail(evt.target.value),
    onKeyUp: () => validateEmail()
  }), emailError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "error-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faExclamationTriangle
  }), " ", emailErrorMsg) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Choose Password*", " ", password !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: passwordValid ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheckCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle,
    className: passwordValid ? "check" : "times"
  }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "pass",
    value: password,
    placeholder: "Min len: six chars",
    type: "password",
    className: "form-control",
    onChange: evt => setPassword(evt.target.value),
    onKeyUp: () => {
      validatePassword();
      checkPassword();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "c-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-label"
  }, "Confirm Password*", " ", confirmPassword != "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: passwordMatch ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCheckCircle : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimesCircle,
    className: passwordMatch ? "check" : "times"
  }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "cpass",
    type: "password",
    value: confirmPassword,
    className: "form-control",
    onChange: evt => setConfirmPassword(evt.target.value),
    onKeyUp: () => checkPassword()
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    checked: checked,
    onChange: evt => {
      setChecked(!checked);
    },
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    id: "t-c-txt",
    className: "form-check-label",
    htmlFor: "flexCheckDefault"
  }, "Agree to Terms and Conditions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sign-up-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-primary",
    onClick: () => {
      handleSignUp();
    }
  }, "Sign Up"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "verification_area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Enter the code sent to ", email, " to complete signup.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "code-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "code",
    type: "text",
    placeholder: "eg: 123456",
    className: "form-control",
    value: code,
    onChange: evt => setCode(evt.target.value)
  })), vError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "code-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faExclamationTriangle
  }), vErrorMsg) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "verification-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-primary",
    onClick: () => CodeVerification()
  }, "Verify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "resent-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Didn't get any code?", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "r-link",
    onClick: () => {
      sendCode();
    }
  }, "Retry"), "."))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);






const Verify = ({
  user,
  token,
  is_authenticated,
  is_verified,
  setVerified
}) => {
  const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [vError, setVerror] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [vErrorMsg, setVErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    addToast
  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_1__.useToasts)();
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const flashInputs = className => {
    document.querySelector(`#${className}`).style.borderColor = "red";
    setTimeout(() => {
      document.querySelector(`#${className}`).style.borderColor = "#706d6d";
    }, 2000);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (token["auth"]) {
      setEmail(user["user"].email);
    }

    sendCode(user["user"].email);
  }, []);

  const sendCode = email => {
    if (is_authenticated) {
      fetch("https://lyrik0.herokuapp.com/api/sendcode", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token["auth"]}`
        },
        body: JSON.stringify({
          email: email
        })
      }).then(resp => resp.json()).then(resp => {
        if (resp["success"]) {
          addToast(`Code sent to ${email}`, {
            appearance: "success",
            autoDismiss: true
          });
        } else {
          addToast("Faild. Try again", {
            appearance: "error",
            autoDismiss: true
          });
          return false;
        }
      });
    }
  };

  const CodeVerification = () => {
    if (code.length < 1) {
      setVerror(true);
      setVErrorMsg("This field is required.");
      flashInputs("code");
      return false;
    } else {
      fetch("https://lyrik0.herokuapp.com/api/verifycode", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token["auth"]}`
        },
        body: JSON.stringify({
          code: code
        })
      }).then(resp => resp.json()).then(resp => {
        if (resp["msg"]) {
          addToast("Verified!", {
            appearance: "success",
            autoDismiss: true
          });
          window.location.href = "/";
        } else {
          flashInputs("code");
          setVErrorMsg("Invalid code");
          return false;
        }
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, is_authenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "signup-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "verification_area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Enter the six digits code sent to ", email, " to continue.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "code-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "code",
    type: "text",
    placeholder: "eg: 123456",
    className: "form-control",
    value: code,
    onChange: evt => setCode(evt.target.value)
  })), vError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "code-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faExclamationTriangle
  }), vErrorMsg) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "verification-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "btn btn-primary",
    onClick: () => CodeVerification()
  }, "Verify")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "resent-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Didn't get any code?", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "r-link",
    onClick: () => {
      sendCode(email);
    }
  }, "Retry"), "."))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, is_verified ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Page not found.")) : ""));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Verify);

/***/ }),

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);





const Footer = ({
  logo,
  user,
  logout
}) => {
  let text = " Lyriko is just another music lyrics\nprovider, but with little differnece.\nLyriko allows you to find lyrics of\nalmost any song, which is quite\nusual, but also allows you to add\nlyrics to your watchlist to view later,\nexport to pdf and also copy to\nclipboard very easily! Lyriko also logs\nyour history so you can get back\nto your viewed lyrics later with ease!";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "about-brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "_brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "abt-brd-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "brand-logo",
    src: logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "brand-name"
  }, "Lyriko")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "about-txt"
  }, text, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "abt-txt-rdmr"
  }, "Read more"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "useful-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "useful-link-txt"
  }, "Useful Links ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLink
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer-links-wraper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "footer-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "footer-link-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/walkthrough"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "footer-link-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faBookOpen
  }), "Walk through")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "footer-link-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/watchlist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "footer-link-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHeart
  }), "Watchlist")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "footer-link-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/history"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "footer-link-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHistory
  }), "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "footer-link-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "footer-link-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser
  }), "Contact"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "copyright"
  }, "Lyriko 2021\xA9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "maker"
  }, "Made with", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    style: {
      color: "red"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faHeart
  }), " ", "by Conscience"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var url_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);








const History = ({
  history,
  loading,
  user,
  getHistory
}) => {
  document.title = "History -Lyriko";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    /*     if (!user["user"]) {
      window.location.href = "/login";
    } */
    window.scrollTo({
      top: 0
    });
    getHistory();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-container"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "history-list"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_3__.ScaleLoader, {
    color: "#e9042a",
    loading: loading,
    height: 55,
    width: 25,
    radius: 5
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !user["user"] || !history ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "empty-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/login"
  }, "Login"), " to view your history."))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, history.length >= 1 ? history.map((lyrics, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "history-list-item",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "main-wa"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: `/lyrics/${(0,url_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(lyrics.artist)}/${(0,url_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(lyrics.title)}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faMusic,
      className: "t-l-i"
    }), lyrics.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "t-l-a"
    }, lyrics.artist))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon-wr"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      className: "de-ic",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrashAlt
    })));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "empty-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Empty")), " ")))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (History);

/***/ }),

/***/ 63:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59);







(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__.pdfMake.vfs;


const Lyrics = ({
  lyrics,
  notFound,
  lyricsLoading,
  random,
  watchlisted,
  removeWatchlist,
  addWatchlist
}) => {
  const {
    addToast
  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_1__.useToasts)();

  function copy(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }

    navigator.clipboard.writeText(text).then(function () {
      addToast(`Copied ${lyrics ? lyrics.title : ""} by ${lyrics ? lyrics.artist : ""} to clipbaord`, {
        appearance: "success",
        autoDismiss: true
      });
    }, function (err) {
      addToast(`Something went wrong`, {
        appearance: "info",
        autoDismiss: true
      });
    });
  }

  const copyTemp = `${lyrics ? lyrics.title : ""} by ${lyrics ? lyrics.artist : ""}\nsource:https://www.lyrik0.herokuapp.com \n\n\n${lyrics ? lyrics.body : ""}\n\n\nsource:https://www.lyrik0.herokuapp.com `; //Generate pdf///

  var docDefinition = {
    watermark: {
      text: "https://www.lyrik0.herokuapp.com",
      color: "blue",
      opacity: 0.1,
      bold: true,
      italics: false,
      angle: 70
    },
    footer: {
      text: "https://www.lyrik0.herokuapp.com",
      alignment: "right"
    },
    content: [{
      text: `${lyrics ? lyrics.title : ""}`,
      style: "titleStyle"
    }, {
      text: "By",
      style: "byStyle"
    }, {
      text: `${lyrics ? lyrics.artist : ""}`,
      style: "artistStyle"
    }, {
      text: `${"Visit https://www.lyrik0.herokuapp.com for more"}`,
      style: "markStyle"
    }, {
      text: " "
    }, {
      text: `${lyrics ? lyrics.body : ""}`,
      style: "bodyStyle"
    }],
    styles: {
      titleStyle: {
        fontSize: 22,
        bold: true,
        alignment: "center",
        color: "purple"
      },
      artistStyle: {
        fontSize: 22,
        bold: true,
        alignment: "center",
        color: "purple"
      },
      bodyStyle: {
        alignment: "center"
      },
      markStyle: {
        italic: true,
        alignment: "center",
        color: "purple"
      },
      byStyle: {
        italic: true,
        alignment: "center",
        color: "purple",
        fontSize: 15
      }
    }
  };

  const GeneratePdf = () => {
    addToast(`Downloading ${lyrics ? lyrics.title : ""} by ${lyrics ? lyrics.artist : ""}`, {
      appearance: "info",
      autoDismiss: true
    });
    setTimeout(() => {
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default().createPdf(docDefinition).download(`${lyrics ? lyrics.artist : ""}_lyrik0.herokuapp.com_.pdf`);
      addToast(`Download Successful!`, {
        appearance: "success",
        autoDismiss: true
      });
    }, 3000);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, lyricsLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_5__.ScaleLoader, {
    color: "#e9042a",
    loading: lyricsLoading,
    height: 55,
    width: 25,
    radius: 5
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-title-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, lyrics ? lyrics.title : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-artist-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-artist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, lyrics ? lyrics.artist : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-text-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "l-txt"
  }, lyrics ? lyrics.body : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), lyrics ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-footer-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    style: {
      color: watchlisted === "true" ? "red" : "white"
    },
    onClick: () => {
      watchlisted === "true" ? removeWatchlist(lyrics.id) : addWatchlist(lyrics.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHeart
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faFilePdf,
    onClick: () => {
      GeneratePdf();
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lyrics-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCopy,
    onClick: () => copy(copyTemp)
  }))))) : "")), notFound ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "not-found-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "not-found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "s-txt-wr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Sorry, we could not get that lyrics :(")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "shuffle-wrpper",
    onClick: () => random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "shuffle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "random-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faRandom
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "random-txt"
  }, "Click me to get random lyrics"))))) : "")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lyrics);

/***/ }),

/***/ 149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var url_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98);










(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__.pdfMake.vfs;

const Lyrics1 = ({
  user,
  token,
  addWatchlist,
  removeWatchlist
}) => {
  const {
    artist,
    title
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
  const [lyrics, setLyrics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [lyricsLoading, setLyricsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [notFound, setNotFound] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [watchlisted, setWatchlisted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    addToast
  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_3__.useToasts)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getLyrics(artist, title);
    checkWatchlist();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  function copy(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }

    navigator.clipboard.writeText(text).then(function () {
      addToast(`Copied ${lyrics ? lyrics.title : ""} by ${lyrics ? lyrics.artist : ""} to clipbaord`, {
        appearance: "success",
        autoDismiss: true
      });
    }, function (err) {
      addToast(`Something went wrong`, {
        appearance: "info",
        autoDismiss: true
      });
    });
  }

  const copyTemp = `${lyrics ? lyrics.title : ""} by ${lyrics ? lyrics.artist : ""}\nsource:https://www.lyrik0.herokuapp.com \n\n\n${lyrics ? lyrics.body : ""}\n\n\nsource:https://www.lyrik0.herokuapp.com `; //Generate pdf///

  var docDefinition = {
    watermark: {
      text: "https://www.lyrik0.herokuapp.com",
      color: "blue",
      opacity: 0.1,
      bold: true,
      italics: false,
      angle: 70
    },
    footer: {
      text: "https://www.lyrik0.herokuapp.com",
      alignment: "right"
    },
    content: [{
      text: `${lyrics ? lyrics.title : ""}`,
      style: "titleStyle"
    }, {
      text: "By",
      style: "byStyle"
    }, {
      text: `${lyrics ? lyrics.artist : ""}`,
      style: "artistStyle"
    }, {
      text: `${"Visit https://www.lyrik0.herokuapp.com for more"}`,
      style: "markStyle"
    }, {
      text: " "
    }, {
      text: `${lyrics ? lyrics.body : ""}`,
      style: "bodyStyle"
    }],
    styles: {
      titleStyle: {
        fontSize: 22,
        bold: true,
        alignment: "center",
        color: "purple"
      },
      artistStyle: {
        fontSize: 22,
        bold: true,
        alignment: "center",
        color: "purple"
      },
      bodyStyle: {
        alignment: "center"
      },
      markStyle: {
        italic: true,
        alignment: "center",
        color: "purple"
      },
      byStyle: {
        italic: true,
        alignment: "center",
        color: "purple",
        fontSize: 15
      }
    }
  };

  const GeneratePdf = () => {
    addToast(`Downloading ${lyrics ? lyrics.title : ""} by ${lyrics ? lyrics.artist : ""}`, {
      appearance: "info",
      autoDismiss: true
    });
    setTimeout(() => {
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().createPdf(docDefinition).download(`${lyrics ? lyrics.artist : ""}_lyrik0.herokuapp.com_.pdf`);
      addToast(`Download Successful!`, {
        appearance: "success",
        autoDismiss: true
      });
    }, 3000);
  };

  const getLyrics = (artist, title) => {
    const artistSlug = (0,url_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(artist);
    const titleSlug = (0,url_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
    setLyricsLoading(true);
    setNotFound(false);
    setTimeout(() => {
      fetch(`https://lyrik0.herokuapp.com/api/lyrics/${artistSlug}/${titleSlug}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          artist: artist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
          title: title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
          username: user["user"] ? user["user"].username : ""
        })
      }).then(res => res.json()).then(res => {
        if (res.error) {
          setNotFound(true);
          setLyrics();
          setLyricsLoading(false);
        } else {
          setLyrics(res.lyrics);
          document.title = `${res.lyrics.title} - ${res.lyrics.artist} - Lyriko`;
          setNotFound(false);
          setLyricsLoading(false);
        }
      });
    }, 1000);
  };
  /*   const removeWatchlist = () => {
  console.log("remove!");
  };
  const addWatchlist = () => {
  console.log("add!");
  }; */


  const checkWatchlist = () => {
    if (lyrics) {
      if (user["user"]) {
        fetch("https://lyrik0.herokuapp.com/api/checksavelist/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token["auth"]}`
          },
          body: JSON.stringify({
            lyrics_id: lyrics["id"]
          })
        }).then(res => res.json()).then(res => {
          setWatchlisted(res.watchlisted);
        });
      } else {
        return false;
      }
    }
  };

  checkWatchlist();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, lyricsLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_7__.ScaleLoader, {
    color: "#e9042a",
    loading: lyricsLoading,
    height: 55,
    width: 25,
    radius: 5
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-title-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, lyrics ? lyrics.title : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-artist-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-artist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, lyrics ? lyrics.artist : ""))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "l-line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-text-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "l-txt"
  }, lyrics ? lyrics.body : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "l-line"
  }), lyrics ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-footer-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    style: {
      color: watchlisted === "true" ? "red" : "white"
    },
    onClick: () => {
      watchlisted === "true" ? removeWatchlist(lyrics.id) : addWatchlist(lyrics.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faHeart
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faFilePdf,
    onClick: () => {
      GeneratePdf();
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Lyrics1-footer-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faCopy,
    onClick: () => copy(copyTemp)
  }))))) : "")), notFound ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "not-found-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "not-found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "s-txt-wr"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Sorry, we could not get that lyrics :(")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "shuffle-wrpper",
    onClick: () => window.history.back()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "shuffle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "random-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faBackward
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "random-txt"
  }, "Click me to get back"))))) : "")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lyrics1);

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* import { MenuItems } from "./MenuItems"; */





const Nav = ({
  logo,
  openMobileMenu,
  handleMobileMenuOpen,
  user,
  logout
}) => {
  const handleLogout = () => {
    if (user["user"]) {
      logout();
    } else {
      return false;
    }
  };

  const goHome = () => {
    window.location.href = "/";
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "nav-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "brand-wrapper",
    onClick: () => {
      goHome();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "brand-img",
    src: logo,
    alt: "Lyriko Logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "brand-name-nav"
  }, "Lyriko")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav-links-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "nav-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/watchlist",
    onClick: () => handleMobileMenuOpen()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "nav-link-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "nav-link-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faHeart
  }), "Watchlist"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/history",
    onClick: () => handleMobileMenuOpen()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "nav-link-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "nav-link-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faHistory
  }), "History"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-account"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: !user["user"] ? "/login" : "",
    className: "nav-account-item",
    onClick: () => handleMobileMenuOpen()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "nav-account-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUserCircle
  }), user["user"] ? ` ${user.user.username}` : "Login"), user["user"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sub-acct-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "drop-sub-acct-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    onClick: () => logout()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSignOutAlt
  }), " ", "Logout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/user/account"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTools
  }), " ", "Account")))) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu-bars"
  }, openMobileMenu ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    onClick: handleMobileMenuOpen,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTimes
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    onClick: handleMobileMenuOpen,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBars
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: openMobileMenu ? "mobile-menu open" : "mobile-menu close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: openMobileMenu ? "nav-links-mobile open" : "nav-links-mobile close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-link-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/watchlist",
    onClick: () => handleMobileMenuOpen()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "nav-link-item-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "nav-link-icon-mobile",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faHeart
  }), "Watchlist"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-link-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/history",
    onClick: () => handleMobileMenuOpen()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "nav-link-item-mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "nav-link-icon-mobile",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faHistory
  }), "History"))), user["user"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-link-mobile bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/user/account",
    className: "nav-link-item-mobile",
    onClick: () => handleMobileMenuOpen()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "nav-link-icon-mobile",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTools
  }), "Account")) : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-link-mobile bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: !user["user"] ? "/login" : "",
    className: "nav-link-item-mobile",
    onClick: () => {
      handleLogout();
      handleMobileMenuOpen();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "nav-link-icon-mobile",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUserCircle
  }), user["user"] ? `Logout ${user.user.username}` : "Login")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var url_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);








const Recent = ({
  recent,
  getLyrics,
  loading
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent-header-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSearch,
    className: "title-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "t-title"
  }, "Recently searched this week...")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "line-spacer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent-body-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent-list-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "recent-list"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_4__.ScaleLoader, {
    color: "#e9042a",
    loading: loading,
    height: 55,
    width: 25,
    radius: 5
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "t-list"
  }, recent ? recent.map((lyrics, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "r-list-item-wrapper",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "r-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      to: `/lyrics/${(0,url_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(lyrics.artist)}/${(0,url_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(lyrics.title)}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      className: "r-l-i",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMusic
    }), " ", lyrics.title.replace("-", " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "r-l-a"
    }, lyrics.artist.replace("-", " ")), " ")));
  }) : ""))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recent);

/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);






const RequestForm = ({
  getLyrics,
  openMobileMenu,
  random
}) => {
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [artist, setArtist] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [suggesting, setSuggesting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const getLyricsHandler = (artist, title) => {
    if (title === "") {
      return false;
    } else if (artist === "") {
      return false;
    } else {
      getLyrics(artist, title);
      setArtist("");
      setTitle("");
    }
  };

  const suggestionHandler = Type => {
    if (Type == "Title") {
      if (title.length <= 2) {
        setSuggesting(false);
      } else if (title.length >= 2) {
        fetch("https://lyrik0.herokuapp.com/api/suggest", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            type: "title",
            title: title
          })
        }).then(sugs => sugs.json()).then(sugs => {
          setSuggestions(sugs.suggestions);

          if (sugs.suggestions.length >= 1) {
            setSuggesting(true);
          } else if (sugs.suggestions < 1) {
            setSuggesting(false);
          }
        });
      }
    } else {
      if (artist.length <= 2) {
        setSuggesting(false);
      } else if (artist.length >= 2) {
        fetch("https://lyrik0.herokuapp.com/api/suggest", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            type: "artist",
            artist: artist
          })
        }).then(sugs => sugs.json()).then(sugs => {
          setSuggestions(sugs.suggestions);

          if (sugs.suggestions.length >= 1) {
            setSuggesting(true);
          } else if (sugs.suggestions < 1) {
            setSuggesting(false);
          }
        });
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "request-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "r-form-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "request-form-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    role: "icon",
    className: "f-t-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMusic
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-title",
    type: "text",
    value: title,
    onChange: evt => {
      setTitle(evt.target.value);
    },
    onKeyUp: () => {
      suggestionHandler("Title");
    },
    placeholder: "Song"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "request-form-artist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "f-a-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCompactDisc
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "form-artist",
    value: artist,
    onChange: evt => {
      setArtist(evt.target.value);
    },
    onKeyUp: () => {
      suggestionHandler("Artist");
    },
    type: "text",
    placeholder: "Artist"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "d-r-f-button",
    onClick: () => getLyricsHandler(artist, title)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "d-f-s-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "d-r-f-button",
    onClick: () => random()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "d-f-s-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faRandom
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: suggesting ? "suggestion-wrapper drop" : "suggestion-wrapper"
  }, !openMobileMenu ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "suggestion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "suggestion-list"
  }, suggestions ? suggestions.map(suggestion => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: suggestion.id,
      className: "suggestion-list-item",
      onClick: () => {
        getLyricsHandler(suggestion.artist, suggestion.title);
        setSuggesting(false);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      className: "s-icon",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMusic
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default()), {
      highlightClassName: "present-txt",
      searchWords: [`${title}`],
      autoEscape: true,
      textToHighlight: suggestion.title
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "s-artist"
    }, suggestion.artist));
  }) : "")) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "request-form-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "r-f-button",
    onClick: () => getLyricsHandler(artist, title)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    className: "f-s-icon",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSearch
  }), " ", "Search")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestForm);

/***/ }),

/***/ 142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);







const Trending = ({
  trending,
  getLyrics,
  loading
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending-header-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFire,
    className: "title-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "t-title"
  }, "Trending...")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "line-spacer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending-body-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending-list-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "trending-list"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_3__.ScaleLoader, {
    color: "#e9042a",
    loading: loading,
    height: 55,
    width: 25,
    radius: 5
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "t-list"
  }, trending ? trending.map(lyrics => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "t-list-item-wrapper",
      key: lyrics.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "t-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: `/lyrics/${lyrics.artist_slug}/${lyrics.title_slug}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      className: "t-l-i",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMusic
    }), " ", lyrics.title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "t-l-a"
    }, lyrics.artist))));
  }) : ""))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trending);

/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_2__);







const Watchlist = ({
  watchlist,
  removeWatchlist,
  loading,
  user,
  getWatchlist
}) => {
  document.title = "Watchlist - Lyriko";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getWatchlist();
  }, []);
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "watchlist-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "watchlist-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "watchlist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-container"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Watchlist")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "watchlist-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "watchlist-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "watchlist-list"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_2__.ScaleLoader, {
    color: "#e9042a",
    loading: loading,
    height: 55,
    width: 25,
    radius: 5
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !user["user"] || !watchlist ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "empty-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login"
  }, "Login"), " to view your watchlist."))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, watchlist.length >= 1 ? watchlist.map((lyrics, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "watchlist-list-item",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "main-wa"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: `/lyrics/${lyrics.artist_slug}/${lyrics.title_slug}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMusic,
      className: "t-l-i"
    }), lyrics.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "t-l-a"
    }, lyrics.artist))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "icon-wr"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
      className: "de-ic",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTrashAlt,
      onClick: () => removeWatchlist(lyrics.id)
    })));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "empty-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Empty")))))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Watchlist);

/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


/***/ }),

/***/ 23:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 26:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ 27:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 25:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ 29:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ 34:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 33:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 35:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 36:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 21:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 24:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 30:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 31:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1], () => (__webpack_require__(0)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;