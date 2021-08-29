import { useState } from "react";
import "./Recent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import urlSlug from "url-slug";
import { Link } from "react-router-dom";

import { ScaleLoader } from "react-spinners";
import {
  faHistory,
  faMusic,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Recent = ({ recent, getLyrics, loading }) => {
  return (
    <div className="recent-wrapper">
      <div className="recent">
        <div className="recent-header-wrapper">
          <div className="recent-header">
            <div className="recent-title">
              <FontAwesomeIcon icon={faSearch} className="title-icon" />
              <span className="t-title">Recently searched this week...</span>
            </div>
          </div>
        </div>
        <div className="line-spacer"></div>
        <div className="recent-body-wrapper">
          <div className="recent-body">
            <div className="recent-list-wrapper">
              <div className="recent-list">
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
                    <ul className="t-list">
                      {recent
                        ? recent.map((lyrics, index) => {
                            return (
                              <div className="r-list-item-wrapper" key={index}>
                                <li className="r-list-item">
                                  <Link
                                    to={`/lyrics/${urlSlug(
                                      lyrics.artist
                                    )}/${urlSlug(lyrics.title)}`}
                                  >
                                    <FontAwesomeIcon
                                      className="r-l-i"
                                      icon={faMusic}
                                    />{" "}
                                    {lyrics.title.replace("-", " ")}{" "}
                                    <span className="r-l-a">
                                      {lyrics.artist.replace("-", " ")}
                                    </span>{" "}
                                  </Link>
                                </li>
                              </div>
                            );
                          })
                        : ""}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
