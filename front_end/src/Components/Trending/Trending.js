import { useState } from "react";
import { Link } from "react-router-dom";
import "./Trending.css";
import { ScaleLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHeart, faMusic } from "@fortawesome/free-solid-svg-icons";

const Trending = ({ trending, getLyrics, loading }) => {
  return (
    <div className="trending-wrapper">
      <div className="trending">
        <div className="trending-header-wrapper">
          <div className="trending-header">
            <div className="trending-title">
              <FontAwesomeIcon icon={faFire} className="title-icon" />
              <span className="t-title">Trending...</span>
            </div>
          </div>
        </div>
        <div className="line-spacer"></div>
        <div className="trending-body-wrapper">
          <div className="trending-body">
            <div className="trending-list-wrapper">
              <div className="trending-list">
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
                      {trending
                        ? trending.map((lyrics) => {
                            return (
                              <div
                                className="t-list-item-wrapper"
                                key={lyrics.id}
                              >
                                <li className="t-list-item">
                                  <Link
                                    to={`/lyrics/${lyrics.artist_slug}/${lyrics.title_slug}`}
                                  >
                                    <FontAwesomeIcon
                                      className="t-l-i"
                                      icon={faMusic}
                                    />{" "}
                                    {lyrics.title}{" "}
                                    <span className="t-l-a">
                                      {lyrics.artist}
                                    </span>
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

export default Trending;
