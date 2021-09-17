import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScaleLoader } from "react-spinners";

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
                    <span>{lyrics ? lyrics.title : ""}</span>
                  </div>
                </div>
                <div className="lyrics-artist-wrapper">
                  <div className="lyrics-artist">
                    <span>{lyrics ? lyrics.artist : ""}</span>
                  </div>
                </div>
                <div className="lyrics-text-wrapper">
                  <div className="lyrics-text">
                    <p className="l-txt">{lyrics ? lyrics.body : ""}</p>
                  </div>
                  <br />
                </div>
                {lyrics ? (
                  <div className="lyrics-footer-wrapper">
                    <div className="lyrics-footer">
                      <div className="lyrics-footer-item">
                        <i
                          style={{
                            color: watchlisted === "true" ? "red" : "white",
                          }}
                          onClick={() => {
                            watchlisted === "true"
                              ? removeWatchlist(lyrics.id)
                              : addWatchlist(lyrics.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </i>
                      </div>
                      <div className="lyrics-footer-item">
                        <i>
                          <FontAwesomeIcon icon={faFilePdf} />
                        </i>
                      </div>
                      <div className="lyrics-footer-item">
                        <i>
                          <FontAwesomeIcon icon={faCopy} />
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
                  <span>Sorry, we could not get that lyrics :(</span>
                </div>
                <div className="shuffle-wrpper" onClick={() => random()}>
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
