import { useState, useEffect } from "react";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Verify = ({
  user,
  token,
  is_authenticated,
  is_verified,
  setVerified,
}) => {
  const [code, setCode] = useState("");
  const [vError, setVerror] = useState(false);
  const [vErrorMsg, setVErrorMsg] = useState("");
  const { addToast } = useToasts();
  const [email, setEmail] = useState("");
  const flashInputs = (className) => {
    document.querySelector(`#${className}`).style.borderColor = "red";
    setTimeout(() => {
      document.querySelector(`#${className}`).style.borderColor = "#706d6d";
    }, 2000);
  };

  useEffect(() => {
    if (token["auth"]) {
      setEmail(user["user"].email);
    }
    sendCode(user["user"].email);
  }, []);

  const sendCode = (email) => {
    if (is_authenticated) {
      fetch("https://lyriko.herokuapp.com/api/sendcode", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token["auth"]}`,
        },
        body: JSON.stringify({ email: email }),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp["success"]) {
            addToast(`Code sent to ${email}`, {
              appearance: "success",
              autoDismiss: true,
            });
          } else {
            addToast("Faild. Try again", {
              appearance: "error",
              autoDismiss: true,
            });
            return false;
          }
        });
    }
  };

  const CodeVerification = () => {
    if (code.length < 1) {
      setVerror(true);
      setVErrorMsg("This field is required.");
      flashInputs("code");
      return false;
    } else {
      fetch("https://lyriko.herokuapp.com/api/verifycode", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token["auth"]}`,
        },
        body: JSON.stringify({ code: code }),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp["msg"]) {
            addToast("Verified!", { appearance: "success", autoDismiss: true });
            window.location.href = "/";
          } else {
            flashInputs("code");
            setVErrorMsg("Invalid code");
            return false;
          }
        });
    }
  };

  return (
    <div>
      {is_authenticated ? (
        <div className="signup-form">
          <form className="form">
            <div className="verification_area">
              <div className="header">
                <p>Enter the six digits code sent to {email} to continue.</p>
              </div>
              <div className="code-input">
                <input
                  id="code"
                  type="text"
                  placeholder="eg: 123456"
                  className="form-control"
                  value={code}
                  onChange={(evt) => setCode(evt.target.value)}
                />
              </div>
              {vError ? (
                <div className="code-error">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  {vErrorMsg}
                </div>
              ) : (
                ""
              )}
              <div className="verification-btn">
                <a
                  className="btn btn-primary"
                  onClick={() => CodeVerification()}
                >
                  Verify
                </a>
              </div>
              <div className="resent-area">
                <p>
                  Didn't get any code?{" "}
                  <span
                    className="r-link"
                    onClick={() => {
                      sendCode(email);
                    }}
                  >
                    Retry
                  </span>
                  .
                </p>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>
          {is_verified ? (
            <div>
              <h1>404</h1>
              <h5>Page not found.</h5>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Verify;
