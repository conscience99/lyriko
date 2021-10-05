import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import {
    faTimesCircle,
    faCheckCircle,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
const SignUp = ({ setToken, setUser, token }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [usernameValid, setUsernameValid] = useState("");
    const [emailValid, setEmailValid] = useState("");
    const [passwordValid, setPasswordValid] = useState("");
    const [checked, setChecked] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [vError, setVerror] = useState(false);
    const [vErrorMsg, setVErrorMsg] = useState("");
    const [code, setCode] = useState("");
    const [verifying, setVerifying] = useState(false);
    const { addToast } = useToasts();
    document.title = "Join - Lyriko";

    const validatePassword = () => {
        var lowerCaseLetters = /[a-z]/g;
        var numbers = /[0-9]/g;
        if (
            !password.match(lowerCaseLetters) ||
            !password.match(numbers) ||
            password.length < 6
        ) {
            setPasswordValid(false);
        } else {
            setPasswordValid(true);
        }
    };

    const validateUsername = () => {
        if (!username.match(/^[a-z0-9_-]{4,16}$/)) {
            setUsernameValid(false);
        } else {
            setUsernameValid(true);
        }
    };

    const validateEmail = () => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!username.match(re)) {
            setEmailValid(false);
        }
        if (
            email.indexOf("@") < 3 ||
            email.lastIndexOf(".") < email.indexOf("@") + 2 ||
            email.lastIndexOf(".") + 2 >= email.length ||
            email.lastIndexOf(".") - email.indexOf("@") <= 2 ||
            email.substring(0, 1).match(/[0-9]/) ||
            email.includes(" ")
        ) {
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
    };
    const checkPassword = () => {
        if (password !== confirmPassword) {
            setPasswordMatch(false);
        } else {
            setPasswordMatch(true);
        }
    };
    const flashInputs = (className) => {
        document.querySelector(`#${className}`).style.borderColor = "red";
        setTimeout(() => {
            document.querySelector(`#${className}`).style.borderColor =
                "#706d6d";
        }, 2000);
    };

    const sendCode = () => {
        fetch("https://lyrik0.herokuapp.com/api/sendcode", {
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
                    addToast(`Email sent to${email}`, {
                        appearance: "success",
                        autoDismiss: true,
                    });
                } else {
                    addToast("Faild. Try again", {
                        appearance: "success",
                        autoDismiss: true,
                    });
                    return false;
                }
            });
    };

    const CodeVerification = () => {
        if (code.length < 1) {
            setVerror(true);
            setVErrorMsg("This field is required.");
            flashInputs("code");
            return false;
        } else {
            fetch("https://lyrik0.herokuapp.com/api/verifycode", {
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
                        addToast("Verified!", {
                            appearance: "success",
                            autoDismiss: true,
                        });
                        window.location.href = "/";
                    } else {
                        flashInputs("code");
                        setVErrorMsg("Invalid code");
                        return false;
                    }
                });
        }
    };

    const handleSignUp = () => {
        if (email === "" || !emailValid) {
            flashInputs("email");
            return false;
        }
        if (username === "" || !usernameValid) {
            flashInputs("username");
            return false;
        }
        if (password === "" || !passwordValid) {
            flashInputs("pass");
            return false;
        }
        if (confirmPassword !== password) {
            flashInputs("pass");
            flashInputs("cpass");
            return false;
        }
        if (!checked) {
            document.querySelector("#t-c-txt").style.color = "#db0226";
            setTimeout(() => {
                document.querySelector("#t-c-txt").style.color = "#b6b6b6";
            }, 2000);
            return false;
        } else {
            fetch("https://lyrik0.herokuapp.com/api/signup", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    username: username,
                    email: email,
                    password: password,
                    email_username: email,
                }),
            })
                .then((resp) => resp.json())
                .then((resp) => {
                    if (resp["username"]) {
                        setUsernameError(true);
                        setUsernameErrorMsg("Username already taken.");
                        flashInputs("username");
                    }
                    if (resp["email"]) {
                        setEmailError(true);
                        setEmailErrorMsg("Email already taken.");
                        flashInputs("email");
                    } else {
                        setToken("auth", resp["token"]);
                        setUser("user", resp["user"]);
                        addToast("Succcess! Enter code to continue.", {
                            appearance: "success",
                            autoDismiss: true,
                        });
                        setToken("auth", resp["token"]);
                        setUser("user", resp["user"]);
                        setVerifying(true);
                    }
                });
        }
    };

    return (
        <div className="signup-form">
            <form className="form">
                {!verifying ? (
                    <div>
                        <div className="header">
                            <h3>Sign up</h3>
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" className="login-link">
                                    Login.
                                </Link>
                            </p>
                        </div>
                        <div className="name-inputs-wrapper">
                            <div className="name-inputs">
                                <div className="first-name">
                                    <label className="form-label">
                                        First name
                                    </label>

                                    <input
                                        placeholder="John"
                                        value={firstName}
                                        type="name"
                                        className="form-control"
                                        id="first-name"
                                        onChange={(evt) =>
                                            setFirstName(evt.target.value)
                                        }
                                    />
                                </div>
                                <div className="last-name">
                                    <label className="form-label">
                                        Last name
                                    </label>

                                    <input
                                        id="last-name"
                                        placeholder="Doe"
                                        value={lastName}
                                        type="name"
                                        className="form-control"
                                        onChange={(evt) =>
                                            setLastName(evt.target.value)
                                        }
                                    />
                                </div>
                                <div className="username">
                                    <label className="form-label">
                                        Choose Username*{" "}
                                        {username != "" ? (
                                            <FontAwesomeIcon
                                                icon={
                                                    usernameValid
                                                        ? faCheckCircle
                                                        : faTimesCircle
                                                }
                                                className={
                                                    usernameValid
                                                        ? "check"
                                                        : "times"
                                                }
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </label>
                                    <input
                                        id="username"
                                        type="name"
                                        value={username}
                                        onChange={(evt) =>
                                            setUsername(evt.target.value)
                                        }
                                        onKeyUp={() => {
                                            validateUsername();
                                        }}
                                        className="form-control"
                                    />
                                    {usernameError ? (
                                        <span className="error-msg">
                                            <FontAwesomeIcon
                                                icon={faExclamationTriangle}
                                            />{" "}
                                            {usernameErrorMsg}
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="email-pass-wrapper">
                            <div className="email-pass-inputs">
                                <div className="email">
                                    <label className="form-label">
                                        Email Address*{" "}
                                        {email !== "" ? (
                                            <FontAwesomeIcon
                                                icon={
                                                    emailValid
                                                        ? faCheckCircle
                                                        : faTimesCircle
                                                }
                                                className={
                                                    emailValid
                                                        ? "check"
                                                        : "times"
                                                }
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </label>
                                    <input
                                        id="email"
                                        value={email}
                                        placeholder="email@example.com"
                                        type="email"
                                        className="form-control"
                                        onChange={(evt) =>
                                            setEmail(evt.target.value)
                                        }
                                        onKeyUp={() => validateEmail()}
                                    />
                                    {emailError ? (
                                        <span className="error-msg">
                                            <FontAwesomeIcon
                                                icon={faExclamationTriangle}
                                            />{" "}
                                            {emailErrorMsg}
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="password">
                                    <label className="form-label">
                                        Choose Password*{" "}
                                        {password !== "" ? (
                                            <FontAwesomeIcon
                                                icon={
                                                    passwordValid
                                                        ? faCheckCircle
                                                        : faTimesCircle
                                                }
                                                className={
                                                    passwordValid
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
                                        value={password}
                                        placeholder="Min len: six chars"
                                        type="password"
                                        className="form-control"
                                        onChange={(evt) =>
                                            setPassword(evt.target.value)
                                        }
                                        onKeyUp={() => {
                                            validatePassword();
                                            checkPassword();
                                        }}
                                    />
                                </div>
                                <div className="c-password">
                                    <label className="form-label">
                                        Confirm Password*{" "}
                                        {confirmPassword != "" ? (
                                            <FontAwesomeIcon
                                                icon={
                                                    passwordMatch
                                                        ? faCheckCircle
                                                        : faTimesCircle
                                                }
                                                className={
                                                    passwordMatch
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
                                        value={confirmPassword}
                                        className="form-control"
                                        onChange={(evt) =>
                                            setConfirmPassword(evt.target.value)
                                        }
                                        onKeyUp={() => checkPassword()}
                                    />
                                </div>
                                <div className="form-check">
                                    <input
                                        checked={checked}
                                        onChange={(evt) => {
                                            setChecked(!checked);
                                        }}
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label
                                        id="t-c-txt"
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                    >
                                        Agree to Terms and Conditions
                                    </label>
                                </div>
                                <div className="sign-up-btn">
                                    <a
                                        className="btn btn-primary"
                                        onClick={() => {
                                            handleSignUp();
                                        }}
                                    >
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="verification_area">
                            <div className="header">
                                <p>
                                    Enter the code sent to {email} to complete
                                    signup.
                                </p>
                            </div>
                            <div className="code-input">
                                <input
                                    id="code"
                                    type="text"
                                    placeholder="eg: 123456"
                                    className="form-control"
                                    value={code}
                                    onChange={(evt) =>
                                        setCode(evt.target.value)
                                    }
                                />
                            </div>
                            {vError ? (
                                <div className="code-error">
                                    <FontAwesomeIcon
                                        icon={faExclamationTriangle}
                                    />
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
                                            sendCode();
                                        }}
                                    >
                                        Retry
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default SignUp;
