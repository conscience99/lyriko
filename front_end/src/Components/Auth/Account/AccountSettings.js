import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import {
    faUserCircle,
    faKey,
    faUserAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { SyncLoader } from "react-spinners";
const AccountSettings = ({ user, token, setUser }) => {
    const [fullName, setFullName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [editing, setEditing] = useState(true);
    const [loading, setLoading] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [usernameValid, setUsernameValid] = useState(true);
    const { addToast } = useToasts();

    useEffect(() => {
        autoSet();
        if (!token) {
            window.location.href = "/login";
        }
    }, []);
    const autoSet = () => {
        if (user["user"]) {
            const fn = `${user["user"].first_name} ${user["user"].last_name}`;
            setFullName(fn);
            setLastName(user["user"].last_name);
            setFirstName(user["user"].first_name);
            setUsername(user["user"].username);
            setEmail(user["user"].email);
        }
    };

    const flashInputs = (className) => {
        document.querySelector(`#${className}`).style.borderColor = "red";
        setTimeout(() => {
            document.querySelector(`#${className}`).style.borderColor =
                "#001a63";
        }, 2000);
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

    const validateUsername = () => {
        if (!username.match(/^[a-z0-9_-]{4,16}$/)) {
            setUsernameValid(false);
        } else {
            setUsernameValid(true);
        }
    };

    const makeChanges = () => {
        if (email.length < 1) {
            flashInputs("e-editing-in");
            return false;
        }
        if (!emailValid) {
            flashInputs("e-editing-in");
            return false;
        }
        if (username.length < 1) {
            flashInputs("u-editing");
            return false;
        }
        if (!usernameValid) {
            flashInputs("u-editing");
            return false;
        } else {
            setLoading(true);
            setTimeout(() => {
                fetch("https://lyrik0.herokuapp.com/api/user/acct/modify/", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({
                        email: email,
                        first_name: firstName,
                        last_name: lastName,
                        username: username,
                    }),
                })
                    .then((res) => res.json())
                    .then((res) => {
                        if (res["user"]) {
                            setLoading(false);
                            setUser("user", res["user"]);
                            addToast("Saved!", {
                                appearance: "success",
                                autoDismiss: true,
                            });
                            setEditing(false);
                            const fn = `${res["user"].first_name} ${res["user"].last_name}`;
                            setFullName(fn);
                            setLastName(res["user"].last_name);
                            setFirstName(res["user"].first_name);
                            setUsername(res["user"].username);
                            setEmail(res["user"].email);
                        } else {
                            setLoading(false);
                            addToast("Unknown Error", {
                                appearance: "error",
                                autoDismiss: true,
                            });
                        }
                    });
            }, 1000);
        }
    };

    return (
        <div className="account-set-container">
            <div className="account-set-wrapper">
                <div className="account-set">
                    <div className="header-container">
                        {" "}
                        <h1 className="acct-title">Account</h1>
                        <div className="acc-loader">
                            <SyncLoader
                                size="10px"
                                color={"#e9042a"}
                                loading={loading}
                            />
                        </div>
                        <div className="top-right-acct">
                            <span
                                className={editing ? "save-text" : "edit-text"}
                                onClick={() => {
                                    editing ? makeChanges() : setEditing(true);
                                }}
                            >
                                {editing ? "Save" : "Edit"}
                            </span>
                        </div>
                    </div>

                    <div className="account-set-body">
                        <div className="account-set-main">
                            <div className="ava-wrap">
                                <div className="ava">
                                    <div className="r-va">
                                        <span className="user-icon-o">
                                            <FontAwesomeIcon
                                                className="user--icon"
                                                icon={faUserCircle}
                                            />
                                        </span>
                                    </div>
                                    <div className="name-wrapper">
                                        {editing ? (
                                            <div className="editing-name-wr">
                                                <div className="i-1">
                                                    <input
                                                        className="editing-name"
                                                        type="name"
                                                        placeholder="First Name"
                                                        value={firstName}
                                                        onChange={(evt) =>
                                                            setFirstName(
                                                                evt.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="i-2">
                                                    <input
                                                        className="editing-name"
                                                        type="name"
                                                        placeholder="Last Name"
                                                        value={lastName}
                                                        onChange={(evt) =>
                                                            setLastName(
                                                                evt.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="name">
                                                <h4>{fullName}</h4>
                                            </div>
                                        )}
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <br />
                            <div className="details">
                                <div className="email-details">
                                    {editing ? (
                                        <div id="e-editing" className="editing">
                                            <div className="e-input">
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                />
                                                <input
                                                    id="e-editing-in"
                                                    className="editing-input"
                                                    type="email"
                                                    value={email}
                                                    onChange={(evt) =>
                                                        setEmail(
                                                            evt.target.value
                                                        )
                                                    }
                                                    onKeyUp={() =>
                                                        validateEmail()
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <p>
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                            />{" "}
                                            <b>{user["user"].email}</b>
                                        </p>
                                    )}
                                </div>
                                <div className="username-details">
                                    {editing ? (
                                        <div id="u-editing" className="editing">
                                            <div className="u-input">
                                                <FontAwesomeIcon
                                                    icon={faUserAlt}
                                                />
                                                <input
                                                    className="editing-input"
                                                    type="name"
                                                    value={username}
                                                    onChange={(evt) =>
                                                        setUsername(
                                                            evt.target.value
                                                        )
                                                    }
                                                    onKeyUp={() => {
                                                        validateUsername();
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <p>
                                            <FontAwesomeIcon icon={faUserAlt} />{" "}
                                            <b>{user["user"].username}</b>
                                        </p>
                                    )}
                                </div>
                                <hr />
                                <br />
                                <div className="pass-details">
                                    <p>
                                        <Link to="/user/account/change-password">
                                            <FontAwesomeIcon icon={faKey} />{" "}
                                            Change password
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
