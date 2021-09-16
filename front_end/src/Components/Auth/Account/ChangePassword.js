import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faTimesCircle,
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { useToasts } from "react-toast-notifications";
const ChangePassword = ({ token }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [currentPasswordMsg, setCurrentwordPassMsg] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [newPasswordValid, setNewPasswordValid] = useState();
  const [newPasswordError, setNewPasswordError] = useState();
  const [newPasswordErrorMsg, setNewPasswordErrorMsg] = useState();
  const [newPasswordMatch, setNewPasswordMatch] = useState();
  const [newPasswordMatchMsg, setNewPasswordMatchMsg] = useState();

  const { addToast } = useToasts();
  const flashInputs = (className) => {
    document.querySelector(`#${className}`).style.borderColor = "red";
    setTimeout(() => {
      document.querySelector(`#${className}`).style.borderColor = "#706d6d";
    }, 2000);
  };

  const changePasswordHandler = () => {
    if (currentPassword === "") {
      flashInputs("cr-pass");
      return false;
    }
    if (!newPasswordValid) {
      flashInputs("pass");
      return false;
    }
    if (!newPasswordMatch) {
      flashInputs("cpass");
      return false;
    } else {
      fetch("https://lyriko.herokuapp.com/api/user/change-password/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          access: "current_password",
          current_password: currentPassword,
          new_password: newPassword1,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            flashInputs("cr-pass");
            setCurrentPasswordError(true);
            setCurrentwordPassMsg("Incorrect password");
          } else {
            addToast("Password changed!", {
              appearance: "success",
              autoDismiss: true,
            });
            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
          }
        });
    }
  };

  const checkPasswordMatch = () => {
    if (newPassword1 !== newPassword2) {
      setNewPasswordMatch(false);
    } else {
      setNewPasswordMatch(true);
    }
  };

  const validateNewPassword = () => {
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    if (
      !newPassword1.match(lowerCaseLetters) ||
      !newPassword1.match(numbers) ||
      newPassword1.length < 6
    ) {
      setNewPasswordValid(false);
    } else {
      setNewPasswordValid(true);
    }
  };

  return (
    <div className="signup-form">
      <form className="form">
        <div className="header">
          <h3>Change your password</h3>
          <p>
            <Link to="/auth/user/forgot-password" className="login-link">
              Forgot your password?
            </Link>
          </p>
        </div>
        <div className="name-inputs-wrapper">
          <div className="name-inputs">
            <div className="username">
              <label className="form-label">Current Password</label>
              <input
                id="cr-pass"
                type="password"
                value={currentPassword}
                onChange={(evt) => setCurrentPassword(evt.target.value)}
                className="form-control"
              />
              {currentPasswordError ? (
                <span className="error-msg">
                  <FontAwesomeIcon icon={faExclamationTriangle} />{" "}
                  {currentPasswordMsg}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="email-pass-wrapper">
          <div className="email-pass-inputs">
            <div className="password">
              <label className="form-label">
                New Password{" "}
                {newPassword1 !== "" ? (
                  <FontAwesomeIcon
                    icon={newPasswordValid ? faCheckCircle : faTimesCircle}
                    className={newPasswordValid ? "check" : "times"}
                  />
                ) : (
                  ""
                )}
              </label>
              <input
                id="pass"
                value={newPassword1}
                type="password"
                className="form-control"
                onKeyUp={() => {
                  validateNewPassword();
                  checkPasswordMatch();
                }}
                onChange={(evt) => {
                  setNewPassword1(evt.target.value);
                }}
              />
              {newPasswordError ? (
                <span className="error-msg">
                  <FontAwesomeIcon icon={faExclamationTriangle} />{" "}
                  {newPasswordErrorMsg}
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="password">
              <label className="form-label">
                Retype New Password{" "}
                {newPassword2 != "" ? (
                  <FontAwesomeIcon
                    icon={newPasswordMatch ? faCheckCircle : faTimesCircle}
                    className={newPasswordMatch ? "check" : "times"}
                  />
                ) : (
                  ""
                )}{" "}
              </label>
              <input
                id="cpass"
                value={newPassword2}
                type="password"
                className="form-control"
                onKeyUp={() => checkPasswordMatch()}
                onChange={(evt) => setNewPassword2(evt.target.value)}
              />
              {newPasswordMatchMsg ? (
                <span className="error-msg">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  {newPasswordMatchMsg}
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="sign-up-btn">
              <a
                className="btn btn-primary"
                onClick={() => {
                  changePasswordHandler();
                }}
              >
                Change Password
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
