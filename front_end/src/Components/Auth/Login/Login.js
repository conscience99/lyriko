import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faTimesCircle,
    faCheckCircle,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const Login = ({ setToken, setUser }) => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");

    const [passError, setPassError] = useState("");
    const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
    const [passErrorMsg, setPassErrorMsg] = useState("");
    document.title = "Login - Lyriko";
    const flashInputs = (className) => {
        document.querySelector(`#${className}`).style.borderColor = "red";
        setTimeout(() => {
            document.querySelector(`#${className}`).style.borderColor =
                "#706d6d";
        }, 2000);
    };

    const login = () => {
        setUsernameError(false);
        setPassError(false);
        if (username === "") {
            flashInputs("username");
            setUsernameError(true);
            setUsernameErrorMsg("Required");
        }

        if (password === "") {
            flashInputs("pass");
            setPassError(true);
            setPassErrorMsg("Required");
        } else {
            fetch("https://lyrik0.herokuapp.com/api/signin", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    email_username: username,
                    password: password,
                }),
            })
                .then((reps) => reps.json())
                .then((resp) => {
                    if (resp.error) {
                        if (resp.error === "Incorrect password") {
                            setPassError(true);
                            setPassErrorMsg(resp.error);
                        }
                        if (resp.error === "User not found.") {
                            flashInputs("username");

                            setUsernameError(true);
                            setUsernameErrorMsg(resp.error);
                        }
                    } else {
                        setToken("auth", resp["token"]);
                        setUser("user", resp["user"]);
                        window.location.href = "/";
                    }
                });
        }
    };
    return (
        <div className="signup-form">
            <form className="form">
                <div className="header">
                    <h3>Login</h3>
                    <p>
                        Don't have an account?{" "}
                        <Link to="/signup" className="login-link">
                            Sign up.
                        </Link>
                    </p>
                </div>
                <div className="name-inputs-wrapper">
                    <div className="name-inputs">
                        <div className="username">
                            <label className="form-label">
                                Username or Email
                            </label>
                            <input
                                id="username"
                                type="name"
                                value={username}
                                onChange={(evt) =>
                                    setUsername(evt.target.value)
                                }
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
                        <div className="password">
                            <label className="form-label">Password</label>
                            <input
                                id="pass"
                                value={password}
                                type="password"
                                className="form-control"
                                onChange={(evt) =>
                                    setPassword(evt.target.value)
                                }
                            />
                            {passError ? (
                                <span className="error-msg">
                                    <FontAwesomeIcon
                                        icon={faExclamationTriangle}
                                    />{" "}
                                    {passErrorMsg}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>

                        <div className="sign-up-btn">
                            <a
                                className="btn btn-primary"
                                onClick={() => {
                                    login();
                                }}
                            >
                                Login
                            </a>
                        </div>
                        <div>
                            <p>
                                <Link
                                    to="/auth/user/forgot-password"
                                    className="login-link"
                                >
                                    Forgot your password?
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
