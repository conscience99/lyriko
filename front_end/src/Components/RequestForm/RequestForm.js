import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlighter from "react-highlight-words";
import {
  faCompactDisc,
  faMusic,
  faSearch,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

import "./RequestForm.css";
const RequestForm = ({ getLyrics, openMobileMenu, random }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [suggesting, setSuggesting] = useState(false);
  const [suggestions, setSuggestions] = useState("");

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

  const suggestionHandler = (Type) => {
    if (Type == "Title") {
      if (title.length <= 2) {
        setSuggesting(false);
      } else if (title.length >= 2) {
        fetch("https://lyriko.herokuapp.com/api/suggest", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            type: "title",
            title: title,
          }),
        })
          .then((sugs) => sugs.json())
          .then((sugs) => {
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
        fetch("https://lyriko.herokuapp.com/api/suggest", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            type: "artist",
            artist: artist,
          }),
        })
          .then((sugs) => sugs.json())
          .then((sugs) => {
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

  return (
    <div className="request-form">
      <div className="r-form-wrapper">
        <div className="request-form-title">
          <div>
            <FontAwesomeIcon role="icon" className="f-t-icon" icon={faMusic} />
          </div>

          <div>
            <input
              className="form-title"
              type="text"
              value={title}
              onChange={(evt) => {
                setTitle(evt.target.value);
              }}
              onKeyUp={() => {
                suggestionHandler("Title");
              }}
              placeholder="Song"
            />
          </div>
        </div>
        <div className="request-form-artist">
          <div>
            <FontAwesomeIcon className="f-a-icon" icon={faCompactDisc} />
          </div>

          <div>
            <input
              className="form-artist"
              value={artist}
              onChange={(evt) => {
                setArtist(evt.target.value);
              }}
              onKeyUp={() => {
                suggestionHandler("Artist");
              }}
              type="text"
              placeholder="Artist"
            />
          </div>
        </div>
        <button
          className="d-r-f-button"
          onClick={() => getLyricsHandler(artist, title)}
        >
          <FontAwesomeIcon className="d-f-s-icon" icon={faSearch} />
        </button>
        <button className="d-r-f-button" onClick={() => random()}>
          <FontAwesomeIcon className="d-f-s-icon" icon={faRandom} />
        </button>
      </div>

      <div
        className={
          suggesting ? "suggestion-wrapper drop" : "suggestion-wrapper"
        }
      >
        {!openMobileMenu ? (
          <div className="suggestion">
            <ul className="suggestion-list">
              {suggestions
                ? suggestions.map((suggestion) => {
                    return (
                      <li
                        key={suggestion.id}
                        className="suggestion-list-item"
                        onClick={() => {
                          getLyricsHandler(suggestion.artist, suggestion.title);
                          setSuggesting(false);
                        }}
                      >
                        <FontAwesomeIcon className="s-icon" icon={faMusic} />
                        <Highlighter
                          highlightClassName="present-txt"
                          searchWords={[`${title}`]}
                          autoEscape={true}
                          textToHighlight={suggestion.title}
                        />
                        <span className="s-artist">{suggestion.artist}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="request-form-button">
        <button
          className="r-f-button"
          onClick={() => getLyricsHandler(artist, title)}
        >
          <FontAwesomeIcon className="f-s-icon" icon={faSearch} /> Search
        </button>
      </div>
    </div>
  );
};

export default RequestForm;
