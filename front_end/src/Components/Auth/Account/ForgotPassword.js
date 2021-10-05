import React from "react";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faTimesCircle,
    faCheckCircle,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const ForgotPassword = ({ token }) => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPasswordMatch, setNewPasswordMatch] = useState();
    const [newPasswordMatchMsg, setNewPasswordMatchMsg] = useState();
    const [newPasswordValid, setNewPasswordValid] = useState();
    const [newPasswordError, setNewPasswordError] = useState();
    const [newPasswordErrorMsg, setNewPasswordErrorMsg] = useState();
    const [newPassword1, setNewPassword1] = useState("");
    const [newPassword2, setNewPassword2] = useState("");
    const [sendingCode, setSendingCode] = useState(true);
    const [Verifying, setVerifying] = useState();
    const [changingPassword, setChangingPassword] = useState();
    const [vError, setVerror] = useState();
    const [vErrorMsg, setVErrorMsg] = useState();
    const { addToast } = useToasts();

    const flashInputs = (className) => {
        document.querySelector(`#${className}`).style.borderColor = "red";
        setTimeout(() => {
            document.querySelector(`#${className}`).style.borderColor =
                "#706d6d";
        }, 2000);
    };

    const checkPassword = () => {
        if (newPassword1 !== newPassword2) {
            setNewPasswordMatch(false);
        } else {
            setNewPasswordMatch(true);
        }
    };

    const validatePassword = () => {
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

    const sendCode = () => {
        if (email === "") {
            flashInputs("email");
            return false;
        } else {
            fetch("https://lyrik0.herokuapp.com/api/sendcode", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ email: email }),
            })
                .then((resp) => resp.json())
                .then((resp) => {
                    if (resp["success"]) {
                        addToast(`Email sent to ${email}`, {
                            appearance: "success",
                            autoDismiss: true,
                        });
                        setSendingCode(false);
                        setVerifying(true);
                    } else if (resp["error"] === "User not found.") {
                        flashInputs("email");
                        return false;
                    } else {
                        addToast("Error occured", {
                            appearance: "error",
                            autoDismiss: true,
                        });
                        setSendingCode(false);
                        setVerifying(true);
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
            fetch("https://lyrik0.herokuapp.com/api/user/acct/verify/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ code: code, email: email }),
            })
                .then((resp) => resp.json())
                .then((resp) => {
                    if (resp["msg"]) {
                        setVerifying(false);
                        setChangingPassword(true);
                        addToast("Confirmed!", {
                            appearance: "success",
                            autoDismiss: true,
                        });
                    } else if (resp["error"]) {
                        flashInputs("code");
                        setVErrorMsg("Invalid code");
                        return false;
                    }
                });
        }
    };

    const submitPassword = () => {
        if (!newPasswordValid) {
            flashInputs("pass");
            return false;
        }
        if (!newPasswordMatch) {
            flashInputs("pass");
            flashInputs("cpass");
            return false;
        } else {
            fetch("https://lyrik0.herokuapp.com/api/user/change-password/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    access: "code",
                    new_password: newPassword1,
                    email: email,
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res["msg"]) {
                        addToast("Password changed!", {
                            appearance: "success",
                            autoDismiss: true,
                        });
                        window.location.href = "/";
                    }
                });
        }
    };
    return (
        <div className="signup-form">
            <form className="form">
                <div className="header">
                    <h3>Recover Account</h3>
                </div>
                <div className="name-inputs-wrapper">
                    {sendingCode ? (
                        <div className="name-inputs">
                            <div className="username">
                                <p className="f-hint">
                                    Enter the email on your account
                                </p>
                                <label className="form-label">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(evt) =>
                                        setEmail(evt.target.value)
                                    }
                                    className="form-control"
                                />
                            </div>

                            <div className="sign-up-btn">
                                <a
                                    className="btn btn-primary"
                                    onClick={() => sendCode()}
                                >
                                    Confirm
                                </a>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {Verifying ? (
                        <div className="name-inputs">
                            <div className="username">
                                <p className="f-hint">
                                    Enter the six digits code sent to {email}
                                </p>

                                <label className="form-label">
                                    Verification Code:
                                </label>
                                <input
                                    id="code"
                                    type="text"
                                    value={code}
                                    onChange={(evt) =>
                                        setCode(evt.target.value)
                                    }
                                    className="form-control"
                                />
                            </div>

                            <div className="sign-up-btn">
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
                                            sendCode();
                                        }}
                                    >
                                        Retry
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {changingPassword ? (
                        <div>
                            <p className="f-hint">Create new password</p>
                            <div className="password">
                                <label className="form-label">
                                    New Password{" "}
                                    {newPassword1 !== "" ? (
                                        <FontAwesomeIcon
                                            icon={
                                                newPasswordValid
                                                    ? faCheckCircle
                                                    : faTimesCircle
                                            }
                                            className={
                                                newPasswordValid
                                                    ? "check"
                                                    : "times"
                                            }
                                        />
                                    ) : (
                                        ""
                                    )}
                                </label>
                                <input
                                    id="pass"
                                    value={newPassword1}
                                    placeholder="Min len: six chars"
                                    type="password"
                                    className="form-control"
                                    onChange={(evt) =>
                                        setNewPassword1(evt.target.value)
                                    }
                                    onKeyUp={() => {
                                        validatePassword();
                                        checkPassword();
                                    }}
                                />
                            </div>
                            <div className="c-password">
                                <label className="form-label">
                                    Re-type Password{" "}
                                    {newPassword2 != "" ? (
                                        <FontAwesomeIcon
                                            icon={
                                                newPasswordMatch
                                                    ? faCheckCircle
                                                    : faTimesCircle
                                            }
                                            className={
                                                newPasswordMatch
                                                    ? "check"
                                                    : "times"
                                            }
                                        />
                                    ) : (
                                        ""
                                    )}
                                </label>
                                <input
                                    id="cpass"
                                    type="password"
                                    value={newPassword2}
                                    className="form-control"
                                    onChange={(evt) =>
                                        setNewPassword2(evt.target.value)
                                    }
                                    onKeyUp={() => checkPassword()}
                                />
                            </div>
                            <div className="sign-up-btn">
                                <a
                                    className="btn btn-primary"
                                    onClick={() => submitPassword()}
                                >
                                    Submit
                                </a>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
