import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UrlSlug from "url-slug";
import { useToasts } from "react-toast-notifications";
import { ScaleLoader } from "react-spinners";
import DocumentMeta from "react-document-meta";
import {
    faCompactDisc,
    faMusic,
    faHeart,
    faCopy,
    faFilePdf,
    faRandom,
    faBackward,
} from "@fortawesome/free-solid-svg-icons";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Lyrics1 = ({ user, token, addWatchlist, removeWatchlist }) => {
    const { artist, title } = useParams();
    const [lyrics, setLyrics] = useState();
    const [lyricsLoading, setLyricsLoading] = useState();
    const [notFound, setNotFound] = useState();
    const [watchlisted, setWatchlisted] = useState();
    const { addToast } = useToasts();

    useEffect(() => {
        getLyrics(artist, title);
        checkWatchlist();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    function copy(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(
            function () {
                addToast(
                    `Copied ${lyrics ? lyrics.title : ""} by ${
                        lyrics ? lyrics.artist : ""
                    } to clipbaord`,
                    {
                        appearance: "success",
                        autoDismiss: true,
                    }
                );
            },
            function (err) {
                addToast(`Something went wrong`, {
                    appearance: "info",
                    autoDismiss: true,
                });
            }
        );
    }

    const copyTemp = `${lyrics ? lyrics.title : ""} by ${
        lyrics ? lyrics.artist : ""
    }\nsource:https://www.lyrik0.herokuapp.com \n\n\n${
        lyrics ? lyrics.body : ""
    }\n\n\nsource:https://www.lyrik0.herokuapp.com `;

    //Generate pdf///

    var docDefinition = {
        watermark: {
            text: "https://www.lyrik0.herokuapp.com",
            color: "blue",
            opacity: 0.1,
            bold: true,
            italics: false,
            angle: 70,
        },
        footer: {
            text: "https://www.lyrik0.herokuapp.com",
            alignment: "right",
        },

        content: [
            { text: `${lyrics ? lyrics.title : ""}`, style: "titleStyle" },
            { text: "By", style: "byStyle" },
            { text: `${lyrics ? lyrics.artist : ""}`, style: "artistStyle" },
            {
                text: `${"Visit https://www.lyrik0.herokuapp.com for more"}`,
                style: "markStyle",
            },
            { text: " " },
            { text: `${lyrics ? lyrics.body : ""}`, style: "bodyStyle" },
        ],

        styles: {
            titleStyle: {
                fontSize: 22,
                bold: true,
                alignment: "center",
                color: "purple",
            },
            artistStyle: {
                fontSize: 22,
                bold: true,
                alignment: "center",
                color: "purple",
            },
            bodyStyle: {
                alignment: "center",
            },
            markStyle: {
                italic: true,
                alignment: "center",
                color: "purple",
            },
            byStyle: {
                italic: true,
                alignment: "center",
                color: "purple",
                fontSize: 15,
            },
        },
    };
    const GeneratePdf = () => {
        addToast(
            `Downloading ${lyrics ? lyrics.title : ""} by ${
                lyrics ? lyrics.artist : ""
            }`,
            {
                appearance: "info",
                autoDismiss: true,
            }
        );
        setTimeout(() => {
            pdfMake
                .createPdf(docDefinition)
                .download(`${lyrics ? lyrics.title : ""}_lyrik0.pdf`);
            addToast(`Download Successful!`, {
                appearance: "success",
                autoDismiss: true,
            });
        }, 3000);
    };
    const getLyrics = (artist, title) => {
        const artistSlug = UrlSlug(artist);
        const titleSlug = UrlSlug(title);
        setLyricsLoading(true);
        setNotFound(false);
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

    const meta = {
        title: `${
            lyricsLoading == false
                ? `${lyrics.title} by ${lyrics.artist} lyrics by Lyriko`
                : `Getting lyrics - Lyriko`
        }`,
        description:
            "Lyriko is a different kind of music lyrics website being built to get you closer to the lyrics. You can copy lyrics to clipboard, download lyrics pdf, add to your watchlist, check your history to see all lyrics you've searched.",
        canonical: `https://www.lyrik0.herokuapp.com/lyrics/${
            lyrics ? lyrics.artist_slug : ""
        }/${lyrics ? lyrics.title_slug : ""}`,
        meta: {
            charset: "utf-8",
            name: {
                keywords: `lyrics,song,songs,artist,artists,music,band,album,rock,blues,hiphop,${
                    lyrics ? lyrics.title : ""
                },${lyrics ? lyrics.artist : ""}`,
            },
        },
    };
    checkWatchlist();
    return (
        <div>
            <DocumentMeta {...meta}>
                <div className="Lyrics1-main">
                    <div className="Lyrics1-wrapper">
                        <div className="Lyrics1">
                            <div>
                                {lyricsLoading ? (
                                    <div className="loader">
                                        <ScaleLoader
                                            color={"#e9042a"}
                                            loading={lyricsLoading}
                                            height={55}
                                            width={25}
                                            radius={5}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <div className="Lyrics1-title-wrapper">
                                            <div className="Lyrics1-title">
                                                <span>
                                                    {lyrics ? lyrics.title : ""}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="Lyrics1-artist-wrapper">
                                            <div className="Lyrics1-artist">
                                                <span>
                                                    {lyrics
                                                        ? lyrics.artist
                                                        : ""}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="l-line"></div>
                                        <div className="Lyrics1-text-wrapper">
                                            <div className="Lyrics1-text">
                                                <p className="l-txt">
                                                    {lyrics ? lyrics.body : ""}
                                                </p>
                                            </div>
                                            <br />
                                        </div>
                                        <div className="l-line"></div>
                                        {lyrics ? (
                                            <div className="Lyrics1-footer-wrapper">
                                                <div className="Lyrics1-footer">
                                                    <div className="Lyrics1-footer-item">
                                                        <i
                                                            style={{
                                                                color:
                                                                    watchlisted ===
                                                                    "true"
                                                                        ? "red"
                                                                        : "white",
                                                            }}
                                                            onClick={() => {
                                                                watchlisted ===
                                                                "true"
                                                                    ? removeWatchlist(
                                                                          lyrics.id
                                                                      )
                                                                    : addWatchlist(
                                                                          lyrics.id
                                                                      );
                                                            }}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faHeart}
                                                            />
                                                        </i>
                                                    </div>
                                                    <div className="Lyrics1-footer-item">
                                                        <i>
                                                            <FontAwesomeIcon
                                                                icon={faFilePdf}
                                                                onClick={() => {
                                                                    GeneratePdf();
                                                                }}
                                                            />
                                                        </i>
                                                    </div>
                                                    <div className="Lyrics1-footer-item">
                                                        <i>
                                                            <FontAwesomeIcon
                                                                icon={faCopy}
                                                                onClick={() =>
                                                                    copy(
                                                                        copyTemp
                                                                    )
                                                                }
                                                            />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                )}
                            </div>

                            {notFound ? (
                                <div className="not-found-wrapper">
                                    <div className="not-found">
                                        <div className="s-txt-wr">
                                            <span>
                                                Sorry, we could not get that
                                                lyrics :(
                                            </span>
                                        </div>
                                        <div
                                            className="shuffle-wrpper"
                                            onClick={() =>
                                                window.history.back()
                                            }
                                        >
                                            <div className="shuffle">
                                                <div className="random-icon">
                                                    <FontAwesomeIcon
                                                        icon={faBackward}
                                                    />
                                                </div>
                                                <div className="random-txt">
                                                    Click me to get back
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </DocumentMeta>
        </div>
    );
};

export default Lyrics1;
