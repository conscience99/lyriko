import "./History.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import urlSlug from "url-slug";
import { ScaleLoader } from "react-spinners";

const History = ({ history, loading, user, getHistory }) => {
  document.title = "History -Lyriko";
  useEffect(() => {
    /*     if (!user["user"]) {
      window.location.href = "/login";
    } */
    window.scrollTo({
      top: 0,
    });
    getHistory();
  }, []);

  return (
    <div className="history-container">
      <div className="history-wrapper">
        <div className="history">
          <div className="header-container">
            {" "}
            <h1>History</h1>
          </div>
          <div className="history-body">
            <div className="history-main">
              <div>
                <div className="history-list">
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
                      {!user["user"] || !history ? (
                        <div>
                          <div className="empty-text">
                            <p>
                              <Link to="/login">Login</Link> to view your
                              history.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {history.length >= 1 ? (
                            history.map((lyrics, index) => {
                              return (
                                <div className="history-list-item" key={index}>
                                  <div className="main-wa">
                                    <Link
                                      to={`/lyrics/${urlSlug(
                                        lyrics.artist
                                      )}/${urlSlug(lyrics.title)}`}
                                    >
                                      <FontAwesomeIcon
                                        icon={faMusic}
                                        className="t-l-i"
                                      />
                                      {lyrics.title}
                                      <span className="t-l-a">
                                        {lyrics.artist}
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="icon-wr">
                                    <FontAwesomeIcon
                                      className="de-ic"
                                      icon={faTrashAlt}
                                    />
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <div className="empty-text">
                              <p>Empty</p>
                            </div>
                          )}{" "}
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

export default History;
