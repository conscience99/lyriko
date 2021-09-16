import { useState, useEffect } from "react";
import "./Lyrics1.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UrlSlug from "url-slug";

import { ScaleLoader } from "react-spinners";
import {
  faCompactDisc,
  faMusic,
  faHeart,
  faCopy,
  faFilePdf,
  faRandom,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const Lyrics1 = ({ user, token, addWatchlist, removeWatchlist }) => {
  const { artist, title } = useParams();
  const [lyrics, setLyrics] = useState();
  const [lyricsLoading, setLyricsLoading] = useState();
  const [notFound, setNotFound] = useState();
  const [watchlisted, setWatchlisted] = useState();

  useEffect(() => {
    getLyrics(artist, title);
    checkWatchlist();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const getLyrics = (artist, title) => {
    const artistSlug = UrlSlug(artist);
    const titleSlug = UrlSlug(title);
    setLyricsLoading(true);
    setNotFound(false);
    setTimeout(() => {
      fetch(
        `https://lyriko.herokuapp.com/api/lyrics/${artistSlug}/${titleSlug}`,
        {
          method: "POST",

          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            artist: artist.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
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
        fetch("https://lyriko.herokuapp.com/api/checksavelist/", {
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
  return (
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
                    <span>{lyrics ? lyrics.title : ""}</span>
                  </div>
                </div>
                <div className="Lyrics1-artist-wrapper">
                  <div className="Lyrics1-artist">
                    <span>{lyrics ? lyrics.artist : ""}</span>
                  </div>
                </div>
                <div className="l-line"></div>
                <div className="Lyrics1-text-wrapper">
                  <div className="Lyrics1-text">
                    <p className="l-txt">{lyrics ? lyrics.body : ""}</p>
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
                      <div className="Lyrics1-footer-item">
                        <i>
                          <FontAwesomeIcon icon={faFilePdf} />
                        </i>
                      </div>
                      <div className="Lyrics1-footer-item">
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
                <div
                  className="shuffle-wrpper"
                  onClick={() => window.history.back()}
                >
                  <div className="shuffle">
                    <div className="random-icon">
                      <FontAwesomeIcon icon={faBackward} />
                    </div>
                    <div className="random-txt">Click me to get back</div>
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

export default Lyrics1;
