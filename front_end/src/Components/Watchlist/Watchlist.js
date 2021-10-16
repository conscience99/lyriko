import { useEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Watchlist = ({
    watchlist,
    removeWatchlist,
    loading,
    user,
    getWatchlist,
}) => {
    document.title = "Watchlist - Lyriko";
    useEffect(() => {
        getWatchlist();
    }, []);
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    const meta = {
        title: "Lyriko",
        description:
            "Lyriko is a different kind of music lyrics website being built to get you closer to the lyrics. You can copy lyrics to clipboard, download lyrics pdf, add to your watchlist, check your history to see all lyrics you've searched.",
        canonical: "https://www.lyrik0.herokuapp.com",
        meta: {
            charset: "utf-8",
            name: {
                keywords:
                    "lyrics,song,songs,artist,artists,music,band,album,rock,blues,hiphop",
            },
        },
    };

    return (
        <div className="watchlist-container">
            <div className="watchlist-wrapper">
                <div className="watchlist">
                    <div className="header-container">
                        {" "}
                        <h1>Watchlist</h1>
                    </div>
                    <div className="watchlist-body">
                        <div className="watchlist-main">
                            <div>
                                <div className="watchlist-list">
                                    {loading ? (
                                        <div className="loader">
                                            <ScaleLoader
                                                color={"#e9042a"}
                                                loading={loading}
                                                height={55}
                                                width={25}
                                                radius={5}
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            {!user["user"] || !watchlist ? (
                                                <div>
                                                    <div className="empty-text">
                                                        <p>
                                                            <Link to="/login">
                                                                Login
                                                            </Link>{" "}
                                                            to view your
                                                            watchlist.
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    {watchlist.length >= 1 ? (
                                                        watchlist.map(
                                                            (lyrics, index) => {
                                                                return (
                                                                    <div
                                                                        className="watchlist-list-item"
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <div className="main-wa">
                                                                            <Link
                                                                                to={`/lyrics/${lyrics.artist_slug}/${lyrics.title_slug}`}
                                                                            >
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faMusic
                                                                                    }
                                                                                    className="t-l-i"
                                                                                />
                                                                                {
                                                                                    lyrics.title
                                                                                }
                                                                                <span className="t-l-a">
                                                                                    {
                                                                                        lyrics.artist
                                                                                    }
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="icon-wr">
                                                                            <FontAwesomeIcon
                                                                                className="de-ic"
                                                                                icon={
                                                                                    faTrashAlt
                                                                                }
                                                                                onClick={() =>
                                                                                    removeWatchlist(
                                                                                        lyrics.id
                                                                                    )
                                                                                }
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                        )
                                                    ) : (
                                                        <div className="empty-text">
                                                            <p>Empty</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watchlist;
