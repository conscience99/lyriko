import React from "react";
import { useState } from "react";

import { useToasts } from "react-toast-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScaleLoader } from "react-spinners";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import {
    faCompactDisc,
    faMusic,
    faHeart,
    faCopy,
    faFilePdf,
    faRandom,
} from "@fortawesome/free-solid-svg-icons";

const Lyrics = ({
    lyrics,
    notFound,
    lyricsLoading,
    random,
    watchlisted,
    removeWatchlist,
    addWatchlist,
}) => {
    const { addToast } = useToasts();
    function copy(text) {
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
    return (
        <div className="lyrics-main">
            <div className="lyrics-wrapper">
                <div className="lyrics">
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
                                <div className="lyrics-title-wrapper">
                                    <div className="lyrics-title">
                                        <span>
                                            {lyrics ? lyrics.title : ""}
                                        </span>
                                    </div>
                                </div>
                                <div className="lyrics-artist-wrapper">
                                    <div className="lyrics-artist">
                                        <span>
                                            {lyrics ? lyrics.artist : ""}
                                        </span>
                                    </div>
                                </div>
                                <div className="lyrics-text-wrapper">
                                    <div className="lyrics-text">
                                        <p className="l-txt">
                                            {lyrics ? lyrics.body : ""}
                                        </p>
                                    </div>
                                    <br />
                                </div>
                                {lyrics ? (
                                    <div className="lyrics-footer-wrapper">
                                        <div className="lyrics-footer">
                                            <div className="lyrics-footer-item">
                                                <i
                                                    style={{
                                                        color:
                                                            watchlisted ===
                                                            "true"
                                                                ? "red"
                                                                : "white",
                                                    }}
                                                    onClick={() => {
                                                        watchlisted === "true"
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
                                            <div className="lyrics-footer-item">
                                                <i>
                                                    <FontAwesomeIcon
                                                        icon={faFilePdf}
                                                        onClick={() => {
                                                            GeneratePdf();
                                                        }}
                                                    />
                                                </i>
                                            </div>
                                            <div className="lyrics-footer-item">
                                                <i>
                                                    <FontAwesomeIcon
                                                        icon={faCopy}
                                                        onClick={() =>
                                                            copy(copyTemp)
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
                                        Sorry, we could not get that lyrics :(
                                    </span>
                                </div>
                                <div
                                    className="shuffle-wrpper"
                                    onClick={() => random()}
                                >
                                    <div className="shuffle">
                                        <div className="random-icon">
                                            <FontAwesomeIcon icon={faRandom} />
                                        </div>
                                        <div className="random-txt">
                                            Click me to get random lyrics
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
    );
};

export default Lyrics;
