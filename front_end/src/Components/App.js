import React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import UrlSlug from "url-slug";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav/Nav.js";
import Footer from "./Footer/Footer.js";
import RequestForm from "./RequestForm/RequestForm.js";
import Lyrics from "./Lyrics/Lyrics.js";
import Recent from "./Recent/Recent.js";
import Trending from "./Trending/Trending.js";
import AccountSettings from "./Auth/Account/AccountSettings.js";
import ForgotPassword from "./Auth/Account/ForgotPassword.js";
import { ToastProvider } from "react-toast-notifications";
import Login from "./Auth/Login/Login";
import SignUp from "./Auth/SignUp/SignUp";
import History from "./History/History.js";
import Watchlist from "./Watchlist/Watchlist.js";
import Lyrics1 from "./Lyrics/Lyrics1.js";
import Verify from "./Auth/Verify/Verify.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import ChangePassword from "./Auth/Account/ChangePassword.js";

function App() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [lyrics, setLyrics] = useState();
    const [trending, setTrending] = useState();
    const [recent, setRecent] = useState();
    const [notFound, setNotFound] = useState();
    const [token, setToken, removeToken] = useCookies(["auth"]);
    const [user, setUser, removeUser] = useCookies(["user"]);
    const [is_athenticated, setIs_authenticated] = useState();
    const [is_verified, setIs_verified] = useState("");
    const [history, setHistory] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [watchlisted, setWatchlisted] = useState();
    const [loading, setLoading] = useState(false);
    const [lyricsLoading, setLyricsLoading] = useState(false);
    const [historyLoading, setHistoryLoading] = useState(false);
    const [watchlistLoading, setWatchlistLoading] = useState(false);
    const [trendingLoading, setTrendingLoading] = useState(false);
    const logo = "https://i.ibb.co/4jqQHc2/logo.png";

    useEffect(() => {
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
                    Authorization: `Token ${token["auth"]}`,
                },
            })
                .then((res) => res.json())
                .then((res) => {
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
                        Authorization: `Token ${token["auth"]}`,
                    },
                    body: JSON.stringify({ lyrics_id: lyrics["id"] }),
                })
                    .then((res) => res.json())
                    .then((res) => {
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
                method: "GET",
            })
                .then((recent) => recent.json())
                .then((recent) => {
                    setRecent(recent.recent);
                    setLoading(false);
                });
        }, 2000);
    };

    const getTrending = () => {
        setTrendingLoading(true);
        setTimeout(() => {
            fetch("https://lyrik0.herokuapp.com/api/trending", {
                method: "GET",
            })
                .then((trending) => trending.json())
                .then((trending) => {
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
                method: "get",
            })
                .then((lyrics) => lyrics.json())
                .then((lyrics) => {
                    setLyrics(lyrics.lyrics);
                    document.title = `${lyrics.lyrics.title} - ${lyrics.lyrics.artist} - Lyriko`;
                    setNotFound(false);
                    setLyricsLoading(false);
                });
        }, 1000);
    };

    const getLyrics = (artist, title) => {
        const artistSlug = UrlSlug(artist);
        const titleSlug = UrlSlug(title);
        setLyricsLoading(true);

        setTimeout(() => {
            fetch(
                `https://lyrik0.herokuapp.com/api/lyrics/${artistSlug}/${titleSlug}`,
                {
                    method: "POST",

                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        artist: artist.replace(
                            /(^\w{1})|(\s+\w{1})/g,
                            (letter) => letter.toUpperCase()
                        ),
                        title: title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                            letter.toUpperCase()
                        ),
                        username: user["user"] ? user["user"].username : "",
                    }),
                }
            )
                .then((res) => res.json())
                .then((res) => {
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
                        Authorization: `Token ${token["auth"]}`,
                    },
                })
                    .then((res) => res.json())
                    .then((res) => {
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
                        Authorization: `Token ${token["auth"]}`,
                    },
                })
                    .then((lyrics) => lyrics.json())
                    .then((lyrics) => {
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

    const addWatchList = (lyrics_id) => {
        if (is_athenticated) {
            fetch("https://lyrik0.herokuapp.com/api/lyrics/savelist/add/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Token ${token["auth"]}`,
                },
                body: JSON.stringify({ lyrics_id: lyrics_id }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (!res.Error) {
                        setWatchlist(res.save_list);
                    }
                });
        } else {
            window.location.href = "/login";
        }
    };

    const removeWatchlist = (lyrics_id) => {
        if (is_athenticated) {
            fetch("https://lyrik0.herokuapp.com/api/lyrics/savelist/remove/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Token ${token["auth"]}`,
                },
                body: JSON.stringify({ lyrics_id: lyrics_id }),
            })
                .then((res) => res.json())
                .then((res) => {
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

    return (
        <ToastProvider>
            <Router>
                <div className="App">
                    <div className="top">
                        <Nav
                            handleMobileMenuOpen={handleMobileMenuOpen}
                            openMobileMenu={openMobileMenu}
                            logo={logo}
                            is_athenticated={is_athenticated}
                            user={user}
                            logout={logoutHandler}
                        />
                    </div>

                    <div className="middle">
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <div className="middle-wrap">
                                    {token["auth"] !== undefined ? (
                                        <div>
                                            {user["user"].is_verified ===
                                            false ? (
                                                <div className="_alert_not_verified">
                                                    <p>
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faExclamationTriangle
                                                            }
                                                        />{" "}
                                                        Your email is not yet
                                                        verified.
                                                        <Link to="/user/auth/verify">
                                                            {" "}
                                                            <span className="vlink">
                                                                {" "}
                                                                Click to verify
                                                            </span>
                                                        </Link>
                                                    </p>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <div className="request-form-wrapper">
                                        <RequestForm
                                            openMobileMenu={openMobileMenu}
                                            getLyrics={getLyrics}
                                            random={getRandomLyrics}
                                            token={token}
                                        />
                                    </div>
                                    <div className="main">
                                        <div className="m-l-wrapper">
                                            <Lyrics
                                                lyrics={lyrics}
                                                notFound={notFound}
                                                random={getRandomLyrics}
                                                removeWatchlist={
                                                    removeWatchlist
                                                }
                                                addWatchlist={addWatchList}
                                                watchlisted={watchlisted}
                                                lyricsLoading={lyricsLoading}
                                            />
                                        </div>
                                        <div className="m-t-wrapper">
                                            <Trending
                                                getLyrics={getLyrics}
                                                trending={trending}
                                                loading={trendingLoading}
                                            />
                                        </div>

                                        <div className="m-r-wrapper">
                                            <Recent
                                                getLyrics={getLyrics}
                                                recent={recent}
                                                loading={loading}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                        <Route
                            path="/signup"
                            exact
                            render={(props) => (
                                <SignUp
                                    setToken={setToken}
                                    setUser={setUser}
                                    token={token}
                                    handleVerify={handleVerify}
                                />
                            )}
                        />
                        <Route
                            path="/history"
                            exact
                            render={(props) => (
                                <History
                                    history={history}
                                    user={user}
                                    getLyrics={getLyrics}
                                    getHistory={getHistory}
                                    loading={historyLoading}
                                />
                            )}
                        />
                        <Route
                            path="/watchlist"
                            exact
                            render={(props) => (
                                <Watchlist
                                    watchlist={watchlist}
                                    user={user}
                                    getLyrics={getLyrics}
                                    removeWatchlist={removeWatchlist}
                                    loading={watchlistLoading}
                                    getWatchlist={getWatchlist}
                                />
                            )}
                        />
                        <Route
                            path="/login"
                            exact
                            render={(props) => (
                                <Login setToken={setToken} setUser={setUser} />
                            )}
                        />
                        <Route path="/lyrics/:artist/:title">
                            <Lyrics1
                                lyrics={lyrics}
                                removeWatchlist={removeWatchlist}
                                addWatchlist={addWatchList}
                                watchlisted={watchlisted}
                                token={token}
                                user={user}
                            />
                        </Route>
                        <Route exact path="/user/auth/verify">
                            <Verify
                                user={user}
                                token={token}
                                is_authenticated={is_athenticated}
                                is_verified={is_verified}
                                requestUser={requestUser}
                            />
                        </Route>

                        <Route path="/user/account" exact>
                            <AccountSettings
                                user={user}
                                token={token["auth"]}
                                setUser={setUser}
                            />
                        </Route>
                        <Route exact path="/user/account/change-password">
                            <ChangePassword token={token["auth"]} />
                        </Route>
                        <Route exact path="/auth/user/forgot-password">
                            <ForgotPassword token={token["auth"]} />
                        </Route>
                    </div>
                    <div className="bottom">
                        <Footer
                            logout={logoutHandler}
                            user={user}
                            logo={logo}
                        />
                    </div>
                </div>
            </Router>
        </ToastProvider>
    );
}

export default App;
const rootDiv = document.getElementById("root");
render(<App />, rootDiv);
